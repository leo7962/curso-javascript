import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes propios o creados
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";

//Array de Rutas que se crean por defecto

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'vieojuego', component: VideojuegoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
