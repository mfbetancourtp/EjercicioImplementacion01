import { Persona } from "./Persona";
import { Serie } from "./Serie";



export class Director extends Persona {
    //seriesDirigidas: Array<Serie>;
    // Typescript no permite referencia circular


    constructor(nombre: string, fotografia: string, descripcion: string){
        super(nombre, fotografia, descripcion);
    }
}