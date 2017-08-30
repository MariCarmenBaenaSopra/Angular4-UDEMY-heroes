import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(private _heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params[ 'termino' ];
      this.heroes = this._heroesService.searchHeroe( params['termino'] );
    });
  }

  verHeroe(idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }
}
