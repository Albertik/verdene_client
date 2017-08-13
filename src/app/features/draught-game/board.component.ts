import {
    Component, AfterViewInit, ViewChild, ElementRef, Input, ChangeDetectionStrategy,
    HostListener
} from '@angular/core';

require('draughts-reader');

declare let $: any;

@Component({
    selector: 'board',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <div>
        <div class="game" #gameElem>
          {{pdnText}}
        </div>
      </div>
  `,
    host: {'(window:keydown)': 'keyboardInput($event)'},
})
export class BoardComponent implements AfterViewInit {

    @Input() pdnText: String;

    public keyboardEvent: any;
    public nextButton: any;
    public prevButton: any;

    @ViewChild('gameElem') el: ElementRef;

    //TODO found out how to redraw when input changes
    ngAfterViewInit() {

        this.nextButton = $('.next');
        this.prevButton = $('.prev');
    }

    @HostListener('window:keydown', ['$event'])
    keyboardInput(event: any) {
        // event.preventDefault();
        event.stopPropagation();

        this.keyboardEvent = event;

        switch (this.keyboardEvent.key) {
            case 'ArrowRight':
                this.nextButton.click();
                break;
            case 'ArrowLeft':
                this.prevButton.click();
                break;
            default:
                console.log('keyevent:', this.keyboardEvent.key, ' is not mapped to any action...');
                break;
        }

    }

}
