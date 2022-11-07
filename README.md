# Prueba técnica utilizando ReactJS, Typescript y JSON-Server

**SOLUCIÓN DE ERRORES EN EL JSON**

1. Error en la propiedad “total”

Cambio el contenido de total a un objeto con la propiedad total ya que JSON_Server utiliza arrays u objetos.

![Untitled](https://res.cloudinary.com/dieasyxbw/image/upload/v1667843658/online-shop/1_b2dt7t.png)

![Untitled](https://res.cloudinary.com/dieasyxbw/image/upload/v1667843773/online-shop/2_qdjzht.png)

1. Error en el tamaño de los posters

El tamaño de los posters no es siempre el mismo pero a la hora de pintarlos en la web si que quiero que sea el mismo por lo que cuando hago la petición al json cambio el valor del tamaño a uno que sea igual para todas.

![Untitled](https://res.cloudinary.com/dieasyxbw/image/upload/v1667843842/online-shop/3_ppks68.png)

1. Error en la ruta de algunas imágenes

   Algunas imágenes estaban rotas y lo he arreglado utilizando “onError”. Al detectar un error en la imagen que trae el JSON le cambio el src a uno nuevo que es una imagen guardada en la carpeta public y que uso para que aunque no haya una foto del póster de la película o serie quede mas bonito.

   ![Untitled](https://res.cloudinary.com/dieasyxbw/image/upload/v1667843934/online-shop/4_ifhqxk.png)

   ![Untitled](https://res.cloudinary.com/dieasyxbw/image/upload/v1667843933/online-shop/5_lsxbil.png)

**ARQUITECTURA DE RUTAS**

Como en este caso no hay ninguna pagina en la que haya que renderizar las películas y las series a la vez he decidido utilizar la siguiente arquitectura de rutas en el main.tsx:

![Untitled](https://res.cloudinary.com/dieasyxbw/image/upload/v1667844024/online-shop/6_rbmert.png)

Y en App.tsx voy a utilizar los componentes Header y Footer, comunes para todas las páginas y un componente Outlet que será el que ira cambiando según la página en la que esté el usuario.

![Untitled](https://res.cloudinary.com/dieasyxbw/image/upload/v1667844024/online-shop/7_fy2zb0.png)

**ESTADO DE CARGA**

En el tiempo que dura la petición y la array de películas se llena, se mostrara el siguiente componente Loader animado:

![Untitled](https://res.cloudinary.com/dieasyxbw/image/upload/v1667844121/online-shop/8_khltxy.png)

**COMPONETIZACIÓN**

Component List porque se repite en Movies y en Series

**HOMEPAGE**

Aquí es donde el usuario elegirá la página a la que desea ir.

![Screenshot 2022-11-06 at 21.20.53.png](https://res.cloudinary.com/dieasyxbw/image/upload/v1667844195/online-shop/9_dkdyjn.png)

![Screenshot 2022-11-06 at 21.21.57.png](https://res.cloudinary.com/dieasyxbw/image/upload/v1667844193/online-shop/10_em7kov.png)

**MOVIES AND SERIES PAGE**

Esta es la pagina donde aparece el listado de las series o películas ordenadas alfabéticamente.

![Screenshot 2022-11-06 at 21.24.21.png](https://res.cloudinary.com/dieasyxbw/image/upload/v1667844310/online-shop/11_iznhzb.png)

![Screenshot 2022-11-06 at 21.25.57.png](https://res.cloudinary.com/dieasyxbw/image/upload/v1667844308/online-shop/12_tcritc.png)

**MODAL**

Al clicar en el botón azul de la película aparecerá el siguiente modal (scrollable en la version móvil) mostrando la información.

![Screenshot 2022-11-06 at 21.32.38.png](https://res.cloudinary.com/dieasyxbw/image/upload/v1667844376/online-shop/13_galozc.png)

![Screenshot 2022-11-06 at 21.28.55.png](https://res.cloudinary.com/dieasyxbw/image/upload/v1667844375/online-shop/14_jku4zm.png)

**ERROR PAGE**

![Screenshot 2022-11-06 at 21.36.29.png](https://res.cloudinary.com/dieasyxbw/image/upload/v1667844452/online-shop/15_zo5zd9.png)

![Screenshot 2022-11-06 at 21.46.52.png](https://res.cloudinary.com/dieasyxbw/image/upload/v1667844452/online-shop/16_mfnc2r.png)
