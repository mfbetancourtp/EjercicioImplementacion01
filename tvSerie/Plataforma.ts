import { Actor } from "./Actor";
import { Categoria } from "./Categoria";
import { Director } from "./Director";
import { Episodio } from "./Episodio";
import { Plan } from "./Plan";
import { Serie } from "./Serie";



export class Plataforma {
    nombre: string;
    website: string;
    planes: Array<Plan>;
    series: Array<Serie>;


    constructor(nombre: string, website: string, series: Array<Serie> = []) {
        this.nombre = nombre;
        this.website = website;
        this.planes = [];
        this.series = series;
    }

    // Agregar Plan
    agregarPlan(nombre: string, precio: number):void {
        this.planes.push(new Plan(nombre, precio)); //new plan Composición
    }

    // Mostrar Planes
    mostrarPlanes(): void {
        console.log("Planes:");
        this.planes.forEach(plan => {
        console.log(`Nombre: ${plan.nombre}, Precio: ${plan.precio}`);
    })};

    // Agregar Serie
    agregarSerie(serie: Serie):void{
        this.series.push(serie);
    }



}