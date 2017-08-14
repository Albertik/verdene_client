import {Component, OnInit} from '@angular/core';
import {AppState, Game, GameModel} from "../../common/interfaces";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ADD_GAME} from "../../common/actions";

@Component({
    selector: 'games',
    templateUrl: './games.component.html'
})
export class GamesComponent {

    public gamesModel$: Observable<GameModel>;
    private id: number = 0;

    constructor(private _store: Store<AppState>) {
        const games$ = _store.select('games');
        const gamesFilter$ = _store.select('gamesFilter');

        this.gamesModel$ = Observable
            .combineLatest(
                games$,
                gamesFilter$,
                ({present = []}, gamesFilter: any) => {
                    return {
                        filteredGames: present.filter(gamesFilter),
                        totalGames: present.length
                    }
                }
            );
    }

    //pass form
    addGame(game: Game) {
        console.log('game from output:', game);
        this._store.dispatch({type: ADD_GAME, payload: game});
    }


}
