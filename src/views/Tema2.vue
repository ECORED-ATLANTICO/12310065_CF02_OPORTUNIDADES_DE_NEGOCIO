<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estructura organizacional

    .row.justify-content-center.align-items-center.z-2
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema2/1.png", alt="")
      .col-lg-7
        p La estructura organizacional define la forma en que se distribuyen funciones, responsabilidades y niveles jerárquicos dentro de una empresa, esta permite coordinar actividades, optimizar recursos y facilitar la toma de decisiones. Su diseño influye directamente en la eficiencia, el control y la competitividad organizacional.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto
    
    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-lg-8
        p La estructura organizacional es el sistema formal mediante el cual se establecen las relaciones de autoridad, comunicación y responsabilidad dentro de una organización. Define cómo se agrupan las actividades, cómo se asignan las funciones y cómo fluye la información entre las diferentes áreas.
        .cajon.color-primario.p-4.mb-4.mb-lg-0
          p.mb-0 Desde un enfoque administrativo, la estructura organizacional permite alinear los recursos humanos con los objetivos estratégicos, garantizando que cada unidad cumpla un rol específico dentro del sistema empresarial. Una estructura bien definida reduce la duplicidad de funciones, mejora la coordinación y facilita el control interno. En entornos empresariales actuales, las organizaciones adoptan estructuras más flexibles que favorecen la innovación, la adaptabilidad y el trabajo colaborativo, integrando herramientas tecnológicas como #[em software] de gestión y sistemas de #[em business intelligence].
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema2/2.png", alt="")

    .row.align-items-center.z-2.bg-img.rounded-4.p-4.mb-4.mb-lg-5
      .d-none.d-lg-block.col-lg-1
        figure
          img(data-aos="fade-down", src="@/assets/curso/tema1/9.svg", alt="")
      .col-lg-11.col-xl-10
        p.mb-0 En Apple, la estructura organizacional combina liderazgo centralizado con equipos especializados por producto, lo que permite innovación constante y control estratégico.

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-xl-10
        .p-3.py-1.bg-primario-p10.rounded-4
          .row.align-items-center.justify-content-center
            .col-6.col-sm-4.col-lg-2
              figure
                img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema2/3.png", alt="")
            .col-lg-7
              h5 #[em Apple’s Organizational Structure & Its Characteristics (An Analysis)]
              p.mb-4.mb-lg-0 Para profundizar en la aplicación real de la estructura organizacional en empresas globales (Apple), se invita al aprendiz a consultar el siguiente recurso:
            .col-sm-4.col-lg-3
              a.boton.me-3.mb-4.text-center(href="https://panmore.com/apple-inc-organizational-structure-features-pros-cons" target="_blank")
                span.texto-oscuro Abrir enlace
                i.fas.fa-link.ms-2.texto-oscuro

    p.mb-4.z-2 Elementos de la estructura organizacional
          
    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema2/4.png", alt="")
      .col-lg-7
        .bg-fondo-slider.tarjeta
          .p-4.p-lg-5
            SlyderA(tipo="b").bg-white.p-4.tarjeta
              .row.justify-content-center.align-items-center
                .col-lg-11
                  .pt-4
                    h4 Jerarquía
                    p.mb-0 A través de la jerarquía se organizan los niveles estratégico, táctico y operativo, facilitando la comunicación, el control, la coordinación de los procesos y el uso eficiente de los recursos de la empresa.
              .row.justify-content-center.align-items-center
                .col-lg-11
                  .pt-4
                    h4 Departamentalización	
                    p.mb-0 Es el proceso mediante el cual una organización agrupa actividades, funciones, recursos y personas en unidades o departamentos especializados para mejorar la eficiencia y la coordinación del trabajo. 
              .row.justify-content-center.align-items-center
                .col-lg-11
                  .pt-4
                    h4 Cadena de mando
                    p.mb-0 Es la línea continua de autoridad que conecta los diferentes niveles jerárquicos de una organización, desde la alta dirección hasta los niveles operativos. Define quién reporta a quién y establece el flujo formal de comunicación, supervisión y toma de decisiones.
              .row.justify-content-center.align-items-center
                .col-lg-11
                  .pt-4
                    h4 Centralización
                    p.mb-0 Se refiere al grado en que la autoridad para la toma de decisiones se concentra en los niveles superiores de la organización. En estructuras altamente centralizadas, las decisiones estratégicas y operativas son tomadas principalmente por la alta dirección, mientras que los niveles inferiores tienen una participación limitada en este proceso.
              .row.justify-content-center.align-items-center
                .col-lg-11
                  .pt-4
                    h4 Formalización
                    p.mb-0 Es el grado en que las actividades, funciones, procedimientos y comportamientos dentro de una organización están definidos y regulados mediante normas, políticas, manuales, reglamentos y procedimientos documentados. Este elemento busca garantizar que las tareas se realicen de manera consistente y conforme a los estándares establecidos.

    .cajon.color-acento-botones.p-4
      p.mb-0 La estructura organizacional no solo define roles, sino que determina la capacidad de coordinación, control y adaptación de la empresa frente a entornos dinámicos.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Clasificación

    .fullwidth-bg.fullwidth-bg--1
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las estructuras organizacionales se clasifican según la forma en que distribuyen la autoridad, organizan las funciones y gestionan la comunicación interna. Cada tipo responde a necesidades específicas del entorno y del modelo de negocio.

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 1.
          span Clasificación de la estructura organizacional
        .tabla-a.color-terciario.tabla-a--text-left
          table
            caption Nota. SENA, (2026). 
            thead
              tr(style="background-color: #FAD5ED")
                th Tipo de estrctura
                th Características
                th Ventajas 
                th Ejemplo
            tbody
              tr
                td Funcional
                td Agrupa por áreas (ventas, finanzas, #[em marketing])
                td Especialización
                td Empresas tradicionales
              tr
                td Divisional
                td Organiza por productos o mercados
                td Enfoque estratégico
                td Multinacionales
              tr
                td Matricial 
                td Combina funciones y proyectos 
                td Flexibilidad 
                td Empresas tecnológicas 
              tr
                td Horizontal 
                td Reduce niveles jerárquicos 
                td Agilidad 
                td #[em Startups] 
              tr
                td Lineal 
                td Autoridad directa y clara 
                td Control simple 
                td Pequeñas empresas 

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Estructuras organizacionales 
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/6-mob.png", alt="La figura describe las estructuras organizacionales; presentando cinco tipos: estructura lineal, en la que un director supervisa directamente a los empleados; estructura funcional, que organiza el trabajo en áreas especializadas como producción, finanzas y marketing; estructura lineal y de staff, que incorpora personal asesor para apoyar la toma de decisiones; estructura con comités, que complementa la dirección mediante grupos de apoyo y asesoría; y estructura lineal y funcional, que combina la autoridad jerárquica con áreas especializadas como producción, finanzas, marketing, recursos humanos y sistemas. Cada esquema ilustra las relaciones de autoridad, coordinación y distribución de funciones dentro de la organización.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/6.png", alt="La figura describe las estructuras organizacionales; presentando cinco tipos: estructura lineal, en la que un director supervisa directamente a los empleados; estructura funcional, que organiza el trabajo en áreas especializadas como producción, finanzas y marketing; estructura lineal y de staff, que incorpora personal asesor para apoyar la toma de decisiones; estructura con comités, que complementa la dirección mediante grupos de apoyo y asesoría; y estructura lineal y funcional, que combina la autoridad jerárquica con áreas especializadas como producción, finanzas, marketing, recursos humanos y sistemas. Cada esquema ilustra las relaciones de autoridad, coordinación y distribución de funciones dentro de la organización.")
        figcaption Nota. SENA, (2026). 

    .row.align-items-center.z-2.bg-img.rounded-4.p-4.mb-4.mb-lg-5
      .d-none.d-lg-block.col-lg-1
        figure
          img(data-aos="fade-down", src="@/assets/curso/tema1/9.svg", alt="")
      .col-lg-11.col-xl-10
        p.mb-0 Empresas como Google utilizan estructuras matriciales que permiten trabajar por proyectos, favoreciendo la innovación y la colaboración interdisciplinaria. La elección de la estructura organizacional influye en la capacidad de innovación, la eficiencia operativa y la competitividad de la empresa en el mercado.

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-xl-10
        .p-3.py-1.bg-primario-p10.rounded-4
          .row.align-items-center.justify-content-center
            .col-6.col-sm-4.col-lg-2
              figure
                img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema2/7.png", alt="")
            .col-lg-7
              h5.my-3 La estructura organizacional
              p.mb-2 Se invita al aprendiz a revisar al siguiente enlace con el propósito de identificar:
              ul.lista-ul
                li.mb-0 
                  i.lista-ul__vineta
                  | Concepto de estructura organizacional.
                li.mb-0
                  i.lista-ul__vineta
                  | Tipos de estructuras empresariales.
                li.mb-0
                  i.lista-ul__vineta
                  | Relación entre jerarquía y funciones.
                li.mb-0
                  i.lista-ul__vineta
                  | Importancia en la gestión empresarial.

            .col-sm-4.col-lg-3
              a.boton.me-3.mb-4.text-center(href="https://www.youtube.com/watch?v=NpsflJIWNIg" target="_blank")
                span.texto-oscuro Enlace
                i.fas.fa-video.ms-2.texto-oscuro

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
