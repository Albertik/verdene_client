import {NgModule} from "@angular/core";
import {FilterSelectComponent} from "./filter-select.component";
import {TodoAppComponent} from "./todo-app.component";
import {TodoInputComponent} from "./todo-input.component";
import {TodoListComponent} from "./todos-list.component";
import {routes} from "./todos.routes";
import {SharedModule} from "../../shared/shared.module";
import {MaterialModule} from "@angular/material";

@NgModule({
  declarations: [
    FilterSelectComponent,
    TodoAppComponent,
    TodoInputComponent,
    TodoListComponent
  ],
  imports: [
    SharedModule,
    MaterialModule.forRoot(),

    routes
  ],
  providers: []
})

export class TodosModule {}
