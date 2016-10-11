import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'courses', component: CourseListComponent },
    { path: 'courses/details/:tag', component: CourseDetailsComponent }
];

export const appRoutingProviders: any[] = [


];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);