import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {
  // create new input for receiving the game api data from DetailsComponent
  // GameTabs component is a child component to the details component
  // import game interface into input
  @Input() game: Game;
  
  constructor() { }

  ngOnInit(): void {
  }

}
