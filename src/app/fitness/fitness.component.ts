import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.css']
})
export class FitnessComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }
  player: YT.Player;
   id1 =['UBMk30rjy0o','s3F6R92s6_o','dJlFmxiL11s'];
  
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
}
