
import {Routes, RouterModule} from "@angular/router";
import {AwardsComponent} from "./awards.component";

const appRoutes: Routes = [
  {
    path: 'awards', component: AwardsComponent
  }
];

export const routes = RouterModule.forChild(appRoutes);
