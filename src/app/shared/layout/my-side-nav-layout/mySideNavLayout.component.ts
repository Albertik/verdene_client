import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MdSidenav} from "@angular/material";
import {SidenavService} from "../../services/sidenav.service";

@Component({
    selector: 'my-side-nav-layout',
    templateUrl: './mySideNavLayout.component.html',
})
export class MySidenavLayoutComponent implements OnInit, AfterViewInit {
    public currentPhoto: Object = {};
    public opened = false;
    public links: Object[] = [
        // {
        //     url: '/todos',
        //     text: 'Todo\'s'
        // },
        {
            url: '/game',
            text: 'Game'
        },
        // {
        //     url: '/games',
        //     text: 'Games'
        // },
        {
            url: '/play',
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

    constructor(public sidenavService: SidenavService) {
    }

    ngOnInit() {
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
