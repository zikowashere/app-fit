import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AppValidation } from '../appValidation.Service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private form:NgModel
  constructor(private appvalid: AppValidation) { }

  ngOnInit() {
    
  }
  Signin(form :NgModel){
    this.appvalid.SignIn(
      form.value.email,
      form.value.password
     )
  }
}
