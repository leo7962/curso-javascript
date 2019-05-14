//Interfaces
interface CamisetaBase{
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo:string) {
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+logo);
            
        }
    }
}

//Clases (molde del objeto)
@estampar('Boos Leo')

class Camiseta implements CamisetaBase{
    //propiedades (caracteristicas del objeto)
   private color: string;
   private modelo: string;
   private marca: string;
   private talla: string;
   private precio: number;

   //Métodos (funciones o acciones del objeto)
   constructor(color,modelo,marca,talla,precio){
       this.color = color;
       this.modelo = modelo;
       this.marca = marca;
       this.talla = talla;
       this.precio = precio;
   }

   public setColor(color){
       this.color = color;
   }
   public getColor(){
       return this.color;
   }
}

var camiseta = new Camiseta("Rojo", "Manga Larga", "Adidas", "S", 1456);
// camiseta.setColor("Rojo");
//camiseta.getColor();
camiseta.estampacion();

var saco = new Camiseta("Azul", "Manga corta", "Nike", "S", 1567);
saco.setColor("Azul");

console.log(camiseta);

//Clase Hija
class Sudadera extends Camiseta {
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha;
    }
}

var sudadera_nike = new Sudadera("Negro","Manga Larga", "Adidas", "S", 45675);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Morado");
console.log(sudadera_nike);

