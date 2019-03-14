import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  player: YT.Player;
   id1 =['OXvQe9payHw','eE7dzM0iexc','nK3BNozPEx4'];
  
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
}