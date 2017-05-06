import {Component, OnInit, ViewEncapsulation} from '@angular/core';

let Jocly = require('jocly');
require('./control.js');

@Component({
    selector: 'jocly',
    templateUrl: './jocly.component.html',
    styleUrls: ['./jocly.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class JoclyComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        Jocly.listGames().then(function (games){
            console.log(games)
        })
    }

}