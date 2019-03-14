import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AppValidation } from '../appValidation.Service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  private user;
  maxDate;
  constructor(private appvalid: AppValidation) { 
    
   
  }

  ngOnInit() {
    this.maxDate=new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-15);
  }
onSubmit(form: NgModel){
  this.appvalid.SignUp(
    form.value.email,
    form.value.password
  );
 
}
display(form: NgModel){
  console.log(form)
}
}


