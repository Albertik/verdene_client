import {Routes, RouterModule} from "@angular/router";
import {TodoAppComponent} from "./todo-app.component";

const appRoutes: Routes = [
  {
    path: 'todos', component: TodoAppComponent
  }
];

export const routes = RouterModule.forChild(appRoutes);
