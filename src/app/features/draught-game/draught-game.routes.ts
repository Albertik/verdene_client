import {DraughtGameComponent} from "./draught-game.component";
import {Routes, RouterModule} from "@angular/router";
import {PlayGameComponent} from "./play-game/play-game.component";
import {JoclyComponent} from "./play-game/jocly/control/jocly.component";
import {MultipleMenuComponent} from "./play-game/jocly/multiple-menu/multiple-menu.component";

const appRoutes: Routes = [
    {
        path: 'game', component: DraughtGameComponent,
    },
    {
        path: 'play', component: PlayGameComponent
    },
    {
        path: 'jocly', component: JoclyComponent
    },
    {
        path: 'multiple-menu', component: MultipleMenuComponent
    }
];

export const routes = RouterModule.forChild(appRoutes);
