import { Plataforma } from "./Plataforma";
import { Episodio } from "./Episodio";
import { Categoria } from "./Categoria";
import { Director } from "./Director";
import { Actor } from "./Actor";




export class Serie {
    nombre: string;
    poster: string;
    //plataforma: Plataforma;
    // Typescript no permite referencia circular
    episodios: Array<Episodio>;
    directores: Array<Director>;
    actores: Array<Actor>;
    categorias: Array<Categoria>;


    constructor(nombre: string, poster: string){
        this.nombre = nombre;
        this.poster = poster;
        this.episodios = [];
        this.directores = [];
        this.actores = [];
        this.categorias = [];

    }

    agregarEpisodio(nombre: string, resumen:string, duracion: number):void{
        this.episodios.push(new Episodio(nombre, resumen, duracion));
        console.log('Se ha agregado el Episodio ' + nombre + ' a la serie ' + this.nombre);
        console.log();
        
    }

    // Agregar categoría a una serie
    agregarCategoria(categoria: Categoria):void{
        this.categorias.push(categoria);
        console.log('Se ha agregado la Categoria ' + categoria.nombre + ' a la serie ' + this.nombre);
        console.log();
    }

    // Agregar actor a una serie
    agregarActor(actor: Actor):void{
        this.actores.push(actor);
        console.log('Se ha agregado el Actor ' + actor.nombre + ' a la serie ' + this.nombre);
        console.log();
    }

    // Agregar director a una serie
    agregarDirector(director: Director):void{
        this.directores.push(director);
        console.log('Se ha agregado el Director ' + director.nombre + ' a la serie ' + this.nombre);
        console.log();
    }

}