import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'desarrollo interactivo con Angular';
  public mostrar_videojuegos: boolean = true;

  ocultarVideojuegos(value){
    this.mostrar_videojuegos = value;
  }
}
