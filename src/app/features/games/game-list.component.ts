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

export class GameListComponent implements AfterViewInit{
  @Input() gamesModel : GameModel[];

  // public pagination: Pagination;
  // availableLength: Array<number> = [5, 10, 20];
  // pagedGames: Array<any> = [];
  // constructor() {}
  //
  ngAfterViewInit() {
    // this.pagination = {
    //   currentPage: 1,
    //   itemsPerPage: 5,
    //   totalItems: this.gamesModel.length
    // };
    // this.refreshMaterials();
  }
  //
  // refreshMaterials() {
  //   let start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage,
  //     end = start + this.pagination.itemsPerPage;
  //   this.pagedGames = this.gamesModel.slice(start, end);
  // }
  // detectChange(event) {
  //   if (event !== undefined && event.name === 'pagination_changed' && event.pagination !== undefined) {
  //     this.pagination = event.pagination;
  //     this.refreshMaterials();
  //   }
  // }

}
