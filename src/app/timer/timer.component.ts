import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  timeLeft: number = 0;
  interval;
  interval1;
  titre1=true;
  titre2=false;
  titre3=false;
  constructor() { }

  ngOnInit() {
  }
  

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft <50||this.timeLeft >60 || this.timeLeft<=95) {
        this.titre1=true;
        this.titre2=false;
        this.titre3=false;
        this.timeLeft=this.timeLeft+5;
      }
      if(this.timeLeft ==50) {
        this.titre1=false;
        this.titre3=true;
      }
      if(this.timeLeft > 95){
        console.log('depasser la valeur');
        this.timeLeft=0;
      } 
    },1000)
  }
 

  pauseTimer() {
    this.titre1=false;
    this.titre2=true;
    this.timeLeft=0;
    clearInterval(this.interval);
  }
}
