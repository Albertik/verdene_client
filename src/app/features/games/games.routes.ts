import {Routes, RouterModule} from "@angular/router";
import {GamesComponent} from "./games.component";

const appRoutes: Routes = [
  {
    path: 'games', component: GamesComponent
  }
];

export const routes = RouterModule.forChild(appRoutes);
