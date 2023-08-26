import { Persona } from "./Persona";
import { Serie } from "./Serie";



export class Actor extends Persona {
    //seriesActuadas: Array<Serie>;
    // Typescript no permite referencia circular


    constructor(nombre: string, fotografia: string, descripcion: string){
        super(nombre, fotografia, descripcion);
    }

}