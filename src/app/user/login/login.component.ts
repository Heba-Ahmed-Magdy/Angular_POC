import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsDirty } from '../interfaces/IsDirty';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,IsDirty {

  isDirty: boolean=true;
  mouseOverLogin:boolean;
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
  }
  cancleLoginForm(){
    this.router.navigate(['/']);
  }
  login(formData){
    console.log(formData)
    this.userService.getUSer(formData.userName,formData.password);
    this.isDirty=false;
    this .router.navigate(['/']);
  }
}
