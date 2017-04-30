import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit} from '@angular/core';
import {BoardComponent} from "./board.component";

@Component({
  selector: 'draught-game',
  templateUrl: './draught-game.component.html'
})
export class DraughtGameComponent implements AfterViewInit{

  @ViewChild('board', {read: ViewContainerRef}) boardContainer: ViewContainerRef;

  constructor(private viewContainer: ViewContainerRef, private _cfr: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    let boardFactory = this._cfr.resolveComponentFactory(BoardComponent);
    let boardComponentRef = this.boardContainer.createComponent(boardFactory);
    boardComponentRef.instance.pdnText = this.pdnText;
  }

  onChange() {
    this.boardContainer.clear();
    let boardFactory = this._cfr.resolveComponentFactory(BoardComponent);
    let boardComponentRef = this.boardContainer.createComponent(boardFactory);
    boardComponentRef.instance.pdnText = this.pdnText;
  }

  pdnText =`
    [Event "?"]
    [Site "kurnik"]
    [Date "2016.11.13"]
    [Round "-"]
    [White "pijlsnel"]
    [Black "dacoducamer"]
    [Result "*"]
    [Time "15:51:22"]
    [TimeControl "120"]
    [GameType "20,W,10,10,N1,0"]
    [WhiteElo "1610"]
    [BlackElo "1543"]
    
    1. 34-30 18-23 2. 39-34 12-18 3. 44-39 7-12 4. 50-44 1-7 5. 30-25 20-24 6.
    34-29 23x34 7. 40x29x20 15x24 8. 33-28 18-22 9. 31-27 22x33 10. 38x29x20 10-15
    11. 32-28 15x24 12. 37-32 17-22 13. 27x18 13x22x33 14. 39x28 9-13 15. 41-37 4-9
    16. 36-31 12-18 17. 46-41 7-12 18. 43-38 11-17 19. 31-27 17-22 20. 28x17 12x21
    21. 38-33 19-23 22. 33-28 14-19 23. 42-38 5-10 24. 47-42 10-14 25. 44-39 2-7
    26. 49-44 21-26 27. 41-36 7-11 28. 44-40 8-12 29. 37-31 26x37 30. 42x31 11-17
    31. 31-26 3-8 32. 36-31 17-21 33. 26x17 12x21 34. 31-26 23-29 35. 26x17 29-34
    36. 40x29x20 18-22 37. 27x18 13x22x33x44 38. 45-40 44-49 39. 48-43 19-23 40.
    20-15 23-29 41. 43-39 8-13 42. 25-20 14x25 43. 15-10 13-19 44. 10-5 9-14 45.
    39-33 19-24 46. 5x23x34 24-30 47. 35x24 49x35x8x21 48. 33-29 21-8 49. 32-28
    8-30 50. 34-48 30-35 51. 28-22 35-13 52. 38-33 13x27 53. 29-23 27-13 54. 33-29
    16-21 55. 48-37 21-26 56. 37-46 6-11 57. 46-28 11-16 58. 28-32 26-31 59. 32-28
    31-36 60. 28-37 16-21 61. 37-46 21-26 62. 46-32 26-31 63. 32-28 13-2 64. 28-44
    31-37 65. 44-35 2-11 66. 29-24 37-41 67. 23-18 41-47 68. 18-12 47x20 69. 12-8
    20-24 70. 35x19 25-30 71. 19x35 36-41 72. 35-44 *
  `;
}
