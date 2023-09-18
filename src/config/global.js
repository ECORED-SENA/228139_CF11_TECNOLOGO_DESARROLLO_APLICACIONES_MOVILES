export default {
  global: {
    componenteFormativo:
      'Diseño del modelo conceptual bajo el paradigma orientado a objetos ',
    descripcionCurso:
      'En este componente formativo podrá abordar saberes relacionados con el Lenguaje de Modelado Unificado, diagramas de clase y el uso de herramientas Case que le servirán para crear modelos fundamentales para visualizar, especificar y construir <i>software</i>. Así mismo, se desarrollarán temáticas relacionadas a la implementación en el lenguaje de programación Java, de clases, objetos, atributos, constructores, métodos, herencia y relaciones.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción a UML',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diagrama de clase',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Control de acceso',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Asociaciones',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Herencia',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Agregación',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Composición',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Herramientas CASE',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Características del lenguaje de programación orientada a objetos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Implementación de clases y objetos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Atributos y métodos de la clase',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Constructores y destructores',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Métodos de acceso y modificadores',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Sobrecarga de métodos (<i>overload</i>)',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Comunicación entre clases',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Implementación de asociaciones',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Implementación de composición/agregación',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Implementación de herencia',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF11_228139_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Introducción a UML',
      referencia:
        'Lucid Software Español. (2019). <i>Tutorial - Diagrama de Clases UML.</i> [Archivo de video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Z0yLerU0g-Q',
    },
    {
      tema: '1. Introducción a UML',
      referencia:
        'Todo Calls. (2017). <i>Curso UML Diagramas de Clases</i>. [Archivo de video]. Youtube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7WRYH2ei5Rw&t=106s',
    },
    {
      tema: '2. Diagrama de Clase',
      referencia:
        'SENA. (2021). <i>Diagrama de clases  - Ejercicios resueltos</i>. ',
      tipo: 'Documento',
      descarga: '/downloads/ANEXO_DIAGRAMA_CLASES_EJERCICIOS.pdf',
    },
    {
      tema: '2. Diagrama de Clase',
      referencia:
        'Robles, S. (2016). <i>HERRAMIENTAS Y ENTORNOS DE PROGRAMACIÓN</i>. [Pdf]. UCLM.',
      tipo: 'Página web',
      link:
        'https://silo.tips/download/herramientas-y-entornos-de-programacion',
    },
    {
      tema: '3. Herramientas CASE',
      referencia: 'Herramienta CASE. (s.f.) EcuRED.',
      tipo: 'Blog',
      link:
        'https://www.ecured.cu/Herramienta_CASE#Ejemplos_de_Herramientas_Case_m.C3.A1s_utilizadas.',
    },
    {
      tema: '3. Herramientas CASE',
      referencia: 'StarUML. (s.f.). <i>StarUML</i>.',
      tipo: 'Página web',
      link: 'https://staruml.io/',
    },
    {
      tema:
        '4. Características del lenguaje de programación orientada a objetos',
      referencia:
        'Universidad Autónoma del Estado de Hidalgo. (2014). <i>1.1 Lenguajes de Programación Orientados a Objetos</i>.',
      tipo: 'Página web',
      link:
        'http://200.57.56.254/lcc/mapa/PROYECTO/libro15/11_lenguajes_de_programacin_orientados_a_objetos.html',
    },
    {
      tema: '5. Implementación de clases y objetos',
      referencia: 'ARIMETRICS. (2020).<i> Qué es Entorno de desarrollo</i>.',
      tipo: 'Página web',
      link: 'https://www.arimetrics.com/glosario-digital/entorno-de-desarrollo',
    },
    {
      tema: '5. Implementación de clases y objetos',
      referencia:
        'Codigofacilito. (2012). </i>Clases, Objetos y Métodos en Java<i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AEXLtATMkZM',
    },
    {
      tema: '6. Comunicación entre clases',
      referencia:
        'Oracle Java Technologies | Oracle. (2021). Java Is the Language of Possibilities',
      tipo: 'Página web',
      link: 'https://www.oracle.com/java/technologies/',
    },
    {
      tema: '6. Comunicación entre clases',
      referencia:
        'Systemoff. (2020). <i>Cómo implementar relaciones de asociación de los diagramas de clases en Java</i>. [Archivo de video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BGStNPa0qRk',
    },
  ],
  glosario: [
    {
      termino: 'camelCase',
      significado:
        'es una convención de Java que consiste en escribir palabras o frases compuestas de modo que cada palabra o abreviatura comienza con una letra mayúscula o una primera palabra con una letra mayúscula y el resto con minúscula.',
    },
    {
      termino: 'CASE',
      significado: 'ingeniería de <i>software</i> asistida por computación.',
    },
    {
      termino: 'Herramienta CASE',
      significado:
        'una herramienta <i>software</i> que automatiza una parte de las fases del ciclo del desarrollo de sw.',
    },
    {
      termino: 'IDE',
      significado:
        'entorno de desarrollo integrado que se utiliza para el desarrollo de un código fuente o programa.',
    },
    {
      termino: 'JVM',
      significado: 'máquina virtual de Java.',
    },
    {
      termino: 'Tecnología CASE',
      significado:
        'conjunto de instrumentos y técnicas <i>software</i> para automatizar una disciplina de la ingeniería, incluyendo metodologías estructuradas y herramientas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Andaluza, U. & Garcilaso, I. (2012). <i>Programación en Java Francisco Javier Cruz Vílchez</i>.',
    },
    {
      referencia:
        'Cuevas Agustín, G. (1991). <i>Ingeniería del Software. Práctica de la programación</i>. Editorial RA-MA.',
    },
    {
      referencia:
        'Deitel, H. M. & Deitel, P. J. (2004). <i>Como programar en C/C++ y Java</i>. (4ta Ed.)',
    },
    {
      referencia:
        'Flores Cueto, J. J., & Bertolotti Zuñiga, C. (2013). Diagrama de clases en uml. 6.',
    },
    {
      referencia:
        'Holt, R. (2009). <i>Introduction to UML: Unified Modeling Language</i>. U Waterloo',
      link:
        'https://cupdf.com/document/introduction-to-uml-unified-modeling-language-ric-holt-u-waterloo-march-2009.html',
    },
    {
      referencia:
        'Pressman, R. (1998). <i>Ingeniería del Software. Un enfoque práctico</i>. (4ta ed.). Editorial Mc. Grraw-Hill',
    },
    {
      referencia:
        'Rumbaugh, J., Jacobson, I., & Booch, G. (2004). <i>El Lenguaje Unificado de Modelado</i>. Elements, 30.',
      link: 'http://portal.acm.org/citation.cfm?id=993859&dl=',
    },
    {
      referencia:
        'Schmuller, J. (2001). <i>Aprendiendo UML en 24 horas</i>. Pearson Educación.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto temático',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Zulema León Escobar',
          cargo: 'Experto temático',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de diseño y metrología - Regional distrito capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor metodológico y pedagógico',
          centro: 'Centro de Diseño y Metrología - Regional Cauca',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Experto temático',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Jhana Johanna Bustillo Ardila',
          cargo: 'Revisión de estilo',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Carlos Tapias Rueda',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy Maria Ruiz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodriguez Rodriguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ludwyng Corzo García',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollo front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA- <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
