import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MdSidenav} from "@angular/material";
import {SidenavService} from "../../services/sidenav.service";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'my-side-nav-layout',
    templateUrl: './mySideNavLayout.component.html',
})
export class MySidenavLayoutComponent implements OnInit, AfterViewInit {
    public currentPhoto: Object = {};
    public opened = false;
    public links: Object[] = [
        {
            url: '/game',
            text: 'Game'
        },
        {
            url: '/games',
            text: 'Games'
        },
        {
            url: '/multiple-menu',
            text: 'Play'
        },
        {
            url: '/gallery',
            text: 'Gallery'
        },
        {
            url: '/members',
            text: 'Members'
        },
        {
            url: '/awards',
            text: 'Awards'
        },
        {
            url: '/about',
            text: 'About'
        },

    ];

    @ViewChild('sidenav') sidenav: MdSidenav;
    @ViewChild('leftSidenav') leftSidenav: MdSidenav;

    constructor(
        public sidenavService: SidenavService,
        private userService: UserService
    ) {
    }

    ngOnInit() {
        if (this.userService.isCurrentUserIsAdmin()) {
            this.links.push({
                url: '/todo',
                text: 'TODO\'s'
            })
        }
    }

    ngAfterViewInit(): void {
        this.sidenavService.opened$.subscribe((opened) => {
            this.opened = !opened;
            if (opened) {
                this.leftSidenav.open();
            } else {
                this.leftSidenav.close();
            }
        });
    }

    closeLeftSidenav() {
        this.sidenavService.openSidenav(false);
    }
}
