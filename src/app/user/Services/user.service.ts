import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
    _isAuthenticated:boolean=false ;
    currentUser:any;
    getUSer(userName:string,password:string){
        this.currentUser= {firstName:"Heba",lastName:"Ahmed"};
        this._isAuthenticated=true;
        console.log(this.currentUser)
    }
    isAuthenticated() {
        console.log("ss")
        return !!this.currentUser;
    }
    updateUser() {
        this.currentUser= {firstName:"Heba1",lastName:"Ahmed1"};
    }
}