<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Procesos y procedimientos administrativos 

    .fullwidth-bg.fullwidth-bg--1
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los procesos y procedimientos administrativos permiten organizar y estandarizar las actividades dentro de la empresa, estos facilitan la ejecución eficiente de tareas y el cumplimiento de objetivos organizacionales. Su adecuada gestión contribuye al control interno y a la mejora continua.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-9
        .row.justify-content-center.align-items-center.mb-2
          .col-sm-10.col-lg-5
            figure
              img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema3/2.png", alt="")
          .col-lg-7
            .p-3.bg-acento-a10
              p.mb-0 Los procesos administrativos son el conjunto de actividades interrelacionadas que se ejecutan de manera secuencial para alcanzar un objetivo organizacional. Incluyen funciones como la planeación, organización, dirección y control, las cuales permiten coordinar los recursos de la empresa de manera eficiente.
        .p-4.bg-primario-p10.mb-4.mb-lg-0
          p.mb-0 Por su parte, los procedimientos administrativos son la forma específica en que se desarrollan dichas actividades, estableciendo pasos, normas y responsables para garantizar uniformidad en la ejecución. Mientras el proceso define el “qué” y el “para qué”, el procedimiento define el “cómo” se realiza cada actividad.
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema3/3.png", alt="")

    .cajon.color-acento-botones.p-4.mb-4
      p.mb-0 En el contexto empresarial, la gestión adecuada de procesos y procedimientos permite mejorar la productividad, reducir errores y optimizar el uso de recursos, especialmente cuando se integran herramientas tecnológicas como software de gestión empresarial. La diferenciación entre proceso y procedimiento permite estructurar la gestión empresarial, garantizando eficiencia, control y estandarización.

    .row.align-items-center.z-2.bg-img.rounded-4.p-4.mb-4
      .d-none.d-lg-block.col-lg-1
        figure
          img(data-aos="fade-down", src="@/assets/curso/tema1/9.svg", alt="")
      .col-lg-11.col-xl-10
        p.mb-0 En Bancolombia, los procesos administrativos regulan actividades como la atención al cliente, mientras que los procedimientos establecen los pasos específicos para la apertura de cuentas o solicitudes de crédito.

    .row.justify-content-center.z-2
      .col-xl-10
        .p-4.py-1.bg-primario-p10.rounded-4
          .row.align-items-center.justify-content-center
            .col-6.col-sm-4.col-lg-2
              figure
                img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema2/7.png", alt="")
            .col-lg-7
              h5.my-4 Diferencias entre Proceso y Procedimiento
              p.mb-4 Se invita al aprendiz a ver el video con el propósito de identificar diferencias clave entre los términos fundamentales proceso y procedimiento y cómo se aplican en la operación y organización de una empresa. 
            .col-sm-4.col-lg-3
              a.boton.me-3.mb-4.text-center(href="https://www.youtube.com/watch?v=ygKbmeD6sdg" target="_blank" type="application/pdf")
                span.texto-oscuro Ver video
                i.fas.fa-video.ms-2.texto-oscuro

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Clasificación

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema3/4.png", alt="")
      .col-lg-8
        p.mb-0 Los procesos administrativos pueden clasificarse según su función dentro de la organización, lo que facilita su gestión, control y optimización.

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 2.
          span Clasificación de procesos administrativos
        .tabla-a.color-terciario.tabla-a--text-left
          table
            caption Nota. SENA, (2026). 
            thead
              tr(style="background-color: #FAD5ED")
                th Tipo de proceso
                th Descripción
                th Enfoque
                th Ejemplo
            tbody
              tr
                td Estratégicos
                td Definen la dirección y planificación
                td Largo plazo
                td Planeación estratégica
              tr
                td Misionales
                td Generan valor directo al cliente
                td Operación principal
                td Producción o ventas
              tr
                td De apoyo 
                td Respaldan los procesos principales. 
                td Soporte interno 
                td Recursos humanos 
              tr
                td De control 
                td Evalúan desempeño y cumplimiento. 
                td Supervisión 
                td Auditorías internas 
              tr
                td De mejora 
                td Buscan optimización continua. 
                td Innovación 
                td Rediseño de procesos 

    .row.justify-content-center.align-items-center.z-2
      .col-lg-8
        p En organizaciones modernas, esta clasificación permite identificar cuáles procesos generan valor y cuáles apoyan su funcionamiento, facilitando la toma de decisiones. Empresas como Amazon integran procesos misionales (logística y distribución) con procesos de apoyo (tecnología y análisis de datos) para optimizar su operación.
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 La clasificación de procesos permite priorizar actividades clave y mejorar la eficiencia organizacional mediante una gestión estructurada.
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema3/5.png", alt="")

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Aplicabilidad

    img(data-aos="fade-up")(src="@/assets/curso/tema3/6.png", alt="").z-2
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 La aplicación de procesos y procedimientos administrativos es fundamental para garantizar la eficiencia, la calidad y la consistencia en las operaciones empresariales. Su implementación permite estandarizar actividades, reducir la incertidumbre y mejorar la toma de decisiones.

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema3/7.png", alt="")
      .col-lg-8
        p En el contexto empresarial actual, las organizaciones utilizan herramientas tecnológicas como sistemas ERP y plataformas de business intelligence para gestionar y monitorear sus procesos en tiempo real, lo que permite identificar oportunidades de mejora y optimizar el desempeño.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Además, la aplicación de procedimientos claros facilita la capacitación del personal, asegura el cumplimiento de normas y mejora la experiencia del cliente. En McDonald’s, cada proceso operativo (preparación de alimentos, atención al cliente) está respaldado por procedimientos estandarizados que garantizan calidad y eficiencia en cualquier punto de venta.

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.z-2.mb-5
      .col-xl-10
        figure
          img(src="@/assets/curso/tema3/8.png", alt="", data-aos="fade-down-left")

    .row.align-items-center.z-2.bg-img.rounded-4.p-4.mb-4
      .d-none.d-lg-block.col-lg-1
        figure
          img(data-aos="fade-down", src="@/assets/curso/tema1/9.svg", alt="")
      .col-lg-11.col-xl-10
        p.mb-0 Esta captura de pantalla del sitio web oficial de McDonald’s que muestra la ficha técnica de la Hamburguesa Clásica. A la izquierda, una imagen en alta resolución del producto ensamblado; a la derecha, el bloque de información que detalla el contenido calórico (250 Cal.) y el procedimiento de preparación, especificando el uso de carne 100 % de res condimentada con sal y pimienta, pepinillos, cebolla picada, ketchup y mostaza.

    //- .row.justify-content-center.align-items-center.z-2
    //-   .col-lg-8
    //-     p.mb-0 La aplicabilidad de los procesos y procedimientos administrativos se evidencia en la estandarización de operaciones, la mejora continua y la satisfacción del cliente. Empresas líderes como McDonald’s implementan rigurosos procedimientos para garantizar consistencia en la calidad de sus productos y servicios a nivel global.
    //-     .cajon.color-acento-botones.p-4.mb-4
    //-       p.mb-0 La implementación efectiva de procesos y procedimientos administrativos contribuye al éxito organizacional, promoviendo eficiencia, control y competitividad en el mercado.


    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-5.border-lg-end.border-secondary.mb-4
        figure
          img.mb-0.w-85(data-aos="fade-down", src="@/assets/curso/tema3/9.png", alt="")
        p.mb-0 #[strong Estandarización]: reducción de errores y variabilidad en las actividades. 
      .col-lg-5.mb-4
        figure
          img.mb-0.w-85(data-aos="fade-down", src="@/assets/curso/tema3/10.png", alt="")
        p.mb-0 #[strong Eficiencia]: optimización en el uso de recursos y tiempos. 
      .col-lg-5.border-lg-end.border-secondary.mb-4.mb-lg-0
        figure
          img.mb-0.w-85(data-aos="fade-down", src="@/assets/curso/tema3/11.png", alt="")
        p.mb-0 #[strong Control]: seguimiento y supervisión de las actividades organizacionales. 

      .col-lg-5
        figure
          img.mb-0.w-85(data-aos="fade-down", src="@/assets/curso/tema3/12.png", alt="")
        p.mb-0 #[strong Calidad]: mejora en los productos y servicios ofrecidos.

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-xl-10
        .p-3.py-1.bg-primario-p10.rounded-4
          .row.align-items-center.justify-content-center
            .col-6.col-sm-4.col-lg-2
              figure
                img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema2/3.png", alt="")
            .col-lg-7
              h5.my-4 ¿Qué es un diagrama de flujo?
              p.mb-4 Se invita al aprendiz a profundizar en el uso de los diagramas de flujo como herramienta clave en la gestión de procesos administrativos, a través del siguiente recurso:
            .col-sm-4.col-lg-3
              a.boton.me-3.mb-4.text-center(href="https://www.webyempresas.com/diagrama-de-flujo-de-las-4-etapas-del-proceso-administrativo/?utm_source=chatgpt.com#%C2%BFQue_es_un_diagrama_de_flujo" target="_blank")
                span.texto-oscuro Abrir enlace
                i.fas.fa-link.ms-2.texto-oscuro









</template>

<script>
export default {
  name: 'Tema3',
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
