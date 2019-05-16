import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
    public titulo = 'Componente de zapatillas';
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Lacoste rare', 'Lacoste', 'Green', 109000, true),
            new Zapatilla('Reebook', 'Reebook', 'White', 120000, true),
            new Zapatilla('Adidas Soft', 'Adidas', 'Red', 121000, true),
            new Zapatilla('Nike Hard', 'Nike', 'Black', 110000, true),
            new Zapatilla('Puma strange', 'Puma', 'White', 122000, true)
        ];
    }
    ngOnInit(){
        console.log(this.zapatillas);   
    }
}
