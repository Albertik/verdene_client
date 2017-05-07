import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'jocly',
    templateUrl: './jocly.component.html',
    styleUrls: ['./jocly.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class JoclyComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        require('./control.js');
    }

}