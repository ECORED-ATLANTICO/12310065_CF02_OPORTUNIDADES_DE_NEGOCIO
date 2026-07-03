<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Información para la toma de decisiones

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema6/1.png", alt="")
      .col-lg-7
        p El plan de negocio es una herramienta fundamental para estructurar y organizar una idea empresarial, este permite analizar la viabilidad, definir estrategias y proyectar el desarrollo del negocio. Su elaboración facilita la toma de decisiones y la gestión empresarial.

    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Concepto
      
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El plan de negocio es un documento estructurado que describe de manera integral una idea empresarial, incluyendo sus objetivos, estrategias, recursos, mercado objetivo y proyecciones financieras. Su propósito es servir como guía para la implementación y desarrollo del negocio.

    .row.justify-content-center.align-items-center.z-2
      .col-lg-8
        p Desde una perspectiva técnica, el plan de negocio permite evaluar la viabilidad del proyecto, identificar riesgos y oportunidades, y establecer un modelo de operación sostenible. Además, es una herramienta clave para la búsqueda de inversión, ya que proporciona información clara y organizada sobre el proyecto.
        p.mb-4.mb-lg-0 En el entorno empresarial actual, el plan de negocio no solo se utiliza en la creación de empresas, sino también en la expansión de negocios existentes, permitiendo planificar nuevas estrategias y adaptarse a cambios del mercado.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down", src="@/assets/curso/tema6/3.png", alt="")

    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Estructura

    img(data-aos="fade-up")(src="@/assets/curso/tema6/4.png", alt="").z-2
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 El plan de negocio se compone de diferentes elementos que permiten analizar la empresa desde múltiples perspectivas, garantizando una visión integral del proyecto, entre ellos se encuentran:

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4.
          span Estructura básica del plan de negocios
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema6/5-mob.png", alt="")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema6/5.png", alt="")
        figcaption Nota. Adaptada de Malhotra, (2008).

    .row.justify-content-center.z-2
      .col-xl-10
        .p-3.py-1.bg-primario-p10.rounded-4
          .row.align-items-center.justify-content-center
            .col-6.col-sm-4.col-lg-2
              figure
                img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema2/7.png", alt="")
            .col-lg-7
              h5.my-3 Cómo evaluar la viabilidad de una idea de negocio utilizando la “matriz estrella”
              p.mb-3 Ir al siguiente video que explica cómo evaluar la viabilidad de una idea de negocio utilizando la “matriz estrella”, analizando cinco dimensiones clave para reducir el riesgo de fracaso antes de invertir tiempo y dinero:
            .col-sm-4.col-lg-3
              a.boton.me-3.mb-4.text-center(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                span.texto-oscuro Ver video
                i.fas.fa-video.ms-2.texto-oscuro

    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Ejemplo

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-sm-12.col-lg-6
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema6/6.png", alt="")
      .col-lg-6
        p Este documento presenta un plan de negocio para Artecol SAS, una tienda de artesanías ubicada en el sector de La Candelaria, en Bogotá. La propuesta busca comercializar productos artesanales elaborados por comunidades colombianas, combinando un punto de venta físico con un canal digital de comercio electrónico. El proyecto está orientado principalmente a turistas nacionales e internacionales, así como a consumidores interesados en la cultura y las tradiciones del país. Su propuesta de valor se centra en la autenticidad de los productos, el fortalecimiento de la identidad cultural y la promoción del comercio justo.

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-xl-10
        .p-3.py-1.bg-primario-p10.rounded-4
          .row.align-items-center.justify-content-center
            .col-6.col-sm-4.col-lg-2
              figure
                img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema6/7.png", alt="")
            .col-lg-7
              h5.my-4 Artecol SAS tienda de artesanías en el centro histórico de Bogotá
              p.mb-4 Utiliza la siguiente empresa como ejemplo para desarrollar un análisis DOFA e identificar los factores internos y externos que afectan su desempeño.
            .col-sm-4.col-lg-3
              a.boton.me-3.mb-4.text-center(:href="obtenerLink('/downloads/plan-de-negocio-Artecol-SAS.pdf')" target="_blank" type="application/pdf")
                span.texto-oscuro Descargar PDF
                i.fas.fa-file.ms-2.texto-oscuro



</template>

<script>
export default {
  name: 'Tema6',
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
