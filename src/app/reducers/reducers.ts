import {todos} from "./todos";
import {visibilityFilter} from "./visibility-filter";
import {undoable} from "./undoable";
import {games} from "./games";
import {gamesFilter} from "./games-filter";
//wrap todos reducer for undo/redo functionality
export const APP_REDUCERS = {
  todos: undoable(todos),
  visibilityFilter,
  games: undoable(games),
  gamesFilter,
};
