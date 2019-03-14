import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
@Output() goingStart=new EventEmitter;
@Output()musculation=new EventEmitter;
@Output()Fitness=new EventEmitter;
@Output()Cardio=new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  TrainingGo(){
    this.goingStart.emit();
  }
  Swipe(){
    this.musculation.emit();
  }
  Swiped(){
   this.Fitness.emit();
  }
  SwipeCardio(){
    this.Cardio.emit();
  }
}
