import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";

import {MaterialModule} from "@angular/material";
import {routes} from "./awards.routes";
import {AwardsComponent} from "./awards.component";

@NgModule({
  declarations: [
    AwardsComponent,
  ],
  imports: [
    SharedModule,
    MaterialModule,

    //routes
    routes
  ],
  providers: []
})

export class AwardsModule {}
