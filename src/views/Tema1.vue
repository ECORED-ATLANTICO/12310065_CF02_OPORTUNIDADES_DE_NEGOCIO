<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Unidad administrativa
    .fullwidth-bg.fullwidth-bg--1
    img(data-aos="fade-up")(src="@/assets/curso/tema1/1.png", alt="").z-2
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 La unidad administrativa constituye la base funcional de la organización empresarial. Permite estructurar las actividades y definir responsabilidades dentro de la empresa. Su adecuada gestión impacta directamente la eficiencia y el cumplimiento de objetivos.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema1/2.png", alt="")
      .col-lg-8
        p La unidad administrativa se define como la estructura funcional básica dentro de una organización encargada de ejecutar actividades específicas alineadas con los objetivos estratégicos empresariales. Estas unidades operan bajo principios de especialización, coordinación y control, permitiendo la asignación eficiente de recursos y la ejecución de procesos organizacionales.
        p.mb-0 Desde una perspectiva sistémica, la unidad administrativa no actúa de manera aislada, sino que forma parte de un sistema organizacional interdependiente, donde cada área contribuye al logro de metas corporativas. Su correcta definición impacta directamente en la eficiencia operativa, la toma de decisiones y la capacidad de respuesta frente al entorno competitivo.

    .cajon.color-acento-botones.p-4.mb-4
      p.mb-0 En el contexto empresarial actual, caracterizado por entornos dinámicos y alta competencia, las unidades administrativas deben ser flexibles, adaptativas y orientadas a resultados, integrando herramientas tecnológicas que faciliten la gestión de la información.

    .row.justify-content-center.align-items-center.z-2
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Unidad administrativa  
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/3-mob.png", alt="")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/3.png", alt="")
        figcaption Nota. Adaptada de Malhotra, (2008).

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Clasificación

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las unidades administrativas pueden clasificarse según su función, nivel jerárquico y naturaleza operativa, lo que permite comprender su rol dentro de la organización y su impacto en la gestión empresarial.

    .bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.justify-content-center.align-items-center
            .col-lg-8.mb-4.mb-md-0
              h4 Estratégica
              p Corresponde al nivel más alto de la organización. Es responsable de definir la visión, misión, objetivos, políticas y estrategias que orientan el desarrollo de la empresa en el largo plazo. Sus decisiones tienen impacto global sobre la organización y buscan garantizar la sostenibilidad, el crecimiento y la competitividad del negocio.
              p #[strong Ejemplo]: gerencia general.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/5.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-8.mb-4.mb-md-0
              h4 Táctica
              p Actúa como enlace entre el nivel estratégico y el operativo. Su función consiste en traducir las estrategias y políticas definidas por la alta dirección en planes, programas y proyectos específicos para cada área funcional de la organización.
              p #[strong Ejemplo]: dirección de mercadeo.

            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/6.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-8.mb-4.mb-md-0
              h4 Operativa
              p Es el nivel encargado de ejecutar directamente las actividades y procesos necesarios para la producción de bienes o la prestación de servicios. Su trabajo se orienta al cumplimiento de tareas específicas que contribuyen al logro de los objetivos organizacionales.
              p #[strong Ejemplo]: área de ventas.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/7.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-8.mb-4.mb-md-0
              h4 De apoyo
              p Son las áreas que brindan soporte especializado a las unidades estratégicas, tácticas y operativas para facilitar el funcionamiento integral de la organización. Aunque no participan directamente en la generación del producto o servicio principal, contribuyen al cumplimiento de los objetivos empresariales mediante la provisión de recursos y servicios internos.
              p #[strong Ejemplo]: recursos humanos, contabilidad.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/8.png', alt='')

    .row.align-items-center.z-2.bg-img.rounded-4.p-4
      .d-none.d-lg-block.col-lg-1
        figure
          img(data-aos="fade-down", src="@/assets/curso/tema1/9.svg", alt="")
      .col-lg-11.col-xl-10
        p.mb-0 En organizaciones modernas, esta clasificación permite optimizar la asignación de funciones y evitar duplicidad de tareas, favoreciendo la eficiencia y el control interno. En Amazon, las unidades estratégicas definen la expansión global, mientras que las operativas gestionan la logística y distribución en tiempo real.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Estructura

    
    

</template>

<script>
export default {
  name: 'Tema1',
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
