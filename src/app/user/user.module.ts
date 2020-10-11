import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { UserService } from './Services/user.service';
import { IsDirty } from './interfaces/IsDirty';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    {
      provide:"checkCancleAvailability",
      useValue: checkCancleAvailability
    }
  ]
})
export class UserModule { }
export function checkCancleAvailability(_component:IsDirty)
{
  if(_component.isDirty)
       return window.confirm("Are you sure that you want to cancel?")
   return true;
}