<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Diagramas de Clase 

    figure.mb-5
      img(src="@/assets/curso/banner-tema2.svg", alt="Imagen sobre Diagramas de Clase ")  

    .row.justify-content-center.mb-3
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-4 
          .row.m-0.align-items-center.justify-content-between 
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p Un diagrama de clases es un tipo de diagrama estático que describe la estructura de un sistema mostrando sus clases, atributos y las relaciones entre ellos. Los diagramas de clases son utilizados durante el proceso de análisis y diseño de los sistemas, donde se crea el diseño conceptual de la información que se manejará en el sistema, y los componentes que se encargarán del funcionamiento y la relación entre uno y otro. En un diagrama de clases se pueden distinguir principalmente dos elementos: clases y sus relaciones (Flores Cueto & Bertolotti Zuñiga, 2013).
            .col-lg-4
              figure
                img(src="@/assets/curso/imagen-tema2.svg", alt="Imagen decorativa") 

    p El objetivo de un diagrama de clase es representar las clases que conforman el modelo de un determinado sistema, el diagrama de clase se construye y se refina durante las fases de análisis y diseño, y se toma como referencia en la implementación del sistema.

    p.mb-5 Hay tres perspectivas diferentes en las cuales se pueden utilizar los diagramas de clase:            

    .row 
      TabsA.color-acento-contenido.mb-4
        .tarjeta.color-acento-contenido2.p-4(titulo="Conceptual")
          .row.justify-content-center.align-items-center
            .col-xl-3.mb-4.px-lg-5.col-4
              figure
                img(src='@/assets/curso/gestion-de-proyectos.svg', alt='Gestion de proyectos')
            .col-xl-8
              p El diagrama de clase representa los conceptos en el dominio del problema que se está estudiando. 
        
        .tarjeta.color-acento-contenido2.p-4(titulo="Especificación")
          .row.justify-content-center.align-items-center
            .col-xl-3.mb-4.px-lg-5.col-4
              figure
                img(src='@/assets/curso/interfaz.svg', alt='Interfaz')
            .col-xl-8
              p El diagrama de clase refleja las interfaces de las clases, pero no su implementación. Aquí las clases aparecen más cercanas a los tipos de datos, ya que un tipo representa una interfaz que puede tener muchas implementaciones diferentes.
        
        .tarjeta.color-acento-contenido2.p-4(titulo="Implementación")
          .row.justify-content-center.align-items-center
            .col-xl-3.mb-4.px-lg-5.col-4
              figure
                img(src='@/assets/curso/implementacion.svg', alt='Implementación')
            .col-xl-8
              p Esta vista representa las clases tal cual aparecen en el entorno de implementación.

    p.mb-5 Los elementos que componen un diagrama de clase son:           
            
    .row 
      TabsA.color-acento-botones.mb-4
        .tarjeta.color-amarillo3.p-4(titulo="Clase")
          .row.justify-content-center.align-items-center
            .col-xl-3.mb-4.px-lg-5.col-4
              figure
                img(src='@/assets/curso/modelado-3d.svg', alt='Clase')
            .col-xl-8
              p Es la unidad básica que encapsula toda la información de un Objeto (un objeto es una instancia de una clase). A través de ella podemos modelar el entorno en estudio (una casa, un auto, una cuenta corriente, etc.).
        
        .tarjeta.color-amarillo3.p-4(titulo="Atributos")
          .row.justify-content-center.align-items-center
            .col-xl-3.mb-4.px-lg-5.col-4
              figure
                img(src='@/assets/curso/surface1.svg', alt='Atributos')
            .col-xl-8
              p Los atributos o características de una clase.
        
        .tarjeta.color-amarillo3.p-4(titulo="Métodos")
          .row.justify-content-center.align-items-center
            .col-xl-3.mb-4.px-lg-5.col-4
              figure
                img(src='@/assets/curso/flujo-de-trabajo.svg', alt='Métodos')
            .col-xl-8
              p Los métodos u operaciones de una clase son la forma en cómo esta interactúa con los datos.

    p.mb-5 En UML, una clase es representada por un rectángulo que posee tres divisiones:

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido.titulo-img
          h5 Representación de una clase en UML
        figure.mb-5
          img.mb-2(src='@/assets/curso/representacion-clase-UML.svg', alt='Se presentan las divisiones de una clase.') 
          figcaption Fuente: SENA (2021).

    p En donde:

    .row.mb-2
      .col-lg-7.mb-3
        ul.lista.lista-ul--color.p-1.mt-2.fa-ul
          li 
            i.fas.fa-square
            p.mb-0 El rectángulo superior contiene el nombre de la clase.
          li 
            i.fas.fa-square
            p.mb-0 El rectángulo intermedio contiene los atributos (o variables de instancia) que caracterizan a la clase.
          li 
            i.fas.fa-square
            p.mb-0 El rectángulo inferior contiene los métodos u operaciones, los cuales son la forma como interactúa el objeto con su entorno.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Los atributos y las clases tienen características que definen el grado de comunicación y visibilidad de ellos con el entorno a lo que llamamos controles de acceso.
      .col-lg-5
        figure
          img(src='@/assets/curso/imagen2-tema2.svg', alt='Imagen decorativa')      


    Separador


    // 2.1
    #t_2_1.titulo-segundo
      .h2 2.1. Control de acceso

    p.mb-4 El 
      strong control de acceso 
      | o la 
      strong visibilidad 
      | define la accesibilidad para los atributos o métodos de la clase. Los atributos y métodos pueden ser privados, protegidos o públicos y se representan con cada uno de los símbolos que muestra la siguiente tabla:

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.titulo-img
          h5 Tabla 1. Símbolos de modificadores de acceso

        .tabla-a.color-acento-contenido(data-aos="fade-left") 
          table
            tbody.text-bold.text-center
              tr.bgt1
                td Público 
                td + 
              tr.bgt2
                td.bgt2 Privado
                td.bgt2 -
              tr.bgt1
                td Protegido
                td #
          figcaption Fuente: SENA (2021).

    .row 
      TabsA.color-acento-contenido.mb-4
        .tarjeta.color-acento-contenido2.p-4(titulo="Público")
          .row.justify-content-center.align-items-center
            .col-xl-3.mb-4.px-lg-5.col-4
              figure
                img(src='@/assets/curso/group.svg', alt='Público')
            .col-xl-8
              p Se define un atributo o método público cuando se quiere que sean vistos o accesibles por todas las clases 
        
        .tarjeta.color-acento-contenido2.p-4(titulo="Privado")
          .row.justify-content-center.align-items-center
            .col-xl-3.mb-4.px-lg-5.col-4
              figure
                img(src='@/assets/curso/candado.svg', alt='Privado')
            .col-xl-8
              p Se define un atributo o método privado cuando se quiere que sean visibles o accesibles únicamente por la misma clase en que están.
        
        .tarjeta.color-acento-contenido2.p-4(titulo="Protegido")
          .row.justify-content-center.align-items-center
            .col-xl-3.mb-4.px-lg-5.col-4
              figure
                img(src='@/assets/curso/escudo-seguro.svg', alt='Protegido')
            .col-xl-8
              p Se define un atributo o método protegido cuando solo se quiere tener acceso a él desde la propia clase que lo define y las que heredan de él.

    p Por ejemplo, se puede representar una clase denominada 
      strong Producto 
      | que contiene 3 atributos (
      strong código de tipo entero, nombre de tipo #[i String] y precio de tipo #[i double]
      | ) y 2 métodos (
      strong obtenerPrecio y calcularTotal
      | ), de la siguiente manera:
    p.mb-5 Se observa que todos los atributos en esta clase son privados porque tienen el símbolo – y los métodos son públicos porque tienen el símbolo +      

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Representación de la clase Producto en UML
        figure.mb-5
          img.mb-2(src='@/assets/curso/2-1-figura2.svg', alt='Representación de la clase Producto en UML') 
          figcaption Fuente: SENA (2021).

    h3 Relaciones entre clases

    .row.mb-2
      .col-lg-7.mb-3
        p Las relaciones existentes entre las distintas clases nos indican cómo se comunican los objetos de esas clases entre sí:
        p Existen diferentes tipos de relaciones:
        ul.lista.lista-ul--color.p-1.mt-2.fa-ul
          li 
            i.fas.fa-square
            p.mb-0 Asociación (conexión entre clases).
          li 
            i.fas.fa-square
            p.mb-0 Dependencia (relación de uso).
          li 
            i.fas.fa-square
            p.mb-0 Generalización (relaciones de herencia).
      .col-lg-5
        figure
          img(src='@/assets/curso/2-1-imagen.svg', alt='Imagen decorativa') 


    Separador


    // 2.2
    #t_2_2.titulo-segundo
      .h2 2.2. Asociaciones
    
    p.mb-4 Se le conoce como relación de asociación a las conexiones entre clases.  Este tipo de relación se representa gráficamente como una línea que une las dos clases y tiene las siguientes características: 

    .row.justify-content-center
      .col-lg-10
        ol.lista-ol--cuadro.m-3.fa-ul
          li 
            .lista-ol--cuadro__vineta
              span.text-bold 1
            p Nombre de la asociación. (Es obligatorio establecer el nombre de la asociación).
          li 
            .lista-ol--cuadro__vineta
              span.text-bold 2
            p Cada clase tiene asociado un rol, el cual se interpreta como el papel que juega dicha clase en el contexto de la asociación. Los roles son opcionales y no se utilizan cuando el nombre de la clase expresa correctamente el rol de esta en el contexto de la relación de asociación.
          li 
            .lista-ol--cuadro__vineta
              span.text-bold 3
            p 
              strong Navegabilidad: 
              | en las relaciones de asociación se puede establecer si el vínculo es unidireccional o bidireccional. Gráficamente se representan con puntas de flecha.
          li 
            .lista-ol--cuadro__vineta
              span.text-bold 4
            p 
              strong Multiplicidad: 
              | representan el número de instancias de la clase que pueden ser partícipes en el proceso de asociación con respecto a una instancia particular de la otra clase vinculada en la relación. (Schmuller, 2001)

    p.mb-4 A continuación, se presentan algunos ejemplos gráficos.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Ejemplo de asociación
        figure.mb-5
          img.mb-2(src='@/assets/curso/2-1-figura3.svg', alt='Esquema donde se muestra un ejemplo de tres asociaciones de un Rol A con un Rol B.') 
          figcaption Fuente: SENA (2021).

    p En el ejemplo anterior, se pueden observar 3 diferentes ejemplos de asociación entre la clase A y la clase B, en todos los ejemplos la Clase A asume el 
      span rol A 
      | en el contexto de asociación, mientras que la clase B asume el 
      span rol B 
      | en el contexto de la relación. 
    p Adicionalmente, se puede observar que los dos primeros ejemplos tienen navegabilidad unidireccional, lo cual representa que la relación se establece en un solo sentido. En el primer caso la 
      span Asociación 1 
      | vincula la clase B como origen y la clase A como destino, en el segundo caso se vincula con la 
      span Asociación 2 
      | a la clase A como origen con la clase B como destino y en el último ejemplo el vínculo es bidireccional, es decir en los dos sentidos, desde A hacia B y desde B hacia A.
    p Una relación de asociación debe tener como mínimo tres elementos: (I) nombre de la asociación, (II) navegabilidad y (III) multiplicidad. Respecto a la multiplicidad esta representa la cantidad numérica de instancias de las clases que participan en la relación, aunque este puede ser cualquier número normalmente se acostumbra a utilizar el valor de 1 o * cuando son varias instancias las participantes.
    p Para facilitar el proceso de entendimiento y lectura se debe tener en cuenta la navegabilidad. Siempre se lee tomando como referencia 
      strong.cursiva un 
      | ejemplar de la clase desde donde se origina la asociación respecto al valor 
      strong.cursiva N 
      | de instancias del otro extremo de la asociación, este valor N es la multiplicidad en el otro extremo.
    p.mb-4 Por ejemplo, se puede representar una clase denominada 
      strong Figura 
      | que contiene dos atributos (lado1 y lado2) y 3 métodos (método constructor 
      strong Figura
      | , método área y método perímetro), de la siguiente manera:

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.titulo-img
          p 
            strong Figura 4. 
            | Ejemplo de variaciones de asociación entre clases
        figure.mb-5
          img.mb-2(src='@/assets/curso/2-1-figura4.svg', alt='Ejemplo de variaciones de asociación entre clases en el que un instructor le enseña al aprendiz, quien luego evalúa al instructor y finalmente, ambos comparten saberes.') 
          figcaption Fuente: SENA (2021).

    p En el ejemplo anterior se presentan tres variaciones de relaciones de asociación entre la clase instructor y la clase aprendiz, en todos los tres casos la navegabilidad varía dependiendo de lo que se está representando en la relación por medio de su nombre. En el primer caso es una relación de asociación llamada Enseña con navegabilidad desde Instructor hacia Aprendiz indicando que 
      strong.cursiva un 
      | instructor enseña a 
      strong.cursiva varios 
      | aprendices.
    p En el segundo caso el segundo ejemplo se lee de la siguiente forma: 
      strong un 
      | aprendiz es evaluado por 
      strong un 
      | instructor. En el último ejemplo de esta gráfica se representa una relación bidireccional, es decir, se hacen dos lecturas desde cada extremo, en este caso 
      strong.cursiva un 
      | instructor comparte con 
      strong.cursiva muchos 
      | aprendices y 
      strong.cursiva un 
      | aprendiz comparte con 
      strong un 
      | instructor.


    Separador


    // 2.3
    #t_2_3.titulo-segundo
      .h2 2.3. Herencia

    .row.mb-2
      .col-lg-7.mb-3
        p La herencia es una de las relaciones más comunes en la práctica del paradigma orientado a objetos y, como se mencionó en el componente formativo anterior, se puede construir relaciones partiendo desde conceptos (clases) generales a conceptos (clases) específicas (especialización) o desde conceptos específicos hacia conceptos generales (generalización) (Schmuller, 2001).
        p Es un tipo especial de asociación donde se tienen clases principales o superclases (las más generales en la relación) y clases secundarias o subclases (las clases más especializadas). Adicionalmente, este tipo de relación tiene implícito el nombre #[i #[b es un]] o #[i #[b es una]] y también, implícitamente, es una relación que vincula a un ejemplar de tipo superclase y un ejemplar de tipo subclase; por lo anterior, no se colocan nombre ni multiplicidad a este tipo de relación.

        p En una relación de herencia las subclases heredan las características (atributos) y los comportamientos (métodos) de las superclases.
      .col-lg-5
        figure
          img(src='@/assets/curso/2-3-imagen.svg', alt='Imagen decorativa') 

    .row.justify-content-center
      .col-lg-9
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Ejemplo de herencia
        figure.mb-5
          img.mb-2(src='@/assets/curso/2-3-figura5.svg', alt='Ejemplo de una relación herencia simple entre siete clases a manera de esquema.') 
          figcaption Fuente: SENA (2021).

    p En la figura anterior, se representa una relación de herencia entre siete (7) diferentes clases. Las clases supertipo están en los niveles superiores de la jerarquía y representan las clases más generales cuyas definiciones serán heredadas por las subclases. En las relaciones de herencia se pueden presentar varios niveles, en cada nivel existirá la correspondiente superclase y subclases. Note que no existe nombre en las relaciones porque implícitamente es una relación de tipo es 
      strong.cursiva un 
      | o es 
      strong.cursiva una 
      | que se lee desde las subclases hacia las superclases y siempre en relaciones de 
      strong uno a uno.
    p En el ejemplo, 
      strong una 
      | Camioneta es 
      strong un 
      | VehículoTerrestre, el cual a la vez es 
      strong un 
      | Vehículo. El VehículoTerrestre hereda todas las características y comportamientos del Vehículo y a su vez la clase Camioneta hereda todas las características y comportamientos de la clase VehículoTerrestre. De manera indirecta la clase Camioneta está heredando las características y comportamientos de la clase Vehículo por estar en la misma línea de herencia. La clase Barco no está heredando las características de la clase VehículoTerrestre ya que no está en la misma línea de herencia.
    p.mb-4 Existen dos tipos de herencia dependiendo de la cantidad de clases supertipo directas asociadas, si una clase hereda características de 
      strong una sola supertipo
      | , es una relación de 
      strong herencia simple
      | ; si una clase hereda características de más de 
      strong una clase supertipo
      | , es una relación de 
      strong herencia múltiple.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span Ejemplo de herencia múltiple
        figure.mb-5
          img.mb-2(src='@/assets/curso/2-3-figura6.svg', alt='Ejemplo de una relación herencia múltiple') 

    p En el ejemplo de herencia múltiple, se puede observar un diagrama de clases donde se presentan varias relaciones de herencia, para el caso de la clase
      strong VehiculoAnfibio 
      | se presenta un caso de herencia múltiple ya que esta clase está heredando características de dos clases supertipo directas diferentes:
      strong VehículoTerrestre 
      | y 
      strong VehículoAcuatico.
    p.mb-5 Solo algunos lenguajes de programación admiten la implementación de la herencia múltiple, entre los más conocidos encontramos: Python, Perl y C++. Sin embargo, otros lenguajes orientados a objetos implementan características similares a la herencia múltiple por medio de interfaces.

    h3 Visibilidad en las relaciones de herencia

    .row.mb-2
      .col-lg-7.mb-3
        p Para determinar la visibilidad tanto de los atributos como de los métodos de una clase, se usan los identificadores de acceso: #[i private, public] y #[i protected]. En el caso de las relaciones de herencia se debe ser cuidadoso ya que se puede producir resultados no deseados si no se tiene en cuenta las siguientes reglas:
        ul.lista.lista-ul--color.p-1.mt-2.fa-ul
          li 
            i.fas.fa-square
            p.mb-0 Un atributo o método privado en una supertipo es inaccesible en la subclase.
          li 
            i.fas.fa-square
            p.mb-0 Un atributo o método público sigue siendo público en las subclases.
          li 
            i.fas.fa-square
            p.mb-0 Un atributo o método protegido sigue siendo protegido en las subclases si hay más niveles de herencia o funciona como privado en otro caso.
      .col-lg-5
        figure
          img(src='@/assets/curso/2-3-imagen2.svg', alt='Imagen decorativa') 


    Separador


    // 2.4
    #t_2_4.titulo-segundo
      .h2 2.4. Agregación
    
    p La agregación es un tipo de relación especial, donde se representa que un conjunto de clases conforma un todo, es decir, existen clases agregadas que representan el todo y se constituyen a partir de un conjunto de clases componentes (Schmuller, 2001).
    p.mb-4 Este tipo de relación se representa con una línea que une la clase agregada junto a sus clases componentes; ahora, del lado de la clase agregada se tiene un rombo que representa la relación de agregación. Esta relación no tiene nombre explícito, ya que se entiende que hay clases agregadas y clases componentes que la forman. Es necesario establecer la multiplicidad del lado de los componentes.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span Ejemplo de relación de agregación
        figure.mb-5
          img.mb-0(src='@/assets/curso/2-4-figura7.svg', alt='Ejemplo de una relación de la agregación en la que se muestran los componentes de un computador') 
          figcaption Fuente: SENA (2021).

    p En la representación anterior, se muestra un ejemplo de relación de agregación; como se puede observar la clase Computador de escritorio se compone de un monitor, una torre, un teclado, un ratón y dos parlantes. A su vez la clase Torre se compone de varios discos duros, varias memorias, un procesador y una tarjeta de video.  Los elementos que son componentes en este diagrama pueden ser componentes de otras clases, además una instancia de los componentes puede ser reemplazado por otra fácilmente, razón por la cual la relación que tienen con la clase agregada no es tan fuerte y por eso es una agregación.


    Separador


    // 2.5
    #t_2_5.titulo-segundo
      .h2 2.5. Composición    

    p.mb-4 Es un tipo especial de relación de agregación en el que las clases componentes no pueden formar parte de otra relación de agregación, es decir, son exclusivos de la composición establecida. Para diferenciar una relación de composición de una relación de agregación el rombo se pinta completamente de negro en su interior. (Schmuller, 2001)

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span Ejemplo de relación de composición
        figure.mb-5
          img.mb-0(src='@/assets/curso/2-5-figura8.svg', alt='Ejemplo de una relación de composición') 
          figcaption Fuente: SENA (2021).
    
    p En la figura anterior, se observa un ejemplo de composición. En este caso lo que se representa es una relación mucho más fuerte que la agregación ya que los elementos que componen la clase agregada no pueden formar parte de otra clase. 
</template>

<script>
export default {
  name: 'Tema2',
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
