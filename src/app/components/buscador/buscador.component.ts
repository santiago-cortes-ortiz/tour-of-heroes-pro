import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string = "";

  constructor(private _activatedRouter: ActivatedRoute, private _servicioHeroes: HeroesService) { }

  ngOnInit(): void {
    this._activatedRouter.params.subscribe((params) => {
      this.termino = params['termino']
      this.heroes = this._servicioHeroes.buscarHeores(this.termino)
      console.log(this.heroes);
    })
  }






}
