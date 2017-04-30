import {DraughtGameComponent} from "./draught-game.component";
import {Routes, RouterModule} from "@angular/router";
import {PlayGameComponent} from "./play-game/play-game.component";

const appRoutes: Routes = [
    {
        path: 'game', component: DraughtGameComponent,
    },
    {
        path: 'play', component: PlayGameComponent
    }
];

export const routes = RouterModule.forChild(appRoutes);
