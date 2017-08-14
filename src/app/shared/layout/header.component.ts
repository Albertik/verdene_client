import {Component, OnInit, ViewContainerRef, EventEmitter} from '@angular/core';

import {User} from '../models';
import {UserService} from '../services';
import {SidenavService} from "../services/sidenav.service";
import {SettingsDialog} from "../../features/settings-dialog/settings-dialog.component";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {Output} from "@angular/core";

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
    constructor(public dialog: MdDialog,
                public vcr: ViewContainerRef,
                private sidenavService: SidenavService,
                private userService: UserService) {}

    currentUser: User;

    isOpenedSidenav = false;

    ngOnInit() {
        this.userService.currentUser.subscribe(
            (userData) => {
                this.currentUser = userData;
            }
        )
    }

    toggleLeftSidenav() {
        this.isOpenedSidenav = !this.isOpenedSidenav;
        this.sidenavService.openLeftSidenav(this.isOpenedSidenav);
        this.sidenavService.leftOpened$.subscribe((opened) => {
            this.isOpenedSidenav = opened;
        });
    }

    openDialog() {
        const config = new MdDialogConfig();
        config.viewContainerRef = this.vcr;
        this.dialog.open(SettingsDialog, config);
    }

    @Output() onChangeTheme = new EventEmitter<boolean>();

    changeTheme() {
        this.onChangeTheme.emit(false);
    }
}
