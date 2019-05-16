import {
  Component,
  OnInit
} from '@angular/core';
import {
  Zapatilla
} from '../models/zapatilla';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
    public titulo = 'Componente de zapatillas';
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

  constructor() {
    this.mi_marca = 'Fila';
    this.color = 'blue';
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla('Lacoste rare', 'Lacoste', 'Green', 109000, true),
      new Zapatilla('Reebook', 'Reebook', 'White', 120000, true),
      new Zapatilla('Adidas Soft', 'Adidas', 'Red', 121000, true),
      new Zapatilla('Nike Hard', 'Nike', 'Black', 110000, true),
      new Zapatilla('Puma strange', 'Puma', 'White', 122000, true),
      new Zapatilla('Puma spartan', 'Puma', 'red', 132000, true)
    ];
  }
  ngOnInit() {
    console.log(this.zapatillas);
  }

    getMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {

            if (this.marcas.indexOf(zapatilla.marca) < 0) {
                this.marcas.push(zapatilla.marca);
            }

        });

        console.log(this.marcas);
    }

    getMarca() {
        alert(this.mi_marca);
    }

    addMarca() {
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index) {
        // delete this.marcas[index];
        this.marcas.splice(index, 1);
    }

    onBlur() {
        console.log('Ha salido del input');
    }

    mostrarPalabra() {
        alert(this.mi_marca);
    }
}
