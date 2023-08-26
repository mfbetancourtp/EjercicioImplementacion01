# Aplicación para Explorar Series Televisivas

¡Bienvenido a nuestra plataforma que te permite acceder a detalles fascinantes acerca de tus series de TV favoritas!

![Esquema](./resources/Esquema.png)

## Glosario de Términos Esenciales

### Categorías Principales:

1. `Plataforma de Emisión:` Representa una plataforma de transmisión de series televisivas. Incluye los siguientes aspectos:

   + Denominación: Nombre distintivo de la plataforma.
   + Portal en línea: Sitio web oficial de la plataforma.
   + Alternativas de Suscripción: Desglose completo de planes y sus tarifas.

   <br>

2. `Programa Televisivo:` Hace referencia a una serie de TV intrigante. Contempla las características siguientes:

   + Fotografía Visual: Representación gráfica emblemática de la serie.
   + Título: Denominación del programa televisivo.
   + Clasificaciones: Gama de categorías a las cuales se adscribe la serie (#acción, #drama, #romance).

   <br>
   
3. `Instancia Episódica:` Describe un episodio singular dentro de una serie. Detalles considerados:

   + Título: Denominación del episodio en cuestión.
   + Sinopsis: Breve descripción del episodio.
   + Extensión Temporal: Duración cronometrada del episodio.

   <br>

4. `Género de Referencia:` Se refiere a una categoría vinculada a una serie. Único atributo:

   + Denominación: Título correspondiente al género.

   <br>

5. `Régimen de Elección:` Designa un esquema presentado por una plataforma. Aspectos contabilizados:

   + Título: Identificación del plan específico.
   + Costo: Monto financiero asociado al plan.

   <br>

6. `Director Creativo:` Se relaciona con el director de una serie televisiva. Asuntos destacados:

   + Denominación: Nombre característico del director.
   + Fotografía Destacada: Imagen representativa del director.
   + Descripción: Breve narrativa acerca del director.
   + Historial de Dirección: Enumeración de series en las que ha desempeñado ese rol.

   <br>

7. `Intérprete en Escena:` Encarna a un actor o actriz dentro de una serie. Detalles resaltados:

   + Denominación: Nombre propio del intérprete.
   + Fotografía Destacada: Imagen que personifica al intérprete.
   + Perfil Descriptivo: Breve retrato descriptivo del intérprete.
   + Historial Actoral: Listado de series en las que ha participado.

   <br>

### Conexiones de Interés:

---

+ **`Plataforma - Alternativas de Suscripción:`** Una plataforma ofrece múltiples opciones de suscripción. (Enlace de "uno a varios") Integración
+ `Plataforma - Programa Televisivo:` Una plataforma tiene la capacidad de presentar varias series. (Enlace de "uno a varios") Incorporación
+ `Programa Televisivo - Clasificación:` Una serie puede alinearse con diversas categorías. (Enlace de "varios a varios") Asociación
+ `Programa Televisivo - Instancia Episódica:` Una serie incluye múltiples episodios. (Enlace de "uno a varios") Incorporación
+ `Director Creativo - Programa Televisivo:` Un director puede dirigir una o varias series, y una serie puede involucrar uno o varios directores. (Enlace de "varios a varios") Incorporación
+ `Intérprete en Escena - Programa Televisivo:` Un intérprete puede participar en una o varias series, y una serie puede presentar uno o varios intérpretes. (Enlace de "varios a varios") Incorporación
