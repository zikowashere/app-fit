import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.component.html',
  styleUrls: ['./cardio.component.css']
})
export class CardioComponent implements OnInit {

  private titre=['nabila','hamid'];
  constructor() { }

  ngOnInit() {
  }
  player: YT.Player;
  id1 =['ml6cT4AZdqI','5HIFBp6a6OU','bdCX8Nb_2Mg'];
  
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }


}
