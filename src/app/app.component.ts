import {Component, ViewContainerRef, OnInit} from '@angular/core';
import {UserService} from './shared';
// import {TranslateService} from 'ng2-translate';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {

    isDarkTheme = false;
    showFooter = true;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.populate();
        if (window.location.href.indexOf('/jocly') > -1) {
            this.showFooter = false;
        }

    }

    onChangeTheme() {
        this.isDarkTheme = !this.isDarkTheme;
    }

}
