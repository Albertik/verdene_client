import {ActionReducer, Action} from "@ngrx/store";
import {SHOW_DELETED_GAMES, SHOW_ACTIVE_GAMES, SHOW_ALL_GAMES} from "../common/actions";

export const gamesFilter : ActionReducer<any> = (state : any = t => t, action : Action) => {
  switch(action.type){
    case SHOW_DELETED_GAMES:
      return game => game.deleted;

    case SHOW_ACTIVE_GAMES:
      return game => !game.deleted;

    case SHOW_ALL_GAMES:
      return game => game;

    default:
      return state;
  }
};
