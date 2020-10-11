import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsDirty } from '../interfaces/IsDirty';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,IsDirty {
  profileForm: FormGroup;
  isDirty: boolean=true;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.userService.getUSer("","");
    this.firstName=new FormControl(this.userService.currentUser.firstName,
                        [Validators.required,
                         Validators.pattern('[a-zA-Z].*')
                        ]);
    this.lastName=new FormControl(this.userService.currentUser.lastName,Validators.required);
    this.profileForm= new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName
    });
  }
  saveProfile(){
    if(this.profileForm.valid)
    {
      this.userService.updateUser();
      this.isDirty=false;
      this .router.navigate(['/']);
    }
  }

  cancelProfileForm() {
     this .router.navigate(['/']);
  }
  isFirstNameInvalid(){
    return (this.firstName.invalid && this.firstName.touched);
  }
  isLastNameInvalid(){
    return (this.lastName.invalid && this.lastName.touched);
  }
  isInvalidForm(){
    return (this.profileForm.invalid);
  }
}
