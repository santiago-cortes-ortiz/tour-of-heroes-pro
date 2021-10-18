import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe: any = {}

  constructor(private _servicioHeroes: HeroesService,private   _activatedRoute: ActivatedRoute) { 
    this._activatedRoute.params.subscribe( params => {
      this.heroe = this._servicioHeroes.getHeroe(params['id']);
    })
  }

}
