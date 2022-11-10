import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { User } from '../utilities/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  registerForm:FormGroup=new FormGroup({
    "username":new FormControl('',[Validators.required,Validators.minLength(5)]),
    "password":new FormControl('',[Validators.required,Validators.minLength(5)]),
    "confirmPassword":new FormControl('',[Validators.required])
  })
  //user entered values
  username:String="";
  password:String="";
  confirmPassword:String="";

  constructor(private service : ServicesService, private route : Router) { }

  ngOnInit(): void {
  }
  //getters
  get getUsername()
  {
    return this.registerForm.get("username");
  }
  get getPassword()
  {
    return this.registerForm.get("password");
  }
  get getConfirmPassword()
  {
    return this.registerForm.get("confirmPassword");
  }
  getConfirmPasswordStatus():boolean
  {
    // console.log("pass=",this.password," con=",this.confirmPassword);
    return this.password===this.confirmPassword;
  }

  onRegister() {
    console.log(this.registerForm);
    let uname= this.registerForm.value.username;
    let pssword= this.registerForm.value.password;
console.log(uname);
console.log(pssword);


    if(this.getConfirmPasswordStatus()){
        this.service.saveDetails(uname,pssword).subscribe((data)=>{
          console.log(data);
        })
        window.alert("Registered Successfully");
        this.route.navigateByUrl("login");

    }

  }
}



