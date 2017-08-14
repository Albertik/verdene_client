import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";

import {MaterialModule} from "@angular/material";
import {routes} from "./about.routes";
import {AboutComponent} from "./about.component";

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    SharedModule,
    MaterialModule,

    //routes
    routes
  ],
  providers: []
})

export class AboutModule {}
