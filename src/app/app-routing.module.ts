import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowerDetailesComponent } from './FlowerDetailes/FlowerDetailes.component';
import { FlowersComponent } from './Flowers/flowers.component';
import { HomeComponent } from './Home/home.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"flowers",component:FlowersComponent},
  {path:"flower/details/:id",component:FlowerDetailesComponent},
  {path:"user",loadChildren:'./user/user.module#UserModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }