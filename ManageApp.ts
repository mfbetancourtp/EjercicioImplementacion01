import { Actor } from "./TV_Series/Actor";
import { Categoria } from "./TV_Series/Categoria";
import { Director } from "./TV_Series/Director";
import { Episodio } from "./TV_Series/Episodio";
import { Plataforma } from "./TV_Series/Plataforma";
import { Serie } from "./TV_Series/Serie";

export class ManageApp {
    series: Array<Serie>;
    episodios: Array<Episodio>;
    directores: Array<Director>;
    actores: Array<Actor>;
    categorias: Array<Categoria>;
    plataformas: Array<Plataforma>;

    constructor() {
    this.series = [];
    this.episodios = [];
    this.categorias = [];
    this.directores = [];
    this.actores = [];
    this.plataformas = [];
}


    // Crear una nueva plataforma
    crearPlataforma(nombre: string, website: string): Plataforma {
        const plataforma = new Plataforma(nombre, website);
        this.plataformas.push(plataforma); // Agregar la serie al atributo 'series'
        console.log('Se ha creado la Plataforma ' + nombre);
        console.log();
        return plataforma;
    }

    // Crear una nueva serie
    crearSerie(nombre: string, poster: string): Serie {
        const serie = new Serie(nombre, poster);
        this.series.push(serie); // Agregar la serie al atributo 'series'
        console.log('Se ha creado la Serie ' + nombre);
        console.log();
        return serie;
    }
    
    // Crear una nueva categoría
    crearCategoria(nombre: string): Categoria {
        const categoria = new Categoria(nombre);
        this.categorias.push(categoria);
        console.log('Se ha creado la Categoria ' + nombre);
        console.log();
        return categoria;
    }
    
    // Crear una nueva actor
    crearActor(nombre: string, fotografia: string, descripcion: string): Actor {
        const actor = new Actor(nombre, fotografia, descripcion);
        this.actores.push(actor);
        console.log('Se ha creado el Actor ' + nombre);
        console.log();
        return actor;
    }
    
    // Crear una nueva director
    crearDirector(nombre: string, fotografia: string, descripcion: string): Actor {
        const director = new Director(nombre, fotografia, descripcion);
        this.directores.push(director);
        console.log('Se ha creado el Director ' + nombre);
        console.log();
        return director;
    }

    // Mostrar Listado de Series
    mostrarSeries(): void {
        console.log('Lista de series creadas:');
        console.log();
        this.series.forEach((serie, index) => {
            console.log(index+ 1 + '. ' + serie.nombre);
        });
        console.log();
        console.log();
    }

    // Mostrar Detalle de una Serie

    MostrarDetalleSerie(serie: Serie):void{
        console.log('Detalles de la serie "' + serie.nombre + '":');
        console.log('Nombre: ' + serie.nombre);
        console.log('Poster: ' + serie.poster);
        console.log('Episodios:');
        console.log();
        let episodios = serie.episodios.map((episodio, index) => {
            console.log('Episodio ' + (index + 1) + ':');
            console.log('  Nombre: ' + episodio.nombre);
            console.log('  Resumen: ' + episodio.resumen);
            console.log('  Duración: ' + episodio.duracion + ' minutos');
        });
        console.log();
        console.log();
    }


    // Mostrar Listado de Categorias
    mostrarCategorias(): void {
        console.log('Lista de categorías creadas:');
        console.log();
        this.categorias.forEach((categoria, index) => {
            console.log(index+ 1 + '. ' + categoria.nombre);
        });
        console.log();
        console.log();
    }

    // Mostrar Categorias de una serie
    mostrarCategoriaSerie(serie: Serie):void{
        console.log('Categorias de la serie "' + serie.nombre + '":');
        serie.categorias.forEach((categoria, index) => {
            console.log((index + 1) + ': ' + categoria.nombre);
        });
        console.log();
        console.log();
    }

    // Mostrar Actores y Actores de una serie
    mostrarActoresDirectoresSerie(serie: Serie): void {
        console.log('Actores de la serie "' + serie.nombre + '":');
        serie.actores.forEach((actor, index) => {
            console.log((index + 1) + ': ' + actor.nombre);
        });

        console.log();

        console.log('Directores de la serie "' + serie.nombre + '":');
        serie.directores.forEach((director, index) => {
            console.log(+ (index + 1) + ': ' + director.nombre);
        });
        console.log();
        console.log();
    }

    // Mostrar Detalle de un Director
    mostrarDetalleDirector(director: Director): void {
        console.log('Detalles del director "' + director.nombre + '":');
        console.log('Nombre: ' + director.nombre);
        console.log('Fotografía: ' + director.fotografia);
        console.log('Descripción: ' + director.descripcion);
        console.log();
        console.log();
        
    }

    // Mostrar Detalle de un Actor
    mostrarDetalleActor(actor: Actor): void {
        console.log('Detalles del actor "' + actor.nombre + '":');
        console.log('Nombre: ' + actor.nombre);
        console.log('Fotografía: ' + actor.fotografia);
        console.log('Descripción: ' + actor.descripcion);
        console.log();
        console.log();
    }

    // Mostrar Listado de Plataformas
    mostrarPlataformas(): void {
        console.log('Lista de plataformas creadas:');
        console.log();
        this.plataformas.forEach((plataforma, index) => {
            console.log(index+ 1 + '. ' + plataforma.nombre);
        });
        console.log();
        console.log();
    }


    // Mostrar Detalle de una Plataforma
    mostrarDetallePlataforma(plataforma: Plataforma): void {
        console.log('Detalles de la Plataforma "' + plataforma.nombre + '":');
        console.log('Nombre: ' + plataforma.nombre);
        console.log('Website: ' + plataforma.website);
        console.log();
        console.log();
    }

}