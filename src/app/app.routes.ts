import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes =[
    //children tb es un arreglo de rutas
    /*{ 
        path:'',
        component: PagesComponent,
        children:[

            {path:'progress', component: ProgressComponent},
            {path:'graficas1', component: Grafica1Component},
            {path:'dashboard', component: DashboardComponent},
            {path:'', redirectTo: 'dashboard' , pathMatch:'full'}
   
        ]
    },*/    
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{ useHash: true })
