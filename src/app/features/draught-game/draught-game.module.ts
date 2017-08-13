import {NgModule} from "@angular/core";
import {routes} from "./draught-game.routes";
import {DraughtGameComponent} from "./draught-game.component";
import {BoardComponent} from "./board.component";
import {SharedModule} from "../../shared/shared.module";
import {PlayGameComponent} from "./play-game/play-game.component";

@NgModule({
    declarations: [
        DraughtGameComponent,
        BoardComponent,
        PlayGameComponent
    ],
    entryComponents: [
        DraughtGameComponent,
        BoardComponent
    ],
    imports: [
        SharedModule,

        //routes
        routes
    ],
    providers: []
})

export class DraughtGameModule {
}
