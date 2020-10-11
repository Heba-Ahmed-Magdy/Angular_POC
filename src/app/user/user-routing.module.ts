import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:"login",component:LoginComponent,canDeactivate:["checkCancleAvailability"]},
  {path:'profile',component:ProfileComponent,canDeactivate:["checkCancleAvailability"]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
