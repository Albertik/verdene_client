import {NgModule} from "@angular/core";
import {GalleryComponent, PhotoDialog} from "./gallery.component";
import {SharedModule} from "../../shared/shared.module";

import {MaterialModule} from "@angular/material";
import {routes} from "./gallery.routes";

@NgModule({
  declarations: [
    GalleryComponent,
    PhotoDialog,
  ],
  imports: [
    MaterialModule,
    SharedModule,

    //routes
    routes
  ],
  entryComponents: [
    PhotoDialog
  ],
  providers: []
})

export class GalleryModule {}
