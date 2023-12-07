import { Routes } from '@angular/router';

import { EmployeeIndexComponent } from './employees/app.employee.index';
import { EmployeeAddComponent } from './employees/app.employee.add';
import { EmployeeDetailComponent } from './employees/app.employee.detail';

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: EmployeeIndexComponent
    },
    {
        path:'employee-index',
        component:EmployeeIndexComponent
    },
    {
        path:'employee-add',
        component:EmployeeAddComponent
    },
    {
        path:'employee-view/:id',
        component:EmployeeDetailComponent
    }
];