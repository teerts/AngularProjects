import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // expose vars for usage in html
  public sort: string;
  public games: Array<Game>;
  // There are two subscribers left hanging which could cause memory leaks 
  // creating this subscriptions allows to circumvent that
  private routeSub: Subscription;
  private gameSub: Subscription;

  // inject HTTPService and ActivatedRoute
  constructor(
    private httpService: HttpService, 
    // add router for gamedetails page
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  // The hook which runs first when component builds
  ngOnInit(): void {
    // when page is loaded ... first check if there is a game search query
    // then we use these parameters and sort
    // if there is no search query then just sort 
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      }
      else {
        this.searchGames('metacrit');  
      }
    });
  }

  // sort by type is required while search is option
  // use this in home.component.html to sort ((selectionChange)="searchGames(sort)")
  // ng-onit already passes in some default values for sorting (metacrit)
  searchGames(sort: string, search?: string): void {
    this.gameSub = this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(gameList);
      });
  }

  openGameDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  // this helps with memory management if a subscription is no longer active... clean it up
  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
