import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epaule',
  templateUrl: './epaule.component.html',
  styleUrls: ['./epaule.component.css']
})
export class EpauleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  player: YT.Player;
   id1 =['jv31A4Ab4nA','BpbZC_Pd4XU','Ux4fqfmzh4E'];
  
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
}