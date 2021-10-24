import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Heroes } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe :any = {}
  @Input() indice: Number = -1;

  @Output() heroeSeleccionado: EventEmitter<Number>;

  constructor(private _router: Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // this._router.navigate(['/heroe',this.indice]);
    this.heroeSeleccionado.emit( this.indice );
  }
}
