import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ArticleListConfig, TagsService, UserService} from '../../shared';
import {isUndefined} from "util";

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
    constructor(private router: Router,
                private tagsService: TagsService,
                private userService: UserService) {
    }

    selectedIndex: number = 1;

    isAuthenticated: boolean;
    listConfig: ArticleListConfig = new ArticleListConfig();
    tags: Array<string> = [];
    tagsLoaded: boolean = false;

    ngOnInit() {
        this.userService.isAuthenticated.subscribe(
            (authenticated) => {
                this.isAuthenticated = authenticated;

                // set the article list accordingly
                if (authenticated) {
                    this.setListTo('feed');
                } else {
                    this.setListTo('all');
                }
            }
        );

        this.tagsService.getAll()
            .subscribe(tags => {
                this.tags = tags;
                this.tagsLoaded = true;
            });
    }

    setListTo(type: string = '', filters: Object = {}, event: any = {}) {
        // If feed is requested but user is not authenticated, redirect to login
        if (!isUndefined(event.index)) {
            this.selectedIndex = event.index;
        }
        type = this.selectedIndex === 0 ? 'feed' : 'all';

        if (type === 'feed' && !this.isAuthenticated) {
            this.router.navigateByUrl('/login');
            return;
        }

        // Otherwise, set the list object
        this.listConfig = {type: type, filters: filters};
    }
}
