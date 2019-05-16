import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes propios o creados
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";

//Array de Rutas que se crean por defecto

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
