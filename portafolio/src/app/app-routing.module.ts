import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutmeComponent } from "./components/aboutme/aboutme.component";
import { ContactComponent } from "./components/contact/contact.component";
import { CreateComponent } from "./components/create/create.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ErrorComponent } from "./components/error/error.component";

const routes: Routes = [
  {path:'', component: AboutmeComponent},
  {path: 'sobre-mi', component: AboutmeComponent},
  {path:'contacto', component: ContactComponent},
  {path:'crear-proyecto', component: CreateComponent},
  {path:'proyectos', component: ProjectsComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
