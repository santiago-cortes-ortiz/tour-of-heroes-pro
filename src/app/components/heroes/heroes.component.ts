import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroes } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroes[] = [];

  constructor(private _servicioHeroes: HeroesService,private _router: Router) { 
  }

  ngOnInit(): void {
    this.heroes = this._servicioHeroes.getHeroes();
    // console.log(this.heroes)
  }

  verHeroe(idx: Number){
    this._router.navigate(['/heroe',idx]);
  }

}
