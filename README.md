Glosario de Términos
Entidades:
Plataforma: Representa una plataforma de transmisión de series. Contiene la siguiente información:

Nombre: Denominación de la plataforma.
Sitio web: Página web de la plataforma.
Planes y precios: Lista de alternativas y tarifas ofrecidas por la plataforma.
<br>
Serie: Representa una producción seriada para televisión. Contiene la siguiente información:

Imagen: Representación visual de la serie.
Nombre: Título de la serie.
Categorías: Conjunto de géneros a los que pertenece la serie (acción, drama, romance).
<br>
Episodio: Representa un episodio dentro de una serie. Contiene la siguiente información:

Nombre: Título del episodio.
Resumen: Resumen del episodio.
Duración: Duración del episodio.
<br>
Categoría: Representa una clasificación a la cual una serie puede pertenecer. Contiene la siguiente información:

Nombre: Nombre de la categoría.
<br>
Plan: Representa un plan ofrecido por una plataforma. Contiene la siguiente información:

Nombre: Nombre del plan.
Precio: Costo del plan.
<br>
Director: Representa el director de una serie. Contiene la siguiente información:

Nombre: Nombre del director.
Fotografía: Imagen que retrata al director.
Descripción: Descripción del director.
Series dirigidas: Lista de series en las que ha participado como director.
<br>
Actor: Representa un actor dentro de una serie. Contiene la siguiente información:

Nombre: Nombre del actor.
Fotografía: Imagen que muestra al actor.
Descripción: Descripción del actor.
Series en las que ha actuado: Lista de series en las que ha participado como actor.
<br>
Relaciones:
Plataforma - Plan: Una plataforma ofrece múltiples planes. (Relación de "uno a muchos") - Composición
Plataforma - Serie: Una plataforma puede ofrecer varias series. (Relación de "uno a muchos") - Agregación
Serie - Categoría: Una serie puede pertenecer a múltiples categorías. (Relación de "muchos a muchos") - Asociación
Serie - Episodio: Una serie se compone de varios episodios. (Relación de "uno a muchos") - Composición
Director - Serie: Un director puede dirigir una o varias series, y una serie puede tener uno o varios directores. (Relación de "muchos a muchos") - Agregación
Actor - Serie: Un actor puede participar en una o varias series, y una serie puede tener uno o varios actores. (Relación de "muchos a muchos") - Agregación
