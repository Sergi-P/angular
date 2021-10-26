import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  @Input() personajesComponenteAgregar: Personaje[]=[];
  
  
  @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();

  personaje:Personaje={
    nombre:"",
    poder:0
  }
  anadirPersonaje(){
    if(this.personaje.nombre.trim().length ===0){
      return;
    }
 

  this.personajesComponenteAgregar.push(this.personaje);
  this.personaje={
    nombre:"",
    poder:0
  }
  
  }
}
