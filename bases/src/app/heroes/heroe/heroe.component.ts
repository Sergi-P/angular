
import { Component } from "@angular/core";

@Component({
    selector: 'heroe-component',
    templateUrl:'heroe.component.html',

})
export class HeroeComponent{
 
    nombre:string = 'Spider-man';
    edad:number=22;


    cambiarNombre(){
        
        this.nombre='Peter Parker';
    }
    cambiarEdad(){
        this.edad=20;
    }

    volver(){
        this.nombre='Spider-man';
        this.edad=22;

    }
    nombreConcatenado(){
        return 'Su nombre es ' +this.nombre+ ' y su edad es ' +this.edad+'.';
    }
    nombreMayus(){
        return 'Su nombre en mayusculas es ' +this.nombre.toUpperCase+ '.';
    }



}