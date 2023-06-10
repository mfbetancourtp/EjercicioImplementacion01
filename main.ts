import { ManageApp } from "./ManageApp";
import { Plataforma } from "./TV_Series/Plataforma";
import { Serie } from "./TV_Series/Serie";



let App = new ManageApp();

// Crear Plataforma
let netflix = App.crearPlataforma('Netflix', 'https://www.netflix.com/browse');

// Agregar Planes
netflix.agregarPlan('Básico', 16900);
netflix.agregarPlan('Estándar', 26900);
netflix.agregarPlan('Premium', 38900);

// Mostrar Planes
//netflix.mostrarPlanes();


// Crear Categorias

let comedia = App.crearCategoria('Comedia');
let accion = App.crearCategoria('Acción');
let terror = App.crearCategoria('Terror');
let drama = App.crearCategoria('Drama');
let anime = App.crearCategoria('Anime');

// Crear Actores
let diego = App.crearActor('Diego', 'Imagen.jpg', 'Actor de acción');
let tokio = App.crearActor('Tokio', 'Imagen.jpg', 'Actor de acción y drama');

let andres = App.crearActor('Andres', 'Imagen.jpg', 'Actor de doblaje');
let camilo = App.crearActor('Camilo', 'Imagen.jpg', 'Actor de doblaje');

// Crear Directores
let alexander = App.crearDirector('Alexander', 'Imagen.jpg', 'Director de acción y comedia');
let jason = App.crearDirector('Jason', 'Imagen.jpg', 'Director de anime');
let wilson = App.crearDirector('Wilson', 'Imagen.jpg', 'Director de anime');

// Crear Series
let laCasaDePapel = App.crearSerie('La casa de papel', 'Poster.jpg');
let demonSlayer = App.crearSerie('Demon Slayer', 'Poster.jpg')

// Agregar series a la plataforma
netflix.agregarSerie(laCasaDePapel);
netflix.agregarSerie(laCasaDePapel);


// La Casa de Papel

// Agregar Actores
laCasaDePapel.agregarActor(diego);
laCasaDePapel.agregarActor(tokio);

// Agregar Directores
laCasaDePapel.agregarDirector(alexander);

// Agregar Categorias
laCasaDePapel.agregarCategoria(accion);
laCasaDePapel.agregarCategoria(drama);

laCasaDePapel.agregarEpisodio('El gran robo', 
'Ocho ladrones toman rehenes en la Fábrica Nacional de Moneda y Timbre de España, mientras el líder de la banda manipula a la policía para cumplir con su plan.',
50);

console.log();
console.log();



// Demon Slayer

// Agregar Actores
demonSlayer.agregarActor(andres);
demonSlayer.agregarActor(camilo);

// Agregar Directores
demonSlayer.agregarDirector(jason);
demonSlayer.agregarDirector(wilson);

// Agregar Categorias
demonSlayer.agregarCategoria(anime);
demonSlayer.agregarCategoria(accion);

demonSlayer.agregarEpisodio('Crueldad', 
'Descubre el mundo de los asesinos de demonios a través de un shonen lleno de acción',
30);

console.log();

// Json de cada serie
//console.log(laCasaDePapel);
//console.log(demonSlayer);

App.mostrarSeries();

App.MostrarDetalleSerie(demonSlayer);

App.mostrarCategorias();

App.mostrarCategoriaSerie(demonSlayer);

App.mostrarActoresDirectoresSerie(demonSlayer);

App.mostrarDetalleDirector(jason);

App.mostrarDetalleActor(diego);

App.mostrarPlataformas();

App.mostrarDetallePlataforma(netflix);

















