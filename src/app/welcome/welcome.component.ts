import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
private titre=['nabila','hamid'];
  constructor() { }

  ngOnInit() {
  }
  player: YT.Player;
  private id1 =['vuwN2JM6Wfg'];
  
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
