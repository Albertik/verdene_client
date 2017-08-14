import {ActionReducer} from "@ngrx/store";

export interface AppState {
  Todos: Todo[],
  VisibilityFilter: any,
  Games: Game[]
}

export interface Todo {
  id: number,
  text: string,
  complete: boolean
}

export interface TodoModel {
  filteredTodos: Todo[],
  totalTodos: number,
  completedTodos: number
}

export interface UndoableState{
  past: any[],
  present: any,
  future: any[]
}

export interface Game {
  id: number,
  playerNames: {
    firstPlayer: string,
    secondPlayer: string,
  },
  pdnNotation: string,
  deleted: boolean
}

export interface GameModel {
  filteredGames: Game[],
  totalGames: number
}

export interface Award {
  year: number,
  events: string[]
}
