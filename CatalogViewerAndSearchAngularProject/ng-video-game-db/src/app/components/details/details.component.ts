import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  gameRating = 0; // initialize as 0 and via api will fill in value 
  gameId: string; // ID of game
  game: Game; // all the data of Game interface from models.ts
  routeSub: Subscription; 
  gameSub: Subscription;

  // inject required dependencies
  constructor(
    private ActivatedRoute: ActivatedRoute, // provides of the API route once its activated
    private httpService: HttpService // custom service to communicate with API
  ) { }

  ngOnInit(): void {
    // assign subscription to our params
    // the return is params which is a TypeOf Params (params: Params)
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
    });
  }

  getGameDetails(id: string): void {
    this.gameSub = this.httpService
      .getGameDetails(id)
      .subscribe((gameResp: Game) => {
        this.game = gameResp;

        // add timeout so there is a delay so user sees the animation on load
        setTimeout(() => {
          this.gameRating = this.game.metacritic;
        }, 1000);        
        
      });
  }

  getColor(value: number): string {
    if (value > 75)
    {
      return '#5ee432';
    } else if (value > 50) {
      return '#fffa50';
    } else if (value > 30) {
      return '#f7aa38';
    } else {
      return '#ef4655';
    }
  }

  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }  
  }
}
