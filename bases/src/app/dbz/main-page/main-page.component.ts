import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personaje } from '../interfaces/dbz.interfaces';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{


 p1:Personaje={
  nombre:'Goku',
  poder:9000
}
 p2:Personaje={
  nombre:'Vegeta',
  poder:9000
}
 p3:Personaje={
  nombre:'Gohan',
  poder:4000
}
 p4:Personaje={
  nombre:'Trunks',
  poder:1500
}
 p5:Personaje={
  nombre:'Goten',
  poder:1300
}
personajes:Personaje[]=[this.p1,this.p2,this.p3,this.p4,this.p5];


anadirPersonaje(data:Personaje){
  this.personajes.push(data);
}


}







