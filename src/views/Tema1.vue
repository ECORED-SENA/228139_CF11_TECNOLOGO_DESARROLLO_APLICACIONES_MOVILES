<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a UML
      
    figure.mb-5
      img(src="@/assets/curso/banner-tema1.svg", alt="Computador con lenguaje de programación en la pantalla")  

    p.mb-4 Los UML se consideran técnicas para la especificación de sistemas. A continuación podrá conocer su definición y principales características.

    figure.mb-5
      img(src="@/assets/curso/UML.svg", alt="UML")  

    .row.mb-4
      .col-lg-7.mb-2
        p UML es una técnica para la especificación de sistemas en todas sus fases. Nació en 1994 cubriendo los aspectos principales de todos los métodos de diseño antecesores. Los padres de UML son Grady Booch, autor del método Booch, James Rumbaugh, autor del método OMT, e Ivar Jacobson, autor de los métodos OOSE y Objectory. La versión 1.0 de UML fue liberada en enero de 1997 y ha sido utilizada con éxito en sistemas construidos para toda clase de industrias alrededor del mundo: hospitales, bancos, comunicaciones, aeronáutica, finanzas, etc. (Holt, R., 2009).
        p UML por sus siglas en inglés (Unified Modeling Language), lenguaje unificado de modelado, es el lenguaje de modelado de sistemas de software más conocido y utilizado en la actualidad; permite visualizar, especificar, construir y documentar sistemas con una perspectiva orientada a objetos (Rumbaugh et al., 2004).    
        
      .col-lg-5.mb-2
        figure
          img(src='@/assets/curso/imagen-tema1.svg', alt='Imagen decorativa')   
    
    .row.justify-content-center
      .col-lg-11.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Usos del modelado         
        figure.mb-5
          img(src='@/assets/curso/infografia-tema1.svg', alt='Se presentan cuatro usos fundamentales del modelado.') 


    p El UML está compuesto por diversos elementos gráficos que se combinan para conformar diagramas. Entre los diagramas que existen en UML, se tienen el diagrama de clase que hace parte de los diagramas de estructura, los cuales enfatizan los elementos que deben existir en el sistema de modelado. 

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass"></style>
