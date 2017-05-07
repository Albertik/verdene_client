import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {GameModel} from "../../common/interfaces";

@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html'
})

// interface Pagination {
//   currentPage: number,
//   itemsPerPage: number,
//   totalItems: number
// }

export class GameListComponent {
  @Input() gamesModel : GameModel[];

  columns = [
    { prop: 'playersNames.firstPlayer', name: 'Player 1', flexGrow: 1 },
    { prop: 'playersNames.secondPlayer', name: 'Player 2', flexGrow: 1 },
    { prop: 'pdnNotation', name: 'Notation', flexGrow: 3}
  ];

  messages = {
    // Message to show when array is presented
    // but contains no values
    emptyMessage: 'You have no games..',

    // Footer total message
    totalMessage: 'total'
  }
}
