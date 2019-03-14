import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-test';
  Open=false;
  Training=true;
  onOpen(){
    if(this.Open===false)
    return this.Open=true;
    if(this.Open===true)
    return this.Open=false;
  }
}
