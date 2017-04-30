import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {GameListComponent} from "./game-list.component";
import {routes} from "./games.routes";
import {GameFormComponent} from "./game-form.component";
import {GamesComponent} from "./games.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    GameListComponent,
    GameFormComponent,
    GamesComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,

    routes
  ],
  providers: []
})

export class GamesModule {}
