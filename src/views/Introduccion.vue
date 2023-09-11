<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mb-5
      img(src="@/assets/curso/banner-intro.svg", alt="Redes")
    
    p.mb-5 Para la construcción de #[i software] se hace evidente la importancia de la utilización de modelos ya que representan el aspecto y la dirección de una necesidad. Esa “necesidad” puede estar en un estado de desarrollo o en un estado de planeación. Los diseñadores del modelo deben realizar un levante de los requerimientos del producto y dichos requerimientos pueden incluir áreas tales como funcionalidad, #[i performance] y confiabilidad. El modelo se divide en un número de vistas, cada una de las cuales describe un aspecto específico del producto o sistema en construcción. Un modelo permite documentar la estructura y conducta de un sistema antes de que sea codificado. En el siguiente video se expone la importancia de la programación orientada a objetos (POO) para modelar soluciones de #[i software].

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video.
    .cajon.color-acento-contenido.p-4
      p.mb-0 Este componente formativo, entonces, también se dará un recorrido a las características del lenguaje de programación orientada a objetos, las implementaciones de clases y objetos, y en su interior se reconocerán los atributos, métodos de las clases, los constructores y destructores, los métodos de acceso y modificación, junto con la sobrecarga de métodos. Esto permitirá conocer con la comunicación entre clases desde su implementación de asociaciones, composición / agregación y la implementación de herencia.  

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
