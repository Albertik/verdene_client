module.exports = function () {
	/*
	 * Displays winner
	 */
	function NotifyWinner(winner) {
		var text = "Draw";
		if (winner == Jocly.PLAYER_A)
			text = "A wins";
		else if (winner == Jocly.PLAYER_B)
			text = "B wins";
		$("#game-status").text(text);
	}

	/*
	 * Run the game
	 */
	var movePending = null;

	function RunMatch(match, progressBar) {
		var movePendingResolver;

		// first make sure there is no user input or machine search in progress
		var promise = match.abortUserTurn() // just in case one is running
			.then(function() {
				return match.abortMachineSearch(); // just in case one is running
			});

		function NextMove() {
			if (movePending)
				return;
			movePending = new Promise(function(resolve, reject) {
				movePendingResolver = resolve;
			});
			// whose turn is it ?
			match.getTurn()
				.then(function(player) {
					// display whose turn
					$("#game-status").text(player == Jocly.PLAYER_A ? "A playing" : "B playing");
					var mode = $("#mode").val();
					var promise = Promise.resolve();
					if ((player == Jocly.PLAYER_A && (mode == "self-self" || mode == "self-comp")) ||
						(player == Jocly.PLAYER_B && (mode == "self-self" || mode == "comp-self")))
					// user to play
						promise = promise.then(function() {
							// reques user input
							return match.userTurn()
						})
					else {
						// machine to play
						if (progressBar) {
							progressBar.style.display = "block";
							progressBar.style.width = 0;
						}
						promise = promise.then(function() {
							return match.getConfig();
						})
							.then(function(config) {
								// get machine level
								var which = player == Jocly.PLAYER_A ? "a" : "b";
								var levelIndex = $("#select-level-" + which).val();
								var level = {
									maxDepth: -1, // kind of random
								}
								if (levelIndex >= 0)
									level = config.model.levels[levelIndex];
								// start machine search
								return match.machineSearch({
									level: level,
									progress: function(progress) {
										if (progressBar)
											progressBar.style.width = progress + "%";
									}
								})
							})
							.then(function(result) {
								return match.getMoveString(result.move)
									.then(function(str) {
										console.info("Played move:", str);
										return result;
									})
							})
							.then(function(result) {
								// at this point we know the machine move but it has not been played yet
								// let's play that move
								return match.playMove(result.move);
							});
					}

					promise.then(function() {
						// is game over ?
						return match.getFinished()
					})
						.then(function(result) {
							movePending = null;
							movePendingResolver();
							if (result.finished)
								NotifyWinner(result.winner);
							else
								NextMove();
						})
						.catch(function(e) {
							movePending = null;
							movePendingResolver();
							console.warn("Turn aborted:", e);
						})
						.then(function() {
							if (progressBar)
								progressBar.style.display = "none";
						});
				})
		}

		match.getFinished()
			.then(function(result) {
				// make sure the game is not finished to request next move
				if (!result.finished) {
					if (movePending) {
						movePending.then(function() {
							NextMove();
						})
					} else
						NextMove();
				}
			});
	}

	$(document).ready(function () {
		var progressBar = document.getElementById("progress-bar");
		var m = /\?game=([^&]+)/.exec(window.location.href);
		var gameName = m && m[1] || "classic-chess";
		var elementId = "applet";
		var area = document.getElementById(elementId);

		Jocly.createMatch(gameName).then(function(match) {
			// get game configuration to setup control UI
			match.getConfig()
				.then(function(config) {
					$("#game-title").show().text(config.model["title-en"]);
					$("#close-games span").show();
					$("#game-status").show();

					var viewOptions = config.view;
					// fills Skins dropdown with available skins
					viewOptions.skins.forEach(function (skin) {
						$("<option/>").attr("value", skin.name).text(skin.title).appendTo($("#options-skin"));
					});
					$("#options").show();

					// get saved view options if any
					var viewOptions = window.localStorage && window.localStorage[gameName + ".options"] &&
						JSON.parse(window.localStorage[gameName + ".options"]) || undefined;

					// the match need to be attached to a DOM element for displaying the board
					match.attachElement(area, {viewOptions: viewOptions})
						.then(function() {
							return match.getViewOptions();
						})
						// get options for the game view
						.then(function(options) {
							$("#options-skin").show().val(options.skin);
							if (options.sounds !== undefined)
								$("#options-sounds").show().children("input").prop("checked", options.sounds);
							$("#options-notation").hide();
							if (options.notation !== undefined)
								$("#options-notation").show().children("input").prop("checked", options.notation);
							$("#options-moves").hide();
							if (options.showMoves !== undefined)
								$("#options-moves").show().children("input").prop("checked", options.showMoves);
							$("#options-autocomplete").hide();
							if (options.autoComplete !== undefined)
								$("#options-autocomplete").show().children("input").prop("checked", options.autoComplete);

							$("#view-options").on("change", function () {
								var opts = {};
								if ($("#options-skin").is(":visible"))
									opts.skin = $("#options-skin").val();
								if ($("#options-notation").is(":visible"))
									opts.notation = $("#options-notation-input").prop("checked");
								if ($("#options-moves").is(":visible"))
									opts.showMoves = $("#options-moves-input").prop("checked");
								if ($("#options-autocomplete").is(":visible"))
									opts.autoComplete = $("#options-autocomplete-input").prop("checked");
								if ($("#options-sounds").is(":visible"))
									opts.sounds = $("#options-sounds-input").prop("checked");
								// changed options, tell Jocly about it
								match.setViewOptions(opts)
									.then(function() {
										RunMatch(match, progressBar);
									})
								if (window.localStorage)
									window.localStorage.setItem(gameName + ".options", JSON.stringify(opts));
							});

							$("#anaglyph-input").on("change", function () {
								if ($(this).is(":checked"))
									match.viewControl("enterAnaglyph");
								else
									match.viewControl("exitAnaglyph");
							});

							// dropdown to change the players (user/machine)
							$("#mode").on("change", function() {
								if (window.localStorage)
									window.localStorage.setItem(gameName + ".mode", $("#mode").val());
								RunMatch(match, progressBar);
							});
							$("#mode-panel").on("change", function() {
								switch ($("#mode").val()) {
									case "self-self":
										$("#level-a,#level-b").hide();
										break;
									case "comp-comp":
										$("#level-a,#level-b").show();
										break;
									case "self-comp":
										$("#level-a").hide();
										$("#level-b").show();
										break;
									case "comp-self":
										$("#level-b").hide();
										$("#level-a").show();
										break;
								}
								RunMatch(match, progressBar);
							});
							var mode = window.localStorage && window.localStorage[gameName + ".mode"] || "self-comp";
							$("#mode").val(mode).trigger("change");

							if (config.view.switchable) {
								$("#view-as").show().on("change", function(){
									var playerMode = $("#view-as").val();
									if (window.localStorage)
										window.localStorage.setItem(gameName + ".view-as", playerMode);
									var player;
									if (playerMode == "player-a")
										player = Jocly.PLAYER_A;
									else if (playerMode == "player-b")
										player = Jocly.PLAYER_B;
									if (player)
										match.setViewOptions({
											viewAs: player
										})
											.then(function() {
												RunMatch(match, progressBar);
											});
								});
								var viewAs = window.localStorage && window.localStorage[gameName + ".view-as"];
								if (viewAs)
									$("#view-as").val(viewAs).trigger("change");
							}

						})
						.then(function() {
							RunMatch(match, progressBar);
						});


					// configure computer levels
					["a", "b"].forEach(function(which) {
						$("#level-" + which).hide().on("change", function() {
							if (window.localStorage)
								window.localStorage.setItem(gameName + ".level-" + which, $("#select-level-" + which).val());
						});
						$("<option/>").attr("value", "-1").text("Random").appendTo($("#select-level-" + which));
						config.model.levels.forEach(function(level, index) {
							$("<option/>").attr("value", index).text(level.label).appendTo($("#select-level-" + which));
						});
						var level = window.localStorage && window.localStorage[gameName + ".level-" + which] || 0;
						$("#select-level-" + which).val(level);
					});

					$("#restart").on("click", function () {
						// restart match from the beginning
						match.rollback(0)
							.then(function() {
								RunMatch(match, progressBar);
							});
					});

					$("#save").on("click", function () {
						// save match to the file system
						match.save()
							.then(function(data) {
								var json = JSON.stringify(data, null, 2);
								var a = document.createElement("a");
								var uriContent = "data:application/octet-stream," + encodeURIComponent(json);
								a.setAttribute("href", uriContent);
								a.setAttribute("download", gameName + ".json");
								a.click();
							});
					});

					// reading file locally
					var fileElem = $("#fileElem").on("change", function () {
						var fileReader = new FileReader();
						fileReader.readAsText(fileElem[0].files[0]);
						fileReader.onload = function (event) {
							var json = event.target.result;
							var data = JSON.parse(json);
							// load match
							match.load(data)
								.catch(function(e) {
									console.info("Failed to load", e);
								});
						}
					})
					$("#load").on("click", function () {
						fileElem[0].click();
					});

					$("#takeback").on("click", function () {
						match.getPlayedMoves()
							.then(function(playedMoves) {
								// we want to go back to the last user move
								var mode = $("#mode").val();
								var lastUserMove = -1;
								if (
									((playedMoves.length % 2 == 1) && (mode == "self-self" || mode == "self-comp")) ||
									((playedMoves.length % 2 == 0) && (mode == "self-self" || mode == "comp-self"))
								)
									lastUserMove = playedMoves.length - 1;
								else if (
									((playedMoves.length % 2 == 1) && (mode == "self-self" || mode == "comp-self")) ||
									((playedMoves.length % 2 == 0) && (mode == "self-self" || mode == "self-comp"))
								)
									lastUserMove = playedMoves.length - 2;
								if (lastUserMove >= 0)
									match.rollback(lastUserMove)
										.then(function() {
											RunMatch(match, progressBar);
										});

							});
					});

					// yeah, using the fullscreen API is not as easy as it should be
					var requestFullscreen = area.requestFullscreen || area.webkitRequestFullscreen ||
						area.webkitRequestFullScreen || area.mozRequestFullScreen;
					if (requestFullscreen) {
						$(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange", function() {
							var isFullscreen = document.webkitFullscreenElement || document.webkitFullScreenElement ||
								document.mozFullScreenElement || document.fullscreenElement;
							if (isFullscreen)
								area.style.display = "block";
							else
								area.style.display = "table-cell";
							RunMatch(match, progressBar);
						});
						$("#fullscreen").show().on("click", function () {
							requestFullscreen.call(area);
						});
					}

					$("#links").on("click", function() {
						$("#controls").hide();
						$("#games").show();
					});

					$("#close-games span").on("click", function() {
						$("#controls").show();
						$("#games").hide();
					});

					// list all available games
					Jocly.listGames()
						.then(function(_games) {
							// _games is an object, make an array from it
							var games = Object.keys(_games).map(function(gameName) {
								return Object.assign(_games[gameName], {
									gameName: gameName
								});
							});
							// sorting by title
							games.sort(function(a, b) {
								if (b.title < a.title)
									return 1;
								else if (b.title > a.title)
									return -1;
								else
									return 0;
							});
							// build the list of games
							games.forEach(function(game) {
								$("<div>")
									.addClass("game-descr")
									.css({
										backgroundImage: "url('" + game.thumbnail + "')"
									})
									.append($("<div>").addClass("game-descr-name").text(game.title))
									.append($("<div>").addClass("game-descr-summary").text(game.summary))
									.bind("click", function() {
										var url0 = window.location;
										var url = url0.origin + url0.pathname + "?game=" + game.gameName;
										window.location = url;
									}).appendTo($("#game-list"));

							})
						});

					$("#mode-panel").show();
				});
		});
	});
}