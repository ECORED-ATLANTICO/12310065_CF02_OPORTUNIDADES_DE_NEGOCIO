<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Paquetes ofimáticos y herramientas TIC
    .fullwidth-bg.fullwidth-bg--1
    img(data-aos="fade-up")(src="@/assets/curso/tema7/1.png", alt="").z-2
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 Las herramientas tecnológicas y ofimáticas son fundamentales para la gestión, organización y procesamiento de la información en las empresas. Su uso permite optimizar procesos, mejorar la productividad y fortalecer la toma de decisiones. En el contexto actual, su integración es clave para la competitividad empresarial.

    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Concepto

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema7/2.png", alt="")
      .col-lg-8
        p Los paquetes ofimáticos y herramientas TIC (Tecnologías de la Información y la Comunicación) son aplicaciones y sistemas tecnológicos diseñados para facilitar la creación, gestión, almacenamiento y análisis de la información en las organizaciones.
        .cajon.color-primario.p-4
          p.mb-0 Los paquetes ofimáticos incluyen programas utilizados en actividades administrativas como la elaboración de documentos, hojas de cálculo y presentaciones. Por su parte, las herramientas TIC abarcan un conjunto más amplio de tecnologías que permiten la comunicación, el procesamiento de datos y la gestión empresarial.

    .row.justify-content-center.align-items-center
      .col-lg-7
        .row.align-items-center.z-2.bg-img.bg-img--1.rounded-4.p-4.mb-2
          .d-none.d-lg-block.col-lg-2
            figure
              img.w-55(data-aos="fade-down", src="@/assets/curso/tema1/9.svg", alt="")
          .col-lg-11.col-xl-10
            p.mb-0 Desde una perspectiva organizacional, estas herramientas permiten automatizar procesos, mejorar la eficiencia operativa y facilitar la toma de decisiones basada en información confiable.
        p Empresas como Microsoft desarrollan soluciones como Excel y Word que permiten gestionar información empresarial de manera estructurada.
      .col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema7/3.png", alt="")

    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Clasificación

    p.mb-4 Las herramientas ofimáticas y TIC pueden clasificarse según su función dentro de la organización, lo que permite identificar su utilidad en diferentes procesos empresariales.

    //- .row.justify-content-center.align-items-center.z-2.mb-4
    //-   .col-sm-8.col-lg-4
    //-     figure
    //-       img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema7/4.png", alt="")
    //-   .col-lg-8
    //-     AcordionA(tipo="a" clase-tarjeta="tarjeta bg-primario-p10")
    //-       div(titulo=" Procesadores de texto")
    //-         p.ms-5 Permiten crear, editar y dar formato a documentos escritos, facilitando la elaboración de informes, cartas y documentos empresariales.
    //-       div(titulo="Hojas de cálculo")
    //-         p.ms-5 Facilitan el análisis, organización y gestión de datos mediante fórmulas, tablas y gráficos, apoyando la toma de decisiones.
    //-       div(titulo="Presentaciones")
    //-         p.ms-5 Permiten comunicar información de manera visual y estructurada, apoyando exposiciones y procesos formativos o empresariales.
    //-       div(titulo="Sistemas de gestión (<em>software</em>)")
    //-         p.ms-5 Integran y automatizan procesos empresariales como ventas, inventarios, finanzas y recursos humanos en una sola plataforma.
    //-       div(titulo="Herramientas de análisis")
    //-         p.ms-5 Permiten interpretar grandes volúmenes de datos mediante indicadores, reportes y paneles de control (dashboards).
    //-       div(titulo="Comunicación digital")
    //-         p.ms-5 Facilitan la interacción y el intercambio de información en tiempo real dentro y fuera de la organización.

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 4.
          span Clasificación de herramientas TIC
        .tabla-a.color-terciario.tabla-a--text-left
          table
            caption Nota. SENA, (2026). 
            thead
              tr(style="background-color: #FAD5ED")
                th Tipo
                th(colspan="2") Descripción
                th Ejemplo
            tbody
              tr
                td Procesadores de texto 
                td(colspan="2") Permiten crear, editar y dar formato a documentos escritos, facilitando la elaboración de informes, cartas y documentos empresariales. 
                td Word 
              tr
                td Hojas de cálculo 
                td(colspan="2") Facilitan el análisis, organización y gestión de datos mediante fórmulas, tablas y gráficos, apoyando la toma de decisiones. 
                td Excel 
              tr
                td Presentaciones
                td(colspan="2") Permiten comunicar información de manera visual y estructurada, apoyando exposiciones y procesos formativos o empresariales.
                td PowerPoint
              tr
                td Sistemas de gestión (software)
                td(colspan="2") Integran y automatizan procesos empresariales como ventas, inventarios, finanzas y recursos humanos en una sola plataforma.
                td ERP
              tr
                td Herramientas de análisis
                td(colspan="2") Permiten interpretar grandes volúmenes de datos mediante indicadores, reportes y paneles de control (dashboards).
                td Business intelligence
              tr
                td Comunicación digital
                td(colspan="2") Facilitan la interacción y el intercambio de información en tiempo real dentro y fuera de la organización.
                td Correo, videollamadas

    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0 Empresas utilizan sistemas ERP para integrar áreas como finanzas, inventarios y ventas, optimizando la gestión organizacional.

    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.3 Aplicabilidad
    
    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema7/5.png", alt="")
      .col-lg-7
        p La aplicabilidad de los paquetes ofimáticos y herramientas TIC se evidencia en su uso diario dentro de las organizaciones para gestionar información, optimizar procesos y apoyar la toma de decisiones.
        p.mb-0 En el contexto empresarial, estas herramientas permiten:

    .row.mb-4.z-2
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema7/6.png' alt='')
          .tarjeta.tarjeta--azul.h-100.rounded-4
            .p-2
              p.mb-0 Automatizar tareas administrativas.
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-down")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema7/6.png' alt='')
          .tarjeta.tarjeta--azul.h-100.rounded-4
            .p-2
              p.mb-0 Analizar datos para la toma de decisiones.
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-down")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema7/6.png' alt='')
          .tarjeta.tarjeta--azul.h-100.rounded-4
            .p-2
              p.mb-0 Mejorar la comunicación interna y externa.
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema7/6.png' alt='')
          .tarjeta.tarjeta--azul.h-100.rounded-4
            .p-2
              p.mb-0 Gestionar información en tiempo real.

    .cajon.color-acento-botones.p-4.z-2.mb-4
      p.mb-0 Además, la integración de herramientas como Excel, sistemas ERP y plataformas de #[em Business intelligence] permite a las empresas transformar datos en información estratégica.

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-7
        .row.align-items-center.z-2.bg-img.bg-img--1.rounded-4.p-4.mb-4
          .d-none.d-lg-block.col-lg-2
            figure
              img.w-55(data-aos="fade-down", src="@/assets/curso/tema1/9.svg", alt="")
          .col-lg-11.col-xl-10
            p.mb-0 En una tienda de artesanías, el uso de hojas de cálculo permite controlar inventarios, mientras que sistemas digitales facilitan el registro de ventas y el análisis del comportamiento del cliente.
        p.mb-0 Entre los beneficios de las herramientas TIC están: 
      .col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema7/7.png", alt="")

    .bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h4 Eficiencia
              p.mb-4.mb-lg-0 Optimizan procesos, automatizan tareas y reducen tiempos de ejecución, permitiendo un mejor aprovechamiento de los recursos y un aumento de la productividad organizacional.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema7/8.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h4 Control
              p.mb-4.mb-lg-0 Facilitan el monitoreo y seguimiento de actividades y recursos, proporcionando información en tiempo real para verificar el cumplimiento de objetivos y procedimientos.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema7/9.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h4 Toma de decisiones
              p.mb-4.mb-lg-0 Suministran información confiable y oportuna que permite analizar alternativas, identificar oportunidades y tomar decisiones más acertadas en la organización.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema7/10.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h4 Comunicación
              p.mb-4.mb-lg-0 Agilizan el intercambio de información entre personas y áreas, favoreciendo la coordinación, el trabajo colaborativo y la interacción efectiva dentro y fuera de la organización.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema7/11.png', alt='')

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-xl-10
        .p-3.py-1.bg-primario-p10.rounded-4
          .row.align-items-center.justify-content-center
            .col-6.col-sm-4.col-lg-2
              figure
                img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema2/7.png", alt="")
            .col-lg-7
              h5.my-3 ¿Cómo beneficia la tecnología a mi negocio?
              p.mb-2 Ir al siguiente video donde se explican el uso de herramientas TIC en la gestión empresarial y su impacto en la productividad. El video permite comprender cómo la tecnología optimiza procesos y mejora la toma de decisiones en las organizaciones:
            .col-sm-4.col-lg-3
              a.boton.me-3.mb-4.text-center(href="https://www.youtube.com/watch?v=u25nYLn3toE" target="_blank")
                span.texto-oscuro Ver video
                i.fas.fa-video.ms-2.texto-oscuro

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-5.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema7/12.png", alt="")
      .col-lg-7.bg-audio.rounded-4
        .row.align-items-center
          .col-sm-4
            figure.pt-3
              img.w-195(src="@/assets/curso/common/mic.png", alt="alt")
          .col-sm-8.col-lg-8
            h5.text-white ¿Sabías qué?
            p.text-white Lo invitamos a escuchar el siguiente pódcast:
            TarjetaAudio.color-white.mb-3(
              texto="“Charlas que venden” tema: “El uso de las TIC y herramientas ofimáticas en la gestión empresarial”"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
