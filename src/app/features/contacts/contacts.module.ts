import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";

import {MaterialModule} from "@angular/material";
import {ContactsComponent} from "./contacts.component";
import {routes} from "./contacts.route";

@NgModule({
    declarations: [
        ContactsComponent,
    ],
    imports: [
        SharedModule,
        MaterialModule,

        //routes
        routes
    ],
    providers: []
})

export class ContactsModule {}
