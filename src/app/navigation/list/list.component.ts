import { Component, OnInit,EventEmitter, Output ,OnDestroy } from '@angular/core';
import { AppValidation } from 'src/app/appValidation.Service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,OnDestroy {
@Output() listListner = new EventEmitter();
isauth:boolean;
AuthSub: Subscription;
  constructor(private appvalid: AppValidation){}
  ngOnInit() {
    this.AuthSub=this.appvalid.AuthChange.subscribe(AuthStatus=>{
      this.isauth=AuthStatus;
    });
  }
  Onclose(){
    this.listListner.emit();

  }
  ngOnDestroy(){
    this.AuthSub.unsubscribe();
    }

}
