import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from "./shared/layout/page-not-found/page-not-found.component";

export const VerdeneAppRoutes = RouterModule.forRoot([
    {
        component: PageNotFoundComponent,
        path: "**"
    }
], { useHash: false });
