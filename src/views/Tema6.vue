<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Comunicación entre clases
    p.mb-5 Las clases, al igual que los objetos, no existen de modo aislado. La programación orientada a objetos (POO) intenta modelar aplicaciones del mundo real tan fielmente como sea posible y por lo tanto debe reflejar estas relaciones entre clases y objetos. Por consiguiente, a continuación, podrá observar la comunicación entre clases:
    .row.mb-5.justify-content-center
      .col-lg-6.mb-5.mb-lg-0
        //- .bloque-texto-b debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            h3.mb-0 La comunicación entre clases es posible solo a través de la parte pública de las clases correspondientes.
    p.mb-5 
      b Según Rumbaugh, J., Jacobson, I. & Booch, G. (2004), 
      b-none existen tres clases básicas de relaciones entre los objetos:
    .row.mb-5.justify-content-center
      .col-lg-3
        img.mb-3(src="@/assets/curso/img32.svg", alt="" style="width: 75px").m-auto
        .cuadro--cyanclaro.p-4
          p.fw-bold.m-auto.text-center Asociación
      .col-lg-3
        img.mb-3(src="@/assets/curso/img33.svg", alt="" style="width: 75px").m-auto
        .cuadro--cyanclaro.p-4
          p.fw-bold.m-auto.text-center Agregación / Composición
      .col-lg-3
        img.mb-3(src="@/assets/curso/img34.svg", alt="" style="width: 75px").m-auto
        .cuadro--cyanclaro.p-4
          p.fw-bold.m-auto.text-center Generalización / Especialización. 
            | Herencia
    #t_6_1.titulo-segundo
      h2 6.1 Implementación de asociaciones
    p.mb-5 La implementación de asociación en Java se realiza mediante el uso de un campo de instancia. La relación puede ser bidireccional y cada clase tiene una referencia a la otra. La agregación y la composición son tipos de relaciones de asociación. A continuación, se explicitan los tipos de relaciones:
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="a- Asociación bidireccional")
        .row
          .col-lg-6.d-block.my-auto
              img.mb-3(src="@/assets/curso/img35.svg", alt="" ).m-auto.d-block
          .col-lg-6
            h4 Asociación bidireccional
            p.mb-5 Un cliente tiene una cuenta corriente y una cuenta pertenece a un dueño.
              br
              br
              |Para realizar la implantación en Java de esta asociación bidireccional lo que se hace es:
              br
              br
              |En la clase 
              b Cliente 
              b-none crear una instancia de la clase 
              b Cuenta 
              b-none y en la clase 
              b Cuenta 
              b-none crear una instancia de la clase 
              b Cliente  
              b-none así:
            a.boton.color-acento-botones.mb-5.indicador__container(@click="modal1 = true")
              span 
                b Ejemplo asociación bidireccional en Java
              .indicador--click(v-if="mostrarIndicador")
      .py-3.py-md-4(titulo="b- Asociación unidireccional")
        .row
          .col-lg-6.d-block.my-auto
              img.mb-3(src="@/assets/curso/img38.svg", alt="" ).m-auto.d-block
          .col-lg-6
            h4 Asociación unidireccional
            p.mb-5 Un usuario tiene una clave.
              br
              br
              |En Java esta relación unidireccional se implementa como un atributo dentro de la clase 
              b Usuario 
              b-none así:


            a.boton.color-acento-botones.mb-5.indicador__container(@click="modal2 = true")
              span 
                b Ejemplo asociación unidireccional en Java
              .indicador--click(v-if="mostrarIndicador")
    ModalA.color-primario(:abrir-modal.sync="modal1")
      .row.justify-content-center
        .col-md-6.mb-4.mb-md-0.p-5
          img.mb-3(src="@/assets/curso/img36.jpg", alt="" ).m-auto.d-block
    ModalA.color-primario(:abrir-modal.sync="modal2")
      .row.justify-content-center
        .col-md-6.mb-4.mb-md-0.p-5
          img.mb-3(src="@/assets/curso/img37.jpg", alt="" ).m-auto.d-block
    #t_6_2.titulo-segundo
      h2 6.2 Implementación de composición/agregación
    p.mb-5 La agregación es un tipo de relación que comprende a las clases y sus diferentes componentes, constituyendo un todo, a su vez, la composición en cambio es un tipo de agregación, donde cada componente solo puede pertenecer a un todo.
      br
      br
      |La composición en Java consiste en crear una clase nueva agrupando objetos de clases que ya existen, los objetos contenidos se declaran con visibilidad private y se inicializan en el constructor de la clase.
    .row.mb-5.justify-content-center
      .col-lg-6
        img.mb-3(src="@/assets/curso/img39.svg", alt="").m-auto
    p.mb-5 El anterior ejemplo implementado en Java quedaría de la siguiente manera:
    .row.justify-content-center.mb-5
      .col-lg-12
        .cajon-ejemplo-metodo-js10
            .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
              .row.justify-content-center
                .col-lg-8
                  img(src="@/assets/curso/img40.jpg", alt="Ejemplo de implementación de composición Java." )
                .col-lg-4
                  p La imagen muestra la creación de la clase 
                    b Torre 
                    b-none con un atributo de tipo 
                    b DiscoDuro
                    b-none , con un constructor que instancia un objeto disco, si destruimos la instancia de tipo Torre se destruye la instancia de tipo 
                    b DiscoDuro.
    p.mb-5 La agregación en Java es la relación que existe entre dos clases donde la clase agregada contiene una referencia de otra clase.
    .row.mb-5.justify-content-center
      .col-lg-6
        img.mb-3(src="@/assets/curso/img41.svg", alt="").m-auto
    p.mb-5 El siguiente código muestra cómo se hace la implementación del ejemplo anterior en Java:
    .row.justify-content-center.mb-5
      .col-lg-12
        .cajon-ejemplo-metodo-js11
            .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
              .row.justify-content-center
                .col-lg-8
                  img(src="@/assets/curso/img42.jpg", alt="Continuación del ejemplo anterior con agregación en UML." )
                .col-lg-4
                  p La imagen muestra la creación de un atributo de tipo 
                    b Parlante 
                    b-none en la clase 
                    b Torre
                    b-none , para vincular el objeto se crea un método ensamblar que recibe un parámetro de tipo parlante. En este caso si se destruye la instancia de tipo Torre no se destruye la instancia de tipo parlante.
    #t_6_3.titulo-segundo
      h2 6.3 Implementación de herencia
    p.mb-5 La herencia es el mecanismo por el que se crean nuevos objetos definidos en términos de objetos ya existentes. Por ejemplo, si se tiene la clase 
      b Persona
      b-none , se puede crear la subclase 
      b Empleado
      b-none , que es una extensión de 
      b Persona. 
    .row.justify-content-between.mb-5
      .col-lg-5
        .cuadro-primario.px-5.py-1
          p.fw-bold.mb-0.my-auto.d-block.mt-5 class Empleado extends Persona {
                    br
                    .fw-bold          int ventas;
                    .fw-bold
                      |	}
      .col-lg-6
        p La herencia permite compartir automáticamente métodos y datos entre clases, subclases y objetos.
          br
          br
          |En Java esto es posible mediante el uso de la palabra clave 
          b extends. 
          b-none Por lo tanto, la subclase se añade (se extiende) a la superclase.
          br
          br
          |En el ejemplo anterior, la clase 
          b Empleado  
          b-none extiende de la clase principal Persona heredando todos sus métodos y atributos.
    .titulo-quinto.color-acento-contenido
          h5 Ejemplo de herencia en UML
    .row.mb-5.justify-content-center
      .col-lg-10
        img.mb-3(src="@/assets/curso/img43.svg", alt="Esquema que representa un ejemplo de herencia en UML.").m-auto
    p.mb-5 La 
      b superClase Persona  
      b-none tiene los atributos de nombre, apellido, documento, que también los necesita la clase 
      b Cliente 
      b-none y la clase 
      b Empleado.  
      b-none Una de las ventajas de la herencia es la reutilización de código, en este caso las dos clases hijas no necesitan volver a colocar los atributos porque ya los hereda de la clase persona.
      br
      br
      |Implementado la relación de herencia del ejemplo 
      b Persona, Cliente y Empleado 
      b-none en Java sería: 
    .row.justify-content-between.mb-5
      .col-1
        img.img-a.img-t.mb-3(src="@/assets/curso/img44.svg", alt="")
      .col-lg-11.col-md-10.col-md-9.d-block.m-auto
        h6 Se crea la clase padre o superClase Persona, con sus atributos, constructores, métodos get y set.
    .row.justify-content-center.mb-5
      .col-lg-12
        .cajon-ejemplo-metodo-js4
            .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
              .row.justify-content-center
                .col-lg-8
                  img(src="@/assets/curso/img46.jpg", alt="Ejemplo del código de implementación extends en Java." )
    .row.justify-content-between.mb-5
      .col-1
        img.img-a.img-t.mb-3(src="@/assets/curso/img45.svg", alt="")
      .col-lg-11.col-md-10.col-md-9.d-block.m-auto
        h6 Se crea la clase Cliente con su propio atributo categoría y su método mostrar datos, para heredar los atributos de la superClase Persona utilizamos la palabra reservada extends así:
    .row.justify-content-center.mb-5
      .col-lg-12
        .cajon-ejemplo-metodo-js5
            .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
              .row.justify-content-center
                .col-lg-8
                  img.mb-3(src="@/assets/curso/img47.jpg", alt="Ejemplo del código de implementación constructor en herencia Java." ) 
                  p Cuando se extiende de la clase 
                    b Persona 
                    b-none hay que implementar el constructor que trae los atributos de nombre, apellido y documento de la clase persona, al hacer clic en el bombillo que señala la flecha azul o presionar Alt + Enter se crea el constructor           
    .row.justify-content-center.mb-5
      .col-lg-12
        .cajon-ejemplo-metodo-js6
            .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
              .row.justify-content-center
                .col-lg-8
                  img.mb-3(src="@/assets/curso/img48.jpg", alt="Captura de pantalla del código en el que la clase Cliente se completa reutilizando atributos y métodos de la superClase Persona después de realizar la herencia." ) 
                  p La imagen muestra la herencia de la clase persona con la creación del constructor.           
    .row.justify-content-center.mb-5
      .col-lg-12
        .cajon-ejemplo-metodo-js7
            .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
              .row.justify-content-center
                .col-lg-8
                  img.mb-3(src="@/assets/curso/img49.jpg", alt="Ejemplo del código mostrando la implementación de la clase Empleado en Java." ) 
                  p La imagen muestra la clase 
                    b Cliente 
                    b-none completa reutilizando atributos y métodos de la superClase 
                    b Persona 
                    b-none después de realizar la herencia.     
    .row.justify-content-center.mb-5
      .col-lg-12
        .cajon-ejemplo-metodo-js8
            .cajon.color-acento-contenido.p-5.mb-4.justify-content-center
              .row.justify-content-center
                .col-lg-8
                  img.mb-3(src="@/assets/curso/img50.jpg", alt="Ejemplo del código mostrando la implementación de la clase Empleado en Java." ) 
                  p La imagen muestra la implementación de la herencia de la clase 
                    b Empleado.
      

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    modal1: false,
    modal2: false,
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
