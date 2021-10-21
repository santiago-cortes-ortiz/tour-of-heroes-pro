import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private _activatedRouter: ActivatedRoute, private _servicioHeroes: HeroesService) { }

  ngOnInit(): void {
    this._activatedRouter.params.subscribe((params) => {
      console.log(params['termino'])
    })
  }

  

}
