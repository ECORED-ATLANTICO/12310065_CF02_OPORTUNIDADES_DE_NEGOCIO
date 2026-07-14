<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/sintesis.png", alt="")
      .col-lg-9
        p El componente formativo Identificación y aplicación de negocio aborda el estudio de la unidad administrativa, incluyendo su concepto, clasificación y estructura; continúa con la estructura organizacional, considerando su definición y tipologías; analiza los procesos y procedimientos administrativos, abarcando su concepto, clasificación y aplicabilidad; y profundiza en la idea de negocio, incluyendo su formulación, características e innovación. Asimismo, desarrolla la viabilidad desde sus diferentes enfoques, el plan de negocio como herramienta de estructuración empresarial y finaliza con el uso de paquetes ofimáticos y herramientas TIC para la gestión y presentación de la información en contextos reales.
    .row.justify-content-center.z-2
      .col-lg-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="La figura muestra la estructura del componente formativo Identificación y aplicación de negocio, organizado en siete ejes temáticos. Incluye aspectos relacionados con la unidad administrativa, la estructura organizacional, los procesos y procedimientos administrativos, la idea de negocio, la viabilidad, el plan de negocio y el uso de paquetes ofimáticos y herramientas TIC. Cada eje desarrolla de manera general conceptos, clasificaciones, estructuras, características, formulación, aplicabilidad, ejemplos e innovación y emprendimiento, evidenciando la relación entre los contenidos para el análisis, la organización y la gestión de iniciativas de negocio.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
