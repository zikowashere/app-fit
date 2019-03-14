import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  
Trainingstart=false;
MusclationStart=false;
FitnessStart=false;
CardioStart=false;
  constructor() { }

  ngOnInit() {
  }
  display(){
    console.log('yes');
  }

}
