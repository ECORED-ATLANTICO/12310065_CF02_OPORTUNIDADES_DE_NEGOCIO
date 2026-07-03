export default {
  global: {
    Name: 'Análisis y evaluación de negocio',
    Description:
      'El componente formativo aborda el estudio del mercado, el entorno y las variables que influyen en la generación y validación de ideas de negocio. Analiza elementos como el comportamiento del mercado, la segmentación, el entorno económico y las dinámicas de oferta y demanda, con el propósito de identificar oportunidades y evaluar la viabilidad de propuestas comerciales orientadas a la toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
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
        titulo: 'Unidad administrativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Estructura',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estructura organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procesos y procedimientos administrativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clasificación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Aplicabilidad',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Idea de negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Características',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Formulación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Innovación y emprendimiento',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Viabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Clasificación',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Aplicabilidad',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Información para la toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Estructura',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Ejemplo',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Paquetes ofimáticos y herramientas TIC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Clasificación',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Aplicabilidad',
            hash: 't_7_3',
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Actividad',
      significado:
        'Conjunto de acciones que se desarrollan para cumplir un objetivo dentro de un proceso empresarial.',
    },
    {
      termino: 'Administración',
      significado:
        'Proceso de planear, organizar, dirigir y controlar los recursos de una organización.',
    },
    {
      termino: 'Aplicabilidad',
      significado:
        'Capacidad de un concepto o herramienta para ser utilizado en un contexto real.',
    },
    {
      termino: 'Estructura organizacional',
      significado:
        'Forma en que se distribuyen funciones, responsabilidades y niveles jerárquicos dentro de una empresa.',
    },
    {
      termino: 'Idea de negocio',
      significado:
        'Propuesta que busca satisfacer una necesidad del mercado mediante un producto o servicio.',
    },
    {
      termino: 'Innovación',
      significado:
        'Introducción de mejoras o nuevas ideas en productos, servicios o procesos.',
    },
    {
      termino: 'Organización',
      significado:
        'Sistema estructurado de personas y recursos orientados al cumplimiento de objetivos.',
    },
    {
      termino: 'Plan de negocio',
      significado:
        'Documento que describe los aspectos fundamentales de una idea empresarial y su viabilidad.',
    },
    {
      termino: 'Procedimiento',
      significado:
        'Conjunto de pasos definidos para realizar una actividad de manera ordenada.',
    },
    {
      termino: 'Proceso',
      significado:
        'Secuencia de actividades relacionadas que generan un resultado específico.',
    },
    {
      termino: 'Producto',
      significado:
        'Bien o servicio que se ofrece en el mercado para satisfacer una necesidad.',
    },
    {
      termino: 'Recursos',
      significado:
        'Elementos humanos, financieros, tecnológicos y materiales utilizados en una organización.',
    },
    {
      termino: 'Servicio',
      significado:
        'Actividad intangible que satisface necesidades del cliente.',
    },
    {
      termino: 'TIC',
      significado:
        'Tecnologías de la información y la comunicación utilizadas para gestionar y procesar información.',
    },
    {
      termino: 'Unidad administrativa',
      significado:
        'Área o dependencia encargada de cumplir funciones específicas dentro de una organización.',
    },
    {
      termino: 'Viabilidad',
      significado:
        'Posibilidad de que una idea de negocio sea factible desde el punto de vista técnico, económico y operativo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaraz Rodríguez, R. (2011). <em>El emprendedor de éxito</em>.',
      link:
        'https://apiperiodico.jalisco.gob.mx/api/sites/periodicooficial.jalisco.gob.mx/files/el_emprendedor_de_exito-_rafael_alcaraz_rodriguez.pdf',
    },
    {
      referencia:
        'Baca Urbina, G. (2010). <em>Evaluación de proyectos</em>. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Hisrich, R., Peters, M., & Shepherd, D. (2011). <em>Emprendimiento</em> (9.ª ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia: 'JICA. (s. f.). <em>Manual de emprendedorismo</em>.',
      link:
        'https://www.jica.go.jp/paraguay/espanol/office/others/c8h0vm0000ad5gke-att/info_11_01.pdf',
    },
    {
      referencia:
        'Osterwalder, A., & Pigneur, Y. (2010). <em>Generación de modelos de negocio</em>.',
      link:
        'https://www.camarabaq.org.co/wp-content/uploads/2020/11/Generacion-de-Modelos-de-Negocio-2010.en_.es_.pdf',
    },
    {
      referencia:
        'Robbins, S. P., & Coulter, M. (2014). <em>Administración</em> (12.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Universidad del Valle de Atemajac. (s. f.). <em>Emprendimiento e innovación</em>.',
      link: 'https://biblioteca.univa.mx/Investigacion/Libros/113815.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del Ecosistema de Recursos Educativos Digitales',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesus Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
        {
          nombre: 'Fabio Fonseca Arguelles ',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya  ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
        {
          nombre: 'Nelson Iván Vera Briceño ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
        {
          nombre: 'Jonathan Adié Villafañe ',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz ',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
