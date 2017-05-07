
import {Routes, RouterModule} from "@angular/router";
import {ContactsComponent} from "./contacts.component";

const appRoutes: Routes = [
    {
        path: 'contacts', component: ContactsComponent
    }
];

export const routes = RouterModule.forChild(appRoutes);
