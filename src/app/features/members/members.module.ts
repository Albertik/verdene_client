import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";

import {MaterialModule} from "@angular/material";
import {routes} from "./members.route";
import {MembersComponent} from "./members.component";

@NgModule({
  declarations: [
    MembersComponent,
  ],
  imports: [
    SharedModule,
    MaterialModule,

    //routes
    routes
  ],
  providers: []
})

export class MembersModule {}
