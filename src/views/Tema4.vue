<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Características del lenguaje de programación orientada a objetos
      
    p.mb-5 Aunque la POO se puede implementar en lenguajes como C y PASCAL, se hace muy pesada y confusa cuando es un programa de gran tamaño. Utilizar un lenguaje que esté especialmente diseñado para soportar los conceptos de POO, se vuelve más adecuado para implementarlos. Ya que dependiendo de las características que soportan los lenguajes, se pueden clasificar en las dos categorías siguientes, en lenguajes de programación basados en objetos y en lenguajes de programación orientados a objetos.
      br
      br
      |La programación basada en objetos es el estilo de programación que soporta principalmente encapsulación e identidad de objetos y sus características principales se centran en:
    .row.mb-5.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 10.
          span Características de POO
        figure.mb-5
          img.mb-3(src="@/assets/curso/img2.svg", alt="Las características son la encapsulación de datos, la ocultación y los mecanismos de acceso, la inicialización automática y la sobrecarga de operadores.")
          figcaption SENA (2021)
    p.mb-5 Se dice que los lenguajes que no soportan programación con objetos son lenguajes de programación basados en objetos; es decir, que no soportan la herencia ni la ligadura dinámica. Un ejemplo podría ser el lenguaje de programación Ada que además de tener estas características, es un lenguaje multipropósito.
      br
      br
      |La programación orientada a objetos incorpora todas las características de la programación basada en objetos, junto con dos adicionales, a saber: herencia y ligadura dinámica. Además, se caracteriza por la siguiente sentencia:
    .row.mb-5.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 11.
          span Características de programación orientada a objetos
        figure.mb-5
          img.mb-3(src="@/assets/curso/img3.svg", alt="Las características de programación son: herencia, ligadura dinámica y características basadas en objetos.")
          figcaption SENA (2021)
    p.mb-5 Entre los lenguajes que soportan estas características se incluyen 
      b C++, Smalltalk, Object Pascal y Java
      b-none , aunque existe un gran número de lenguajes de programación basados en objetos y orientados a objetos. 
      br
      br
      |En este componente se realizará la implementación de los conceptos de la POO en el lenguaje de programación Java, el cual es un lenguaje orientado a objetos desarrollado por Sun Microsystems presentado en el año 1995. Java traduce el código fuente Java en instrucciones que son interpretadas por la máquina virtual de Java (JVM, Java Virtual Machine). A diferencia de 
      b C y C++  
      b-none en los que está inspirado, este es un lenguaje interpretado (Andaluza & Garcilaso, 2012).
      br
      br
      |Sus características principales son: 
      br
      br
    .row.mb-5.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 12.
          span Características Java
        figure.mb-5
          img.mb-3(src="@/assets/curso/img4.svg", alt="Las características Java son: sencillez, orientación a objetos, independencia de la arquitectura, robusto, dinámico y multitarea.")
          figcaption SENA (2021)
    p.mb-5 Además de contar con las anteriores características, existen distintos entornos de desarrollo de aplicaciones Java, este tipo de productos ofrecen al programador un ambiente de trabajo integrado para facilitar el proceso completo de desarrollo de aplicaciones; estos productos se denominan IDE (Integrated Development Environment). Entre los más conocidos se encuentran:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span Entornos de desarrollo Java
    .tabla-a.color-acento-botones.mb-5.text-center
      table.text-center
        caption SENA (2021).
        thead
          tr
            th ID
            th Logo
            th Enlace
        tbody
          tr
            td NetBeans
            td
              img.mb-3(src="@/assets/curso/img5.svg", alt="")
            td 
              a(href="https://netbeans.apache.org/download/index.html" target="_blank")
                | https://netbeans.apache.org/download/index.html
          tr
            td Eclipse
            td
              img.mb-3(src="@/assets/curso/img6.svg", alt="" style="width: 288px").m-auto.mb-0
            td 
              a(href="http://www.eclipse.org/downloads/" target="_blank" )
                | http://www.eclipse.org/downloads/
          tr
            td JBlue
            td
              img.mb-3(src="@/assets/curso/img7.svg", alt="" style="width: 88px").m-auto.mb-0
            td 
              a(href="https://bluej.org/versions.html" target="_blank")
                | https://bluej.org/versions.html
</template>

<script>
export default {
  name: 'Tema4',
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
