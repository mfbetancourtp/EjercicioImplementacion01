import { Serie } from "./Serie";



export class Categoria {
    nombre:string;
    //serie: Array<Serie>;
    // Typescript no permite referencia circular

    constructor(nombre:string) {
        this.nombre = nombre;
    }
}