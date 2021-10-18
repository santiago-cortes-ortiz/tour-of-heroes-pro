import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  constructor(private   _activatedRoute: ActivatedRoute) { 
    this._activatedRoute.params.subscribe( params => {
      console.log(params);
    })
  }

}
