
import{Routes, RouterModule}from "@angular/router";
import { NgModule } from '@angular/core';
import {WelcomeComponent} from'./welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { TrainingComponent } from './training/training.component';
import { ChestComponent } from './list-exo/chest/chest.component';
import { EpauleComponent } from './list-exo/epaule/epaule.component';
import { BackComponent } from './list-exo/back/back.component';
import { AuthGuard } from './Auth.guard';


const routes: Routes=[
    {path: '' , component: WelcomeComponent},
    {path: 'Sign-up' , component: SignUpComponent},
    {path: 'Login' , component: LoginComponent},
    {path: 'Training' , component: TrainingComponent,canActivate:[AuthGuard]},
    {path: 'chest' , component: ChestComponent},
    {path:'epaule',component: EpauleComponent},
    {path:'back', component: BackComponent},
   
    
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    providers:[AuthGuard]

})
export class appRouting{

}