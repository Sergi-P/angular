import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes:string[]=['Spider-Man', 'Iron-Man','Capitan America','Hulk'];
  borrado :string="";
  borrarHeroe(){
    if(this.heroes.length==0){
      this.borrado ="";
    }else{
      this.borrado=this.heroes[0];
    }
    this.heroes.shift();
  }
  reiniciar(){
    this.heroes=['Spider-Man', 'Iron-Man','Capitan America','Hulk'];
    this.borrado="";
  }
}
