import { RouterModule, Routes } from '@angular/router';
import { TaskHomeComponent } from '../task-home/task-home.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
/*
Here we configure routing and router outlet.
Each path is mapped to corresponding component it needs to navigate to.
*/
const routes: Routes = [
    { path: '', redirectTo: '/taskHome', pathMatch: 'full' },
    { path: 'taskHome', component: TaskHomeComponent },
    { path: '**', component: PageNotFoundComponent }
];

// A const that holds all our routing configuration. This is globally imported in @NgModule.
export const taskRouting = RouterModule.forRoot(routes);
