import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm:FormGroup;

  userId:string;

  constructor(private route:Router, private service: ServicesService) {
    this.userForm = new FormGroup({
      uname: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),

    })
    this.userId="1";
   }

  ngOnInit(): void {

  }

  auth(userForm : FormGroup){

    //Manual Authentication
    if(userForm.value.uname== 'SravanKumar' && userForm.value.password=='sky'){
      console.log("loggedin");
      this.setUserId(this.userId);
      console.log("User Id is "+this.service.getUid());

      this.route.navigate(['songs']);
    }
    else if(userForm.value.uname=='admin' && userForm.value.password=='admin'){
      this.route.navigate(['form']);
    }
  }
  setUserId(userId:string){
    this.service.setUId(userId);

  }




}
