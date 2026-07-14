<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Viabilidad

    .fullwidth-bg.fullwidth-bg--1
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La viabilidad permite determinar si una idea de negocio puede ejecutarse de manera realista y sostenible. Su análisis integra factores técnicos, económicos y de mercado. Es un paso fundamental para la toma de decisiones empresariales.

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Concepto

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-6
        p La viabilidad es el proceso de análisis que permite evaluar si una idea de negocio puede desarrollarse de manera efectiva, considerando los recursos disponibles, las condiciones del entorno y las posibilidades de éxito en el mercado. Desde una perspectiva empresarial, la viabilidad implica estudiar diferentes dimensiones como la financiera, técnica, comercial y operativa, con el fin de reducir la incertidumbre y apoyar la toma de decisiones estratégicas. Este análisis permite identificar riesgos, oportunidades y limitaciones antes de la implementación del negocio.
      .col-sm-12.col-lg-6
        figure
          img(data-aos="fade-down", src="@/assets/curso/tema5/2.png", alt="")

    .row.align-items-center.z-2.bg-img.rounded-4.p-4.mb-4
      .d-none.d-lg-block.col-lg-1
        figure
          img(data-aos="fade-down", src="@/assets/curso/tema1/9.svg", alt="")
      .col-lg-11.col-xl-10
        p.mb-0 En el contexto actual, caracterizado por alta competitividad y cambios constantes en el mercado, la evaluación de la viabilidad se convierte en un elemento clave para asegurar la sostenibilidad y el crecimiento de las organizaciones.

    .cajon.color-acento-botones.p-4
      p.mb-0 Empresas como Airbnb evaluaron la viabilidad de su modelo analizando la demanda de alojamiento alternativo, la tecnología disponible y el comportamiento del consumidor.

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Clasificación

    img(data-aos="fade-up")(src="@/assets/curso/tema5/3.png", alt="").z-2
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 La viabilidad se clasifica según los diferentes aspectos que deben analizarse para determinar la factibilidad de una idea de negocio.

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 3.
          span Tipos de viabilidad
        .tabla-a.color-terciario.tabla-a--text-left
          table
            caption Nota. SENA, (2026). 
            thead
              tr(style="background-color: #FAD5ED")
                th Tipo de viabilidad
                th Descripción
                th Enfoque
                th Ejemplo
            tbody
              tr
                td Comercial
                td Analiza la aceptación del producto en el mercado
                td Demanda clientes
                td Estudio de mercado
              tr
                td Técnica
                td Evalúa la capacidad de producir o ejecutar la idea
                td Recursos y tecnología
                td Infraestructura productiva
              tr
                td Financiera
                td Determina la rentabilidad y costos
                td Inversión y retorno
                td Flujo de caja
              tr
                td Operativa
                td Analiza la capacidad de funcionamiento diario
                td Procesos y logística
                td Distribución
              tr
                td Legal
                td Verifica cumplimiento normativo
                td Regulación
                td Licencias y permisos

    .row.align-items-center.z-2.bg-img.rounded-4.p-4
      .d-none.d-lg-block.col-lg-1
        figure
          img(data-aos="fade-down", src="@/assets/curso/tema1/9.svg", alt="")
      .col-lg-11.col-xl-10
        p.mb-0 Rappi evaluó la viabilidad comercial (demanda de domicilios), técnica (plataforma digital) y operativa (logística de entregas) antes de su expansión. La clasificación de la viabilidad permite evaluar integralmente una idea de negocio, evitando decisiones basadas únicamente en percepciones.

    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Aplicabilidad

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema5/4.png", alt="")
      .col-lg-8
        p La aplicabilidad de la viabilidad se evidencia en la toma de decisiones empresariales, ya que permite determinar si una idea debe desarrollarse, ajustarse o descartarse. En la práctica, las organizaciones utilizan estudios de viabilidad para minimizar riesgos, optimizar recursos y asegurar que el negocio tenga posibilidades reales de éxito. Este proceso se apoya en herramientas tecnológicas como hojas de cálculo, sistemas ERP y plataformas de análisis financiero que facilitan la evaluación de escenarios.
        p.mb-0 Además, la viabilidad es clave en la formulación de planes de negocio, ya que proporciona información objetiva sobre el mercado, los costos, la competencia y las condiciones del entorno.

    .cajon.color-acento-botones.p-4.mb-4
      p.mb-0 En Tesla, la viabilidad de vehículos eléctricos se analizó considerando factores técnicos (baterías), financieros (inversión) y comerciales (tendencia hacia energías limpias). Se evidencia cómo la empresa comunica los pilares de su viabilidad estratégica.

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/5.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Viabilidad técnica
            p.mb-0 La exhibición de modelos con diferentes arquitecturas (SUV y Sedán) demuestra una madurez en la ingeniería de plataformas eléctricas y almacenamiento de energía.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/6.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Viabilidad comercial
            p.mb-0 El diseño web enfocado en botones de acción directa (“ordenar” y “más información”) refleja un modelo de ventas optimizado que capitaliza la tendencia de consumo sostenible.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/7.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Viabilidad financiera
            p.mb-0 La jerarquización de modelos permite a la marca cubrir desde el mercado masivo (Model 3) hasta el sector de lujo (Model S), asegurando diferentes flujos de ingresos.

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-xl-10
        .p-3.py-1.bg-primario-p10.rounded-4
          .row.align-items-center.justify-content-center
            .col-6.col-sm-4.col-lg-2
              figure
                img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema2/7.png", alt="")
            .col-lg-7
              h5.my-3 Cómo evaluar la viabilidad de una idea de negocio utilizando la “matriz estrella”
              p.mb-2 Consulte el siguiente video que explica cómo evaluar la viabilidad de una idea de negocio utilizando la “matriz estrella”, analizando cinco dimensiones clave para reducir el riesgo de fracaso antes de invertir tiempo y dinero:
            .col-sm-4.col-lg-3
              a.boton.me-3.mb-4.text-center(href="https://www.youtube.com/watch?v=GbK-NGyTz9A" target="_blank")
                span.texto-oscuro Video
                i.fas.fa-video.ms-2.texto-oscuro



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

<style lang="sass"></style>
