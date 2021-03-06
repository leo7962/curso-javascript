import {
  Injectable
} from '@angular/core';

import { Zapatilla } from '../models/zapatilla';

@Injectable()

export class ZapatillaService {
  public zapatillas: Array <Zapatilla > ;

  constructor() {
    this.zapatillas = [

      new Zapatilla('Lacoste rare', 'Lacoste', 'Green', 109000, true),
      new Zapatilla('Reebook', 'Reebook', 'White', 120000, true),
      new Zapatilla('Adidas Soft', 'Adidas', 'Red', 121000, true),
      new Zapatilla('Nike Hard', 'Nike', 'Black', 110000, true),
      new Zapatilla('Puma strange', 'Puma', 'White', 122000, true),
      new Zapatilla('Puma spartan', 'Puma', 'red', 132000, true)
    ];
  }

    getTexto() {

        return 'Hola Leo estas probando un servicio';
    }

    getZapatillas(): Array<Zapatilla> {

        return this.zapatillas;
    }
}
