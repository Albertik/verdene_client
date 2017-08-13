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
import {PageNotFoundComponent} from "./layout/page-not-found/page-not-found.component";
import {
    AdBannerComponent,
    AdDirective, AdService, HeroJobAdComponent, HeroProfileComponent
} from "./layout/page-not-found/page-not-found-generator.component";
import {PageNotFound1Component} from "./layout/page-not-found/page-not-found1/page-not-found1.component";
import {PageNotFound2Component} from "./layout/page-not-found/page-not-found2/page-not-found2.component";
import {PageNotFound3Component} from "./layout/page-not-found/page-not-found3/page-not-found3.component";
import {PageNotFound4Component} from "./layout/page-not-found/page-not-found4/page-not-found4.component";

import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg'


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        NgxDatatableModule,
        RouterModule,
        MaterialModule,
        FlexLayoutModule,
        FroalaEditorModule,
        FroalaViewModule
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
        MySidenavLayoutComponent,
        PageNotFoundComponent,
        AdBannerComponent,
        HeroJobAdComponent,
        HeroProfileComponent,
        AdDirective,
        PageNotFound1Component,
        PageNotFound2Component,
        PageNotFound3Component,
        PageNotFound4Component
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
        NgxDatatableModule,
        FlexLayoutModule,
        ShowAuthedDirective,
        MySidenavLayoutComponent,
        PageNotFoundComponent,
        FroalaEditorModule,
        FroalaViewModule,
        // TranslateModule
    ],
    entryComponents: [
        HeroJobAdComponent,
        HeroProfileComponent,
        PageNotFound1Component,
        PageNotFound2Component,
        PageNotFound3Component,
        PageNotFound4Component
    ],
    providers: [
        AdService
    ]
})
export class SharedModule {
}
