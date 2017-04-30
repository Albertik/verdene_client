import {ActionReducer, Action} from "@ngrx/store";
import {ADD_GAME, REMOVE_GAME} from "../common/actions";
import {Game} from "../common/interfaces";

export const games : ActionReducer<Game[]> = (state : Game[] = [], action: Action) => {
  switch(action.type) {
    case ADD_GAME:
      return [
        ...state,
        action.payload
      ];

    case REMOVE_GAME:
      return state.filter(game => game.id !== action.payload);

    default:
      return state;
  }
};
