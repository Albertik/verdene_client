import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent} from './article-helpers';
import {FavoriteButtonComponent, FollowButtonComponent} from './buttons';
import {ListErrorsComponent} from './list-errors.component';
import {ShowAuthedDirective} from './show-authed.directive';
import {MaterialModule} from "@angular/material";
import {MySidenavLayoutComponent} from "./layout/my-side-nav-layout/mySideNavLayout.component";
import {FlexLayoutModule} from "@angular/flex-layout";
// import {TranslateModule} from "ng2-translate";
import {Ng2MaterialModule} from "ng2-material";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        // Ng2MaterialModule.forRoot(),
        RouterModule,
        MaterialModule,
        FlexLayoutModule,
        // TranslateModule
    ],
    declarations: [
        ArticleListComponent,
        ArticleMetaComponent,
        ArticlePreviewComponent,
        FavoriteButtonComponent,
        FollowButtonComponent,
        ListErrorsComponent,
        ShowAuthedDirective,
        MySidenavLayoutComponent
    ],
    exports: [
        ArticleListComponent,
        ArticleMetaComponent,
        ArticlePreviewComponent,
        CommonModule,
        FavoriteButtonComponent,
        FollowButtonComponent,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ListErrorsComponent,
        RouterModule,
        MaterialModule,
        // Ng2MaterialModule,
        FlexLayoutModule,
        ShowAuthedDirective,
        MySidenavLayoutComponent,
        // TranslateModule
    ]
})
export class SharedModule {
}
