import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';

const appRoutes: Routes = [
    {
        path:'user',
        component: UserComponent
    },
    {
        path: '',
        component: AboutComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);