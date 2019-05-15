import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'  
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {

    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de los juegos populares de PS4"
        //console.log("Se ha cargado el componente: videojuego.component.ts");
    }

    ngOnInit(){
        //console.log("OnInit ejecutado correctamente")
    }

    ngDoCheck(){
        //console.log("DoCheck ejecutado")
    }

    ngOnDestroy(){
        //console.log("OnDestroy ejecutado")
    }
    cambiarTitulo(){
        this.titulo = "Nuevo Titulo del componente";
    }
}