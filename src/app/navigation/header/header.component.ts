import { Subscription} from 'rxjs/Subscription'
import { Component, OnInit, Output,EventEmitter, OnDestroy } from '@angular/core';
import { AppValidation } from 'src/app/appValidation.Service';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
@Output() headerListner=new EventEmitter();
  constructor(private appvalid: AppValidation) { }
  isauth:boolean;
  AuthSub: Subscription;
  headerAction=false;
  ngOnInit() {
    this.AuthSub=this.appvalid.AuthChange.subscribe(AuthStatus=>{
      this.isauth=AuthStatus;
    });
  }
  Ontoggle(){
this.headerListner.emit();
}
ngOnDestroy(){
this.AuthSub.unsubscribe();
}

}
