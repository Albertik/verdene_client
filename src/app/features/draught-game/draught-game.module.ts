import {NgModule} from "@angular/core";
import {routes} from "./draught-game.routes";
import {DraughtGameComponent} from "./draught-game.component";
import {BoardComponent} from "./board.component";
import {SharedModule} from "../../shared/shared.module";
import {PlayGameComponent} from "./play-game/play-game.component";
import {JoclyComponent} from "./play-game/jocly/control/jocly.component";
import {MultipleMenuComponent} from "./play-game/jocly/multiple-menu/multiple-menu.component";

@NgModule({
    declarations: [
        DraughtGameComponent,
        BoardComponent,
        PlayGameComponent,
        JoclyComponent,
        MultipleMenuComponent
    ],
    entryComponents: [
        DraughtGameComponent,
        BoardComponent,
        JoclyComponent,
        MultipleMenuComponent
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
