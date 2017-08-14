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
    public leftOpened = false;
    public rightOpened = false;
    public links: Object[] = [
        // {
        //     url: '/todos',
        //     text: 'Todo\'s'
        // },
        // {
        //     url: '/game',
        //     text: 'Game'
        // },
        // {
        //     url: '/games',
        //     text: 'Games'
        // },
        {
            url: '/multiple-menu',
            text: 'Play'
        },
        {
            url: '/gallery',
            text: 'Gallery'
        },
        {
            url: '/games',
            text: 'Games'
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
        }

    ];

    @ViewChild('sidenav') sidenav: MdSidenav;
    @ViewChild('leftSidenav') leftSidenav: MdSidenav;

    constructor(public sidenavService: SidenavService,
                private userService: UserService) {
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
        this.sidenavService.leftOpened$.subscribe((opened) => {
            this.leftOpened = !opened;
            if (opened) {
                this.leftSidenav.open();
            } else {
                this.leftSidenav.close();
            }
        });
        this.sidenavService.rightOpened$.subscribe((opened) => {
            this.rightOpened = !opened;
            if (opened) {
                this.sidenav.open();
            } else {
                this.sidenav.close();
            }
        });
    }
    //
    // closeLeftSidenav() {
    //     this.sidenavService.openLeftSidenav(false);
    // }
}
