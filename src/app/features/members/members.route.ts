
import {Routes, RouterModule} from "@angular/router";
import {MembersComponent} from "./members.component";

const appRoutes: Routes = [
  {
    path: 'members', component: MembersComponent
  }
];

export const routes = RouterModule.forChild(appRoutes);
