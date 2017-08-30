import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any= {};

  constructor( private activateRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router
  ) {
    this.activateRoute.params.subscribe( params => {
      console.log(params['id']);
      this.heroe = this._heroesService.getHeroe( params['id']);
    });
  }

}
