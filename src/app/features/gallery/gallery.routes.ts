
import {Routes, RouterModule} from "@angular/router";
import {GalleryComponent} from "./gallery.component";

const appRoutes: Routes = [

  {
    path: 'gallery', component: GalleryComponent
  }
];

export const routes = RouterModule.forChild(appRoutes);
