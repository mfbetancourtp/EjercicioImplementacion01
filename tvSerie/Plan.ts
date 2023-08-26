import { Plataforma } from "./Plataforma";



export class Plan {
    nombre: string;
    precio: number;
    //plataforma: Plataforma;
    // Typescript no permite referencia circular

    constructor(nombre: string, precio: number){
        this.nombre = nombre;
        this.precio = precio;
    }
}