import {Component, OnInit} from '@angular/core';

let Draughts = require('draughts');
let draughtsboard = require('draughtsboard');
require('!style-loader!css-loader!../../../../../node_modules/draughtsboard/draughtsboard.css');

declare let _: any;

@Component({
    selector: 'play-game',
    templateUrl: './play-game.component.html',
    styleUrls: ['./play-game.component.sass']
})
export class PlayGameComponent implements OnInit {

    public draughts: any;
    public board: any;
    public isGameOver: boolean;

    constructor() {
        this.draughts = new Draughts();
        this.isGameOver = false;
    }

    ngOnInit() {
        let self = this;
        this.board = new draughtsboard('draughtsboard', {
            draggable: true,
            position: 'start',
            pieceTheme: 'assets/images/{piece}.png',
            showNotation: false,
            moveSpeed: 'slow',
            snapSpeed: 'slow',
            onDrop: function () {
                if (arguments[0] == arguments[1]) return;
                let legalMoves = self.draughts.getLegalMoves(arguments[0]);
                let m = _.find(legalMoves, {from: parseInt(arguments[0], 10), to: parseInt(arguments[1], 10)});
                self.draughts.move(m);
                if (m.takes.length > 0) {
                    _.forEach(m.takes, (take) => {
                        self.draughts.remove('' + take);
                    })
                }
                console.log(self.draughts.ascii());

                let moves = self.draughts.moves();
                if (moves.length === 0) {
                    self.isGameOver = true;
                    return setTimeout(function () {
                        self.board.position(self.draughts.fen());
                    }, 500);
                }
                let move = moves[Math.floor(Math.random() * moves.length)];
                self.draughts.move(move);
                if (move.takes.length > 0) {
                    _.forEach(move.takes, (take) => {
                        self.draughts.remove('' + take);
                    })
                }
                console.log(self.draughts.ascii());
                setTimeout(function () {
                    self.board.position(self.draughts.fen());
                }, 500);
            }
        });
    }

}
