<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido.z-2
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.z-2.mb-4
      .col-xl-9
        .row.justify-content-center.mb-3
          .col-sm-10.col-lg-5
            figure
              img.mb-4.mb-lg-0(src="@/assets/curso/introduccion/1.png" alt="")
          .col-lg-7
            .p-4.bg-acento-a10
              p.mb-0 El componente formativo Identificación y aplicación de negocio se orienta al desarrollo de competencias relacionadas con la estructuración y puesta en marcha de ideas de negocio en contextos reales. En este sentido, se abordan elementos fundamentales como la organización administrativa, la definición de procesos y la formulación de propuestas empresariales con enfoque innovador.
        .p-4.bg-primario-p10
          p.mb-0 A través del desarrollo temático, el aprendiz comprenderá la importancia de diseñar estructuras organizacionales eficientes, establecer procedimientos claros y evaluar la viabilidad de una idea de negocio antes de su implementación. 
      .col-sm-6.col-lg-3.d-none.d-xl-block
        figure
          img(src="@/assets/curso/introduccion/2.png" alt="")

    .cajon.color-acento-botones.p-4.mb-4
      p.mb-0 Asimismo, se estudia la elaboración del plan de negocio como herramienta integral que permite consolidar la información estratégica, operativa y financiera de una propuesta empresarial.

    .row.justify-content-center.z-2.align-items-center
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/introduccion/3.png" alt="")
      .col-lg-8
        p.mb-0 De igual manera, el componente integra el uso de paquetes ofimáticos y herramientas TIC, que facilitan la gestión de la información, la toma de decisiones y la presentación de propuestas de negocio. Todo ello con el propósito de fortalecer la capacidad del aprendiz para aplicar ideas de negocio viables, sostenibles y adaptadas a las condiciones del entorno.

</template>

<script>
export default {
  name: 'Introduccion',
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
