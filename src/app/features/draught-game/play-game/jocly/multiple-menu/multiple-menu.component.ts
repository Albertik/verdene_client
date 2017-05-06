import {Component, OnInit, ViewEncapsulation} from '@angular/core';

require('./multiple.js');

@Component({
    moduleId: module.id,
    selector: 'multiple-menu',
    templateUrl: './multiple-menu.component.html',
    styleUrls: ['./multiple-menu.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MultipleMenuComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}