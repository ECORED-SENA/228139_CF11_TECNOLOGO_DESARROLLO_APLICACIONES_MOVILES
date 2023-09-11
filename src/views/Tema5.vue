<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Implementación de clases y objetos
    p.mb-5 Los principales elementos en un lenguaje de programación son las clases, debido a que se usan para todas las operaciones lógicas en un desarrollo. Se puede decir que son estructuras o plantillas que representan objetos del mundo real. 
      br
      br
      |Por su parte, los objetos pueden ser cosas, lugares o personas y son de tipo físico o conceptuales. En general las clases poseen propiedades, comportamientos y relaciones con otras clases.
      br
      br
      |Java determina en sus estándares de codificación convenciones para nombres de clases, métodos y atributos. Para las clases se define lo siguiente:
    ol.lista-ol--cuadro.mb-5.fa-ul
        li 
          .lista-ol--cuadro__vineta
            span <b> 1 </b>
          | La primera letra debe ser mayúscula.
        li 
          .lista-ol--cuadro__vineta
            span <b> 2 </b>
          | Utilizar nomenclatura camelCase (por ejemplo: un nombre compuesto por varias palabras: clase "CuentaAhorros").
        li 
          .lista-ol--cuadro__vineta
            span <b> 3 </b>
          | Los nombres deben ser sustantivos.
    .titulo-sexto.color-acento-contenido
      h5 Tabla 3.
      span Estructura de una clase en Java
          
    .tabla-a.color-acento-contenido.mb-5
      table
        caption SENA (2021).
        thead.text-center
          tr
            th Estructura de una clase en Java
            th Ejemplo
        tbody
          tr
            td.text-center
              p.mb-3 Una clase en java se compone por las siguientes declaraciones:
              ul.lista-ul--color.ms-5.fa-ul
                li 
                  i.fas.fa-check
                  | Paquete
                li 
                  i.fas.fa-check
                  | Comentarios

                li 
                  i.fas.fa-check
                  | Definición de clases
 
                li 
                  i.fas.fa-check
                  | Atributos
                li 
                  i.fas.fa-check
                  | Constructores
                li 
                  i.fas.fa-check
                  | Métodos
            td.p-5
              p Estructura:
              .color--naranjaclaro.p-2.mb-3
                h4.mb-0 public class NombreDeLaClase {}
              p Donde la palabra public indica que el alcance de la clase será público.
                br
                br
                |La palabra class indica que es una clase.
                br
                br
                |Y las llaves {} se usan para agrupar los bloques de código.
    p.mb-5 Basado en lo anterior, a continuación, se relaciona un ejemplo sobre el diseño de la clase de producto con sus atributos y métodos:
    .row.mb-5.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 13.
          span Diagrama clase producto
      .col-lg-4
        figure.mb-5
          img.mb-3(src="@/assets/curso/img8.svg", alt="")
          figcaption SENA (2021).
      .col-lg-6
        figure.mb-5
          img.mb-3(src="@/assets/curso/img9.svg", alt="")
    p.mb-5 En Java este diseño se representaría de la siguiente manera:
    .titulo-sexto.color-acento-contenido
      h5 Figura 14.
      span Implementación de la clase Producto en Java
    figure.mb-5
      img.mb-3(src="@/assets/curso/img10.svg", alt="Ejemplo de la implementación de la clase en la que se indica los componentes en su diseño.")
      figcaption SENA (2021).
    .row.mb-5 
      .col-lg-8
        p.mb-5 La creación de un 
          b objeto 
          b-none en Java es equivalente a decir que se está instanciando una 
          b clase. 
          b-none Cuando se hace la instancia se comparten los atributos y métodos de esta. Una sola clase puede tener varias instancias.
          br
          br
          |Tomando como ejemplo la clase 
          b Producto 
          b-none al instanciar un objeto estamos dando valores a sus atributos código, nombre y precio y accediendo a sus métodos 
          b obtenerPrecio 
          b-none y 
          b calcularTotal.
      .col-lg-3
        figure.mb-5
          img.mb-3(src="@/assets/curso/img11.svg", alt="").m-auto.d-block
    p.mb-5 Para instanciar un objeto de una clase en Java se utiliza la palabra reservada 
      b new 
      b-none  y se crea el objeto del tipo de la clase así:
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon-ejemplo
          .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
            p.d-inline-block Producto p = new
              br
              |Producto ();
            p Cuando instanciamos el objeto p este puede acceder a los métodos y atributos de la clase Producto que en este caso serían obtenerPrecio y calcularTotal así:  
            p.d-inline-block p.obtenerPrecio ();
              br  
              |p.calcularTotal ();
    br
    br
    #t_5_1.titulo-segundo
      h2 5.1 Atributos y métodos de la clase
    p.mb-5 Los atributos de una clase son definidos según esta sintaxis: 
      spam.color--cyanclaro.p-1
        b [modifVisibilidad] tipo nombreVariable [= valorInicial];
      br
      br
      b modifVisibilidad: 
      b-none el modificador de visibilidad indica desde qué parte del código se puede acceder a las variables o a los métodos y puede ser:
    .row.mb-5
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/img12.svg' alt='AvatarTop' style="height: 120px")
          //- .tarjeta debe ir acurso/img12de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color--cyanclaro
            .p-4
              h4.text-center.fst-italic public 
              p Indica que los atributos son accesibles desde cualquier lugar del programa. No hay restricciones en el alcance de los miembros de datos públicos.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/img13.svg' alt='AvatarTop' style="height: 120px")
          //- .tarjeta debe ir acurso/img12de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color--cyanclaro
            .p-4
              h4.text-center.fst-italic private 
              p Indica que los atributos solo son accesibles dentro de la clase en la que se declaran.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/img14.svg' alt='AvatarTop' style="height: 120px ")
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color--cyanclaro
            .p-4
              h4.text-center.fst-italic protected 
              p Indica que los atributos son accesibles dentro del mismo paquete o sub-clases en paquetes diferentes. Al heredar sí se puede usar desde la clase derivada.
    p.mb-5 
      b tipo: 
      b-none es el tipo de la variable, pudiendo ser un tipo básico o un objeto.
    p.mb-5 A continuación, se relacionan los tipos de datos que existen en Java:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 4.
      span Tipos de datos en Java
    .tabla-a.color-acento-contenido.mb-5 
      table.text-center.b-none
        caption SENA (2021).
        thead
          tr
            th Tipo
            th Formato
            th Descripción
        tbody
          tr
            <th colspan="3" class="color--amarilloclaro , h5 , th1 , ms-5 "> Números Enteros </th> 
          tr.tr1
            th.fst-italic byte
            th 8 bit
            th Entero de un #[i byte]
          tr.tr1
            th.fst-italic short
            th 16 bit
            th Entero corto
          tr.tr1
            th.fst-italic int
            th 32 bit
            th Entero
          tr.tr1
            th.fst-italic long
            th 64 bit
            th Entero Largo
        tbody
          tr
            <th colspan="3" class="color--naranjaclaro ; h5 ; th1  "> Números Reales </th> 
          tr.tr1
            th.fst-italic float
            th 32 bit
            th Flotante simple
          tr.tr1
            th.fst-italic double
            th 64 bit
            th Flotante doble
        tbody
          tr
            <th colspan="3" class="color--cyanclaro ; h5 ; th1  "> Cadenas de Texto </th> 
          tr.tr1
            th.fst-italic char
            th 16 bit
            th Un solo carácter
          tr.tr1
            th.fst-italic String
            th textos
            th Textos
        tbody
          tr
            <th colspan="3" class="color--azulclaro ; h5 ; th1  "> Otros </th> 
          tr.tr1
            th.fst-italic boolean
            th True o false
            th Valor booleano falso o verdadero
    p.mb-3 
      b nombreVariable: 
      b-none es el nombre que daremos a la variable, el cual debe cumplir con las siguientes convenciones:
    ul.lista-ul--color.mb-5.fa-ul
      li 
        i.fas.fa-check
        p.mb-0 Por convención, en Java, los nombres de las variables empiezan con una letra minúscula y si es una palabra compuesta la primera letra en 
          b Mayúscula 
          b-none con nomenclatura 
          b camelCase. 
      li 
        i.fas.fa-check
        | No pueden tener espacios ni iniciar con un número, ni caracteres especiales.
      li 
        i.fas.fa-check
        | No puede ser el mismo que una palabra clave.
      li 
        i.fas.fa-check
        | No deben tener el mismo nombre que otras variables cuyas declaraciones aparezcan en el mismo ámbito.
    p.mb-5 A continuación se presentan algunos ejemplos: 
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon-ejemplo
          .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
            ul.lista-ul--color.color-secundario.mb-5.fa-ul 
              li.vineta-azul 
                i.fas.fa-check
                b primerNombre
              li.vineta-azul 
                i.fas.fa-check
                b apellidoCliente
              li.vineta-azul 
                i.fas.fa-check
                b edad
            p 
              b [= valorInicial];
              b-none  permite inicializar la variable con un valor.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon-ejemplo
          .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
            p.mb-4 Se permite definir más de una variable, separándolas por coma, por ejemplo:
              br
              br
              b public int a = 5, b, c = 4;
              br
              br
              | Ejemplos de declaración de atributos o variables:
            ul.lista-ul--color.color-secundario.mb-4.fa-ul
              li.vineta-azul.mb-0 
                i.fas.fa-check
                spam.spam-text--contenido 
                  | public 
                spam.spam-text--primario.ms-1 
                  | int 
                spam.spam-text--normal.ms-1 
                  | edad
                spam.spam-text--claro 
                  | =5;
              li.vineta-azul.mb-0 
                i.fas.fa-check
                spam.spam-text--contenido 
                  | private 
                spam.spam-text--primario.ms-1 
                  | char
                spam.spam-text--normal.ms-1 
                  | genero
                spam.spam-text--claro 
                  | =’M’;
              li.vineta-azul 
                i.fas.fa-check
                spam.spam-text--contenido 
                  | private
                spam.spam-text--primario.ms-1 
                  | double
                spam.spam-text--normal.ms-1 
                  | estatura;
            .color--blanco.p-2.mb-4
              p.m-auto
                b Nota: 
                b-none todos los atributos terminan en punto y coma.
            p.mb-4 Los métodos se definen la siguiente manera:
            spam.spam-text--contenido 
              | [modifVisibilidad]
            spam.spam-text--primario.ms-1 
              | tipo
            spam.spam-text--normal.ms-1 
              | nombreMetodo
            spam.spam-text--claro.ms-1 
              | (listaParámetros) {}
    p.mb-5 En los atributos y métodos para las clases también existen:
    .row.mb-5
      .col-lg-4
        .tarjeta-avatar.mb-lg-0.mb-5
          img(src='@/assets/curso/img15.svg' alt='AvatarTop' style="height: 120px")
          //- .tarjeta debe ir acurso/img12de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color--cyanclaro
            .p-4
              h4.text-center Modificador de visibilidad 
              p Se aplican las mismas normas que para los atributos, se debe indicar el modificador de acceso, este puede ser público, privado o protegido.
      .col-lg-4
        .tarjeta-avatar.mb-lg-0.mb-5
          img(src='@/assets/curso/img16.svg' alt='AvatarTop' style="height: 120px")
          //- .tarjeta debe ir acurso/img12de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color--cyanclaro
            .p-4
              h4.text-center Tipo 
              p Es el tipo de valor devuelto por el método, pudiendo ser #[i int], #[i char], #[i String], etc.
      .col-lg-4
        .tarjeta-avatar.mb-lg-0.mb-5
          img(src='@/assets/curso/img17.svg' alt='AvatarTop' style="height: 110px ")
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color--cyanclaro
            .p-4
              h4.text-center Nombre del método 
              p Es el nombre que tendrá el método y debe cumplir con las siguientes convenciones:
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
          h5 Nombres
          p Los nombres de los métodos deberían ser verbos, todo el verbo en minúscula. Se pueden agregar sustantivos con la primera letra en mayúscula. Ejemplo: revisarCuenta ()
    .row.justify-content-center.mb-5
      .col-lg-6
        .tarjeta-avatar-b.mb-lg-0.mb-3
          .tarjeta-avatar-b__img
            img.img-t.img-a(src='@/assets/curso/img18.svg' alt='AvatarTop' style="width: 92px")
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color--cyanclaro
            .p-4
              h2 Lista de parámetros 
              p Dentro de los paréntesis se escriben los parámetros, los parámetros son los atributos que recibe el método para poder operar correctamente, puede o no tener parámetros.
      .col-lg-6
        .tarjeta-avatar-b.mb-lg-0.mb-3
          .tarjeta-avatar-b__img
            img.img-t.img-a(src='@/assets/curso/img19.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color--cyanclaro
            .p-4
              h2 Cuerpo del método {} 
              p Para finalizar todo método debe llevar un par de llaves, que es donde se escribe el código a ejecutar. (
                b Nota:
                b-none  a diferencia de los atributos, los métodos no finalizan con punto y coma).
    p.mb-5 A continuación, se presentan algunos ejemplos de métodos: 
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon-ejemplo-metodo
          .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
            p public int obtenerEdad ()
              br
              |{
              br
              |     return edad;
              br
              |}
            p Este es un método público que retorna un valor entero, cuyo nombre es 
              b obtenerEdad, 
              b-none no recibe parámetros y devuelve la edad.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon-ejemplo-metodo
          .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
            p public void 
              b cambiarEdad 
              |(int laEdad)
              br
              |{
              br
              |                      edad = laEdad;
              br
              |}
            p Este es un método público que no retorna ningún valor porque tiene la palabra reservada 
              b void, 
              b-none su nombre es 
              b cambiarEdad 
              b-none y recibe un parámetro de tipo entero, en el cuerpo del método asigna a la variable edad el valor del parámetro que viene almacenado en la variable 
              b laEdad.
    br
    br
    #t_5_2.titulo-segundo
      h2 5.2 Constructores y destructores
    p.mb-5 
      b El constructor 
      b-none de una clase es un método estándar para inicializar los objetos de esa clase, a su vez es un destructor de un método que se invoca automáticamente cuando el objeto se destruye.
    .row.mb-5
      .col-lg-7
        p Se habla de un constructor cuando se instancia un objeto y es necesario inicializar sus variables con valores correctos. Un constructor es un método perteneciente a la clase, que posee unas características especiales:
        ul.lista-ul--color.mb-5.fa-ul
          li 
            i.fas.fa-check
            | El nombre del constructor es igual que el nombre de la clase.
          li 
            i.fas.fa-check
            | No tiene ningún retorno.
          li 
            i.fas.fa-check
            | Se pueden crear varios, siempre y cuando tengan diferentes atributos.
        p Dentro del código de un constructor generalmente suelen existir inicializaciones de variables y objetos, para conseguir que el objeto sea creado con dichos valores iniciales.
      .col-lg-5
        figure.mb-5
          img.mb-3(src="@/assets/curso/img20.jpg", alt="")
    p.mb-5 Para definir los constructores se emplea la siguiente sintaxis:  
    .row.mb-5
      .col-lg-7
        .color--cyanclaro.p-3.mb-3
          p [modifVisibilidad] nombreConstructor (listaParámetros)
            br
            .ms-3 {
            br
            .ms-3 } 
        .cajon.color-acento-contenido.p-4.mb-4.justify-content-center
            p.mb-0 {} El constructor posee un par de llaves, dentro de las cuales estará el código que se ejecutará al ser llamado el método.
      .col-lg-5 
        .row
          .col-3
            img(src="@/assets/curso/img21.svg", alt=""  )
          .col-9
            h5 modifVisibilidad: 
            p Se aplica las mismas normas que para atributos y métodos que debe indicar si son #[i public], #[i private] o #[i protected].
        .row
          .col-3
            img(src="@/assets/curso/img22.svg", alt="" )
          .col-9 
            h5 nombreConstructor:  
            p Debe coincidir con el nombre de la clase.
        .row
          .col-3
            img(src="@/assets/curso/img23.svg", alt="" )
          .col-9 
            h5 listaParámetros: 
            p Es la lista de los parámetros que tomará la función separados por comas y definidos cada uno de ellos como: 
              spam.spam-text--primario tipo nombreParámetro
            spam.color--cyanclaro.p-2
              b Ejemplo: (int a, int b)
    .row.justify-content-center.mb-5
      .col-lg-12
        .cajon-ejemplo-metodo-js1
            .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
              .row.justify-content-center
                .col-lg-7
                  img(src="@/assets/curso/img24.jpg", alt="Ejemplo de implementación de constructor en Java." )
                .col-lg-5
                  p En el ejemplo de la clase Producto se crea el constructor 
                    b Producto 
                    b-none que tiene el mismo nombre de la clase, con el modificador de visibilidad público y su lista de parámetros, el cual recibe los atributos y se los asigna a la variable de la clase.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
          p La palabra reservada 
            b this 
            b-none hace referencia a los miembros de la propia clase en el objeto actual; es decir, 
            b this 
            b-none se refiere al objeto actual sobre el que está actuando un método determinado y se utiliza siempre que se quiera hacer referencia al 
            b objetoactual 
            b-none de la clase.
    p.mb-5 Un constructor sin parámetros es llamado 
      b constructor vacío. 
      b-none Si no se define ningún constructor, el compilador crea un constructor por defecto. Esto permite crear objetos con 
      b “new Clase()” 
      b-none sin argumentos, aunque no se defina ningún constructor.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon-ejemplo-metodo-js2
            .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
              .row.justify-content-center
                .col-6
                  img(src="@/assets/curso/img25.jpg", alt="Ejemplo de implementación de constructor vacío o por defecto en Java." )
    .row.mb-5.justify-content-between
      .col-lg-7
        p.me-5 
          b Un destructor 
          b-none es un método opuesto a un constructor, este método en lugar de crear un objeto lo destruye, liberando la memoria de la computadora para que pueda ser utilizada por alguna otra variable u objeto.
          br
          br
          |En Java no existen los destructores, esto es gracias al recolector de basura de la máquina virtual de Java. Como su nombre lo dice, el recolector de basura recolecta todas las variables u objetos que no se estén utilizando y que no haya ninguna referencia a ellos por una clase en ejecución, liberando así automáticamente la memoria de nuestra computadora.
          br
          br
          |Aunque Java maneja de manera automática el recolector de basura, el usuario también puede decir en qué momento Java pase el recolector de basura con la instrucción.
          br
          br
          spam.color--cyanclaro.p-3
            b.mx-5 System.gc ();
      .col-lg-5
        figure
          img(src="@/assets/curso/img26.jpg", alt="" )
    br
    br
    #t_5_3.titulo-segundo
      h2 5.3 Métodos de acceso y modificadores
    p.mb-5 De métodos y modificadores, hay dos tipos básicos esenciales de miembros de la clase: público (#[i public]) y privado (#[i private]). 
    .row.mb-5.justify-content-between
      .col-lg-7
        p.me-5 A los métodos y modificadores se puede acceder libremente a un miembro público, mediante un código definido fuera de su clase. Se puede acceder a un miembro privado solo por otros métodos definidos por su clase. Es a través del uso de miembros privados que el acceso está controlado.
          br
          br
          |Restringir el acceso a los miembros de una clase es una parte fundamental de la programación orientada a objetos, ya que ayuda a evitar el mal uso de un objeto; no obstante, al permitir el acceso a datos privados solo a través de un conjunto de métodos bien definidos, puede evitar que se asignen valores incorrectos a esos datos.
          br
          br
          |Como su nombre indica, los modificadores de acceso en Java ayudan a restringir el alcance de una clase, constructor, variable, método o miembro de datos.
      .col-lg-5
        figure
          img(src="@/assets/curso/img27.svg", alt="" )
    p.mb-5 Hay cuatro tipos de modificadores de acceso disponibles en Java:
    .row.mb-5.justify-content-center
      .col-lg-6
        figure
          img(src="@/assets/curso/img28.svg", alt="" )
    .row.mb-0.justify-content-between
      .col-lg-5
        h5 Modificador de acceso por defecto (#[i default])
        p Cuando no se especifica ningún modificador de acceso para una clase, método o miembro de datos, se dice estar teniendo 
          b modificador de acceso #[i default ]  
          b-none por defecto.
          br
          br
          |Los miembros de datos, clase o métodos que no se declaran utilizando ningún modificador de acceso; es decir, que tengan un modificador de acceso predeterminado, solo son accesibles dentro del mismo paquete.
      .col-lg-6
        .row.justify-content-center
          .col-lg-12
            .cajon-ejemplo
                .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
                  p.fw-bold class Producto {
                    br
                    .ms-5.fw-bold void mostrar ()
                    .ms-5.fw-bold  {
                    .ms-5.fw-bold System.out.println(” Hola Mundo!”);
                    .ms-5.fw-bold  	}
                    .fw-bold
                      |	}
    p.mb-5 La clase 
      b Producto 
      b-none tiene modificador de acceso #[i default] al igual que el método mostrar, esto quiere decir que no podrán ser accedidas desde otro paquete.
    br
    br
    .row.justify-content-between
      .col-lg-5
        h5 Modificador de acceso privado (#[i private])
        p El modificador de acceso privado se especifica con la palabra clave 
          b #[i private]. 
          b-none Los métodos o los miembros de datos declarados como privados solo son accesibles dentro de la clase en la que se declaran. Además:
        ul.lista-ul--color.fa-ul
          li 
            i.fas.fa-check
            | Ninguna de las otras clases del mismo paquete podrá acceder a los miembros.
          li 
            i.fas.fa-check
            p.mb-0 Las clases e interfaces no se pueden declarar como privadas (#[i private]).
      .col-lg-6
        .row.justify-content-center
          .col-lg-12
            .cajon-ejemplo
                .cajon.color-acento-contenido.p-5.mb-4.justify-content-center

                  p.fw-bold public class Producto {
                    br
                    .ms-5.fw-bold private void mostrar () 
                    .ms-5.fw-bold {
                    .ms-5.fw-bold  	System.out.println(” Hola Mundo!”);
                    .ms-5.fw-bold  	}
                    .fw-bold
                      |	}
    p.mb-5 En este ejemplo tenemos el método mostrar con el modificador privado, lo que quiere decir que si se llama a este método de otra clase no se visualizará.
    br
    br
    .row.mb-5.justify-content-between
      .col-lg-5
        h5 Modificador de acceso protegido (#[i protected])
        p El modificador de acceso protegido se especifica con la palabra clave #[i protected]. 
          b Además:
        ul.lista-ul--color.fa-ul
          li 
            i.fas.fa-check
            p.mb-0 Los métodos o miembros de datos declarados como #[i protected] son accesibles dentro del mismo paquete o sub-clases en paquetes diferentes.

      .col-lg-6
        .row.justify-content-center.mb-5
          .col-lg-12
            .cajon-ejemplo
                .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
                  p.fw-bold public class Producto {
                    br
                    .ms-5.fw-bold  	protected void mostrar ()
                    .ms-5.fw-bold  {
                    .ms-5.fw-bold  	System.out.println(” Hola Mundo!”);
                    .ms-5.fw-bold  	}
                    .fw-bold
                      |	}
    .row.justify-content-between
      .col-lg-5
        h5 Modificador de acceso público (#[i public])
        p El modificador de acceso público se especifica con la palabra clave 
          b #[i public]. 
          b-nonw Además: 
          
        ul.lista-ul--color.fa-ul
          li 
            i.fas.fa-check
            | El modificador de acceso público tiene el alcance más amplio entre todos los demás modificadores de acceso.
          li 
            i.fas.fa-check
            | Las clases, métodos o miembros de datos que se declaran públicos son accesibles desde cualquier lugar del programa.
          li 
            i.fas.fa-check
            | No hay restricciones en el alcance de los miembros de datos públicos.
      .col-lg-6
        .row.justify-content-center
          .col-lg-12
            .cajon-ejemplo
                .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
                  p.fw-bold public class Producto {
                    br
                    .ms-5.fw-bold  	 	public void mostrar ()
                    .ms-5.fw-bold  {
                    .ms-5.fw-bold  	 	System.out.println(” Hola Mundo!”);
                    .ms-5.fw-bold  	}
                    .fw-bold
                      |	}
    p.mb-5 Siguiendo con el ejemplo de la clase 
      b Producto, 
      b-nonw en este caso al declarar el método mostrar como público permite acceder desde cualquier parte al método mostrar.
    br
    br
    .row.mb-5.justify-content-between
      .col-lg-5
        h5 Métodos accesores
        p Son los métodos que permiten obtener o modificar los atributos de un objeto y son de dos tipos 
          b.fst-italic get 
          b-none y 
          b.fst-italic set.
          br
          br
          |Los métodos  
          b.fst-italic get 
          b-none y 
          b.fst-italic set, 
          b-none son simples métodos que usamos en las clases para mostrar (
          b.fst-italic get
          b-none ) o modificar (
          b.fst-italic set
          b-none ) el valor de un atributo. El nombre del método siempre será 
          b.fst-italic get 
          b-none o 
          b.fst-italic set
          b-none  y a continuación el nombre del atributo, su modificador siempre es 
          b.fst-italic public,  
          b-none ya que se quiere mostrar o modificar desde fuera de la clase. Por ejemplo, 
          b getNombre 
          b-none o 
          b setNombre.
      .col-lg-6
        .row.justify-content-center.mb-5
          .col-lg-12
            .cajon-ejemplo
                .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
                  p Sintaxis método #[i get]:
                  p.fw-bold public tipo_dato_atributo getAtributo (){     
                    br
                    .ms-5.fw-bold  	 	     return atributo;
                    .fw-bold
                      |	}
    .row.mb-5.justify-content-between
      .col-lg-5
        figure
          img(src="@/assets/curso/img29.svg", alt="" )
      .col-lg-6
        .row.justify-content-center.mb-5
          .col-lg-12
            .cajon-ejemplo
                .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
                  p.mt-5 Sintaxis método #[i set]:
                    br
                    .fw-bold.my-5   public void setAtributo (tipo_dato_atributo variable){   
                    .ms-5.fw-bold.mb-5      this.atributo = variable;
                    .fw-bold
                      |	}
    .row.justify-content-center.mb-5
      .col-lg-12
          .cajon.color-acento-contenido.justify-content-center
            .row 
              .col-auto
                p.p-2.bgc Ejemplo implementación de métodos #[i get] y #[i set] en Java
            .row.justify-content-center.p-5.mb-4
              .col-lg-8
                img(src="@/assets/curso/img30.jpg", alt="Se muestra la clase ‘Producto” con sus atributos “código” y “nombre”, por cada uno de estos atributos están sus métodos “get” y “set“" )
              .col-lg-4
                p En el ejemplo se muestra la clase 
                  b Producto 
                  b-none con sus atributos 
                  b codigo 
                  b-none y nombre,  por cada uno de estos atributos encontramos sus métodos 
                  b #[i get ] 
                  b-none y #[i #[b set]] para obtener y cambiar el valor de cada uno de ellos.
    br
    br
    #t_5_4.titulo-segundo
      h2 5.4 Sobrecarga de métodos (#[i overload]) 
    p.mb-5 Permite definir más de un constructor o método con el mismo nombre, con la condición de que no puede haber dos de ellos con el mismo número y tipo de parámetros. En resumen, la sobrecarga permite declarar métodos que se llamen igual pero que reciban parámetros diferentes (no puede haber 2 métodos con el mismo nombre y los mismos parámetros), por esta razón lo que define a qué método se ingresa, son los argumentos que se envían como parámetros.
    .titulo-sexto.color-acento-contenido
      h5 Figura 15.
      span Tipos de datos en Java
    .row.justify-content-center.mb-5
      .col-lg-12
        .cajon-ejemplo-metodo-js9
            .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
              .row.justify-content-center
                .col-lg-8
                  img(src="@/assets/curso/img31.jpg", alt="Se muestra una sobrecarga de constructores y una de métodos.")
                .col-lg-4
                  p En el ejemplo se muestra una sobrecarga de constructores y una de métodos. Existe sobrecarga en los constructores 
                    b Producto
                    b-none , ya que se crearon dos con el mismo nombre, pero con diferentes parámetros; el mismo caso pasa con el método 
                    b descontarProducto
                    b-none , que está creado dos veces, pero con diferentes parámetros.
        figcaption SENA (2021).
      

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
