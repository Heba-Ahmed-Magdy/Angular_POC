import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FlowerService } from './Services/Flower.Service';
import { FlowerComponent } from './Flower/flower.component';
import { FlowersComponent } from './Flowers/flowers.component';
import { UserService } from './user/Services/user.service';
import { HomeComponent } from './Home/home.component';
import { FlowerDetailesComponent } from './FlowerDetailes/FlowerDetailes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FlowersComponent,
    FlowerComponent,
    HomeComponent,
    FlowerDetailesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FlowerService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
