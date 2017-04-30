import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {PostListComponent} from "./post-list.component";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [PostListComponent]
})
export class PostListModule { }
