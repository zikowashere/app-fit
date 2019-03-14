import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chest',
  templateUrl: './chest.component.html',
  styleUrls: ['./chest.component.css']
})
export class ChestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  player: YT.Player;
   id1 =['89e518dl4I8','BY13DFmEF-s','8lJ42tf-iqw'];
  
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
}

