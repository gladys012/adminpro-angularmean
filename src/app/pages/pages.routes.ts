import { RouterModule, Routes } from "@angular/router";
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const pagesRoutes: Routes = [
    { 
        path:'',
        component: PagesComponent,
        children:[

            {path:'progress', component: ProgressComponent},
            {path:'graficas1', component: Grafica1Component},
            {path:'dashboard', component: DashboardComponent},
            {path:'', redirectTo: 'dashboard' , pathMatch:'full'}
   
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes)