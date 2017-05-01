import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {DraughtGameModule} from "./features/draught-game/draught-game.module";

import {AppComponent} from './app.component';
import {SettingsDialog} from "./features/settings-dialog/settings-dialog.component";
import {VerdeneAppRoutes} from "./app.routes";
import {SharedModule} from "./shared/shared.module";
import {SidenavService} from "./shared/services/sidenav.service";
import {TodosModule} from "./features/todos/todos.module";
import {StoreModule, combineReducers, ActionReducer} from "@ngrx/store";
import {APP_REDUCERS} from "./reducers/reducers";
import {compose} from "@ngrx/core/compose";
import {localStorageSync} from "ngrx-store-localstorage";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {GamesModule} from "./features/games/games.module";
import {AboutModule} from "./features/about/about.module";
import {AwardsModule} from "./features/awards/awards.module";
import {MembersModule} from "./features/members/members.module";
import {PostListModule} from "./features/post-list/post-list.module";
// import {AUTH_PROVIDERS} from "angular2-jwt";
// import {Auth} from "./features/auth/auth.service";
import {FooterComponent} from "./shared/layout/footer.component";
import {ArticleModule} from "./features/article/article.module";
import {EditorModule} from "./features/editor/editor.module";
import {ProfileModule} from "./features/profile/profile.module";
import {SettingsModule} from "./features/settings/settings.module";
import {ApiService} from "./shared/services/api.service";
import {ArticlesService} from "./shared/services/articles.service";
import {JwtService} from "./shared/services/jwt.service";
import {TagsService} from "./shared/services/tags.service";
import {UserService} from "./shared/services/user.service";
import {ProfilesService} from "./shared/services/profiles.service";
import {CommentsService} from "./shared/services/comments.service";
import {AuthGuard} from "./shared/services/auth-guard.service";
import {AuthModule} from "./features/auth/auth.module";
import {HomeModule} from "./features/home/home.module";
import {HeaderComponent} from "./shared/layout/header.component";
import {GalleryModule} from "./features/gallery/gallery.module";
// import {TranslateModule} from "ng2-translate";
import {AppState} from "./common/interfaces";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {WindowRef} from "./common/windowRef";

const reducers = {
    APP_REDUCERS
};

const developmentReducer: ActionReducer<AppState> = compose(
    localStorageSync(['todos', 'games'], true),
    combineReducers
)(APP_REDUCERS);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function appReducer(state: any = [], action: any) {
    return developmentReducer(state, action);
    // if (environment.production) {
    //   return productionReducer(state, action);
    // } else {
    //   return developmentReducer(state, action);
    // }
}

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        SettingsDialog,
    ],
    entryComponents: [
        AppComponent,
        SettingsDialog,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        // TranslateModule.forRoot(),
        StoreModule.provideStore(
            appReducer
        ),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),

        //internal modules
        DraughtGameModule,
        HomeModule,
        GalleryModule,
        TodosModule,
        GamesModule,
        AboutModule,
        AwardsModule,
        MembersModule,
        PostListModule,
        ArticleModule,
        EditorModule,
        ProfileModule,
        SettingsModule,
        AuthModule,
        BrowserAnimationsModule,

        //root routes
        VerdeneAppRoutes
    ],
    providers: [
        SidenavService,
        // AUTH_PROVIDERS,
        // Auth,
        ApiService,
        ArticlesService,
        AuthGuard,
        CommentsService,
        JwtService,
        ProfilesService,
        TagsService,
        UserService,
        WindowRef
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
