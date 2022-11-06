# Prueba técnica utilizando ReactJS, Typescript y JSON-Server

**SOLUCIÓN DE ERRORES EN EL JSON**

1. Error en la propiedad “total”

Cambio el contenido de total a un objeto con la propiedad total ya que JSON_Server utiliza arrays u objetos.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/176bb91a-839f-4542-be10-a0b7a1683c52/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c79b5b2b-7c0e-45ea-b1f1-cd3d716851d2/Untitled.png)

1. Error en el tamaño de los posters

El tamaño de los posters no es siempre el mismo pero a la hora de pintarlos en la web si que quiero que sea el mismo por lo que cuando hago la petición al json cambio el valor del tamaño a uno que sea igual para todas.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/19d44fe9-a56c-4ddf-9779-fa247559a783/Untitled.png)

1. Error en la ruta de algunas imágenes

   Algunas imágenes estaban rotas y lo he arreglado utilizando “onError”. Al detectar un error en la imagen que trae el JSON le cambio el src a uno nuevo que es una imagen guardada en la carpeta public y que uso para que aunque no haya una foto del póster de la película o serie quede mas bonito.

   ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7052f278-83b9-4482-a363-57c6b8fd7d13/Untitled.png)

   ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e006e3cf-69a0-46a4-8378-569086c67761/Untitled.png)

**ARQUITECTURA DE RUTAS**

Como en este caso no hay ninguna pagina en la que haya que renderizar las películas y las series a la vez he decidido utilizar la siguiente arquitectura de rutas en el main.tsx:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e24cd4a5-a4b7-48ad-994d-d1b5bfa82d0b/Untitled.png)

Y en App.tsx voy a utilizar los componentes Header y Footer, comunes para todas las páginas y un componente Outlet que será el que ira cambiando según la página en la que esté el usuario.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1d7e0110-5bf6-46f5-aa1b-27c551b09393/Untitled.png)

**ESTADO DE CARGA**

En el tiempo que dura la petición y la array de películas se llena, se mostrara el siguiente componente Loader animado:

[Screen Recording 2022-11-05 at 16.35.06.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b091fddd-3c4a-49df-9439-8772d09ddff3/Screen_Recording_2022-11-05_at_16.35.06.mov)

**COMPONETIZACIÓN**

Component List porque se repite en Movies y en Series

**HOMEPAGE**

Aquí es donde el usuario elegirá la página a la que desea ir.

![Screenshot 2022-11-06 at 21.20.53.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/89541a1c-8e9b-4227-bdbd-087f67ba119e/Screenshot_2022-11-06_at_21.20.53.png)

![Screenshot 2022-11-06 at 21.21.57.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/defaa932-f2ce-4de3-8712-9549a761b243/Screenshot_2022-11-06_at_21.21.57.png)

**MOVIES AND SERIES PAGE**

Esta es la pagina donde aparece el listado de las series o películas ordenadas alfabéticamente.

![Screenshot 2022-11-06 at 21.24.21.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8a79ddec-44ed-479a-961e-069fce37a21c/Screenshot_2022-11-06_at_21.24.21.png)

![Screenshot 2022-11-06 at 21.25.57.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/23c8c590-5e00-42c2-acb8-984abc97555f/Screenshot_2022-11-06_at_21.25.57.png)

**MODAL**

Al clicar en el botón azul de la película aparecerá el siguiente modal (scrollable en la version móvil) mostrando la información.

![Screenshot 2022-11-06 at 21.32.38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ba355a00-ea90-4f57-b745-8c40bbf2d53a/Screenshot_2022-11-06_at_21.32.38.png)

![Screenshot 2022-11-06 at 21.28.55.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b421c533-ae53-43df-8a15-5abbdc804613/Screenshot_2022-11-06_at_21.28.55.png)

**ERROR PAGE**

![Screenshot 2022-11-06 at 21.36.29.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1b4e561d-f7b4-4c5d-b03c-d6563b15823a/Screenshot_2022-11-06_at_21.36.29.png)

![Screenshot 2022-11-06 at 21.46.52.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a67b8b7b-550c-4b97-8831-e71a8adef5b4/Screenshot_2022-11-06_at_21.46.52.png)
