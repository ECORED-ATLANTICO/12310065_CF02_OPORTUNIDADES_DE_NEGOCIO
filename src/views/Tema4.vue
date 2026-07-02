<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Idea de negocio

    .fullwidth-bg.fullwidth-bg--1
    img(data-aos="fade-up")(src="@/assets/curso/tema4/1.png", alt="").z-2
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 La idea de negocio constituye el punto de partida para la creación de una empresa o emprendimiento. Permite identificar oportunidades en el mercado y diseñar propuestas de valor diferenciadas. Su adecuada formulación es clave para la viabilidad y sostenibilidad empresarial.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Concepto

    .row.justify-content-center.align-items-center.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema4/2.png", alt="")
      .col-lg-8
        p La idea de negocio es una propuesta inicial que busca satisfacer una necesidad o resolver un problema en el mercado mediante un producto o servicio. Surge a partir del análisis del entorno, la identificación de oportunidades y la capacidad del emprendedor para generar soluciones innovadoras.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Desde una perspectiva empresarial, una idea de negocio no se limita a una ocurrencia, sino que requiere validación, análisis y estructuración para determinar su potencial de desarrollo. En este sentido, se convierte en la base para la formulación del plan de negocio y la toma de decisiones estratégicas.

    .row.align-items-center.z-2.bg-img.rounded-4.p-4
      .d-none.d-lg-block.col-lg-1
        figure
          img(data-aos="fade-down", src="@/assets/curso/tema1/9.svg", alt="")
      .col-lg-11.col-xl-10
        p.mb-0 En entornos altamente competitivos, las ideas de negocio exitosas son aquellas que logran diferenciarse, adaptarse a las tendencias del mercado y generar valor para el cliente. Empresas como Uber surgieron a partir de una idea de negocio basada en la necesidad de movilidad eficiente, integrando tecnología y modelo colaborativo.

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Características

    .fullwidth-bg.fullwidth-bg--1
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una idea de negocio debe cumplir con ciertas características que permitan evaluar su potencial de éxito y su capacidad de desarrollo en el mercado. Estas características no solo determinan su viabilidad, sino también su competitividad y sostenibilidad en el tiempo:

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3.
          span Idea de negocio: características clave describe 
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema4/4-mob.png", alt="")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema4/4.png", alt="")
        figcaption Nota. Adaptada de Malhotra, (2008).

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema4/5.png", alt="")
      .col-lg-7
        p Spotify segmenta a sus usuarios teniendo en cuenta la edad, gustos musicales, hábitos de escucha y tipo de suscripción (gratuita o premium). Gracias a esta segmentación, la plataforma puede enviar recomendaciones personalizadas, generar playlists adaptadas a cada perfil y ofrecer promociones específicas que fomenten la suscripción premium y el engagement de los usuarios.

    .cajon.color-acento-botones.p-4
      p.mb-0 Esta captura de pantalla de la interfaz de Netflix que ilustra su modelo de negocio de contenido bajo demanda. Se observa la sección de tendencias con un carrusel numerado del 1 al 6 que muestra títulos globales, demostrando el uso de algoritmos para personalizar la experiencia del usuario. Debajo, la sección “Más motivos para unirte” destaca la escalabilidad técnica del servicio al ser compatible con múltiples dispositivos como Smart TV, consolas de videojuegos y reproductores de streaming.

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Formulación

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema4/6.png", alt="")
      .col-lg-8
        p La formulación de una idea de negocio consiste en estructurarla de manera clara y organizada, definiendo sus elementos clave como el problema a resolver, la propuesta de valor, el segmento de mercado y los recursos necesarios.
        p.mb-0 Este proceso implica transformar una idea inicial en una propuesta concreta, evaluando factores como el mercado objetivo, la competencia y las condiciones del entorno. Herramientas como el business model canvas permiten visualizar de forma integral los componentes del negocio.

    .bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h4 Problema
              p Necesidad o situación insatisfecha identificada en el mercado, que afecta a un grupo específico de personas y requiere una solución.
              p.mb-0 #[strong Ejemplo]: falta de transporte eficiente en zonas urbanas	 
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema4/7.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h4 Solución
              p Propuesta de valor que responde al problema identificado mediante un producto o servicio innovador o mejorado.
              p.mb-0 #[strong Ejemplo]: plataforma digital de movilidad	 	 
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema4/8.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h4 Cliente
              p Segmento de mercado al que se dirige la solución, definido por características demográficas, geográficas o de comportamiento.
              p.mb-0 #[strong Ejemplo]: usuarios urbanos con necesidad de transporte rápido.	 	 	 
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema4/9.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h4 Recursos
              p Conjunto de medios necesarios para desarrollar la idea de negocio, incluyendo recursos humanos, tecnológicos, financieros y materiales.
              p.mb-0 #[strong Ejemplo]: tecnología, capital humano y plataformas digitales	 	 	 	 
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema4/10.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              h4 Canal
              p Medio o forma a través del cual se entrega el producto o servicio al cliente, facilitando su acceso y consumo.
              p.mb-0 #[strong Ejemplo]: aplicación móvil y plataforma digital.	 	 	 	 	 
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema4/11.png', alt='')

    .row.align-items-center.z-2.bg-img.rounded-4.p-4
      .d-none.d-lg-block.col-lg-1
        figure
          img(data-aos="fade-down", src="@/assets/curso/tema1/9.svg", alt="")
      .col-lg-11.col-xl-10
        p.mb-0 Rappi formuló su modelo de negocio a partir de la necesidad de entregas rápidas, integrando tecnología y logística. La formulación convierte una idea en una propuesta estructurada, facilitando su análisis y desarrollo empresarial.

    .fullwidth-bg.fullwidth-bg--1
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Innovación y emprendimiento

    .row.justify-content-center.align-items-center.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema4/12.png", alt="")
      .col-lg-8
        p La innovación y el emprendimiento son elementos fundamentales en el desarrollo de ideas de negocio, ya que permiten generar soluciones diferenciadas y adaptadas a las necesidades del mercado. La innovación implica la creación o mejora de productos, servicios o procesos, mientras que el emprendimiento se enfoca en la capacidad de llevar una idea al mercado, asumiendo riesgos y gestionando recursos. En el contexto actual, ambos conceptos están estrechamente relacionados y son clave para la competitividad empresarial. El uso de tecnologías, tendencias digitales y modelos de negocio disruptivos ha permitido el surgimiento de nuevas empresas que transforman sectores tradicionales.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Tesla combina innovación tecnológica con emprendimiento para transformar la industria automotriz. La integración de innovación y emprendimiento permite transformar ideas en negocios sostenibles y competitivos.

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-xl-10
        .p-3.py-1.bg-primario-p10.rounded-4
          .row.align-items-center.justify-content-center
            .col-6.col-sm-4.col-lg-2
              figure
                img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema2/7.png", alt="")
            .col-lg-7
              h5.my-3 Innovación, creatividad y emprendimiento - Introducción
              p.mb-2 Ir al siguiente video donde con el propósito de identificar:
              ul.lista-ul
                li.mb-0 
                  i.lista-ul__vineta
                  | Concepto de innovación en los negocios.
                li.mb-0
                  i.lista-ul__vineta
                  | Importancia de la innovación en el emprendimiento.
                li.mb-0
                  i.lista-ul__vineta
                  | Cómo la innovación genera valor en el mercado.
                li.mb-0
                  i.lista-ul__vineta
                  | Relación entre innovación, competitividad y crecimiento.

            .col-sm-4.col-lg-3
              a.boton.me-3.mb-4.text-center(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                span.texto-oscuro Ver video
                i.fas.fa-video.ms-2.texto-oscuro

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-5.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema4/13.png", alt="")
      .col-lg-7.bg-audio.rounded-4
        .row.align-items-center
          .col-sm-4
            figure.pt-3
              img.w-195(src="@/assets/curso/common/mic.png", alt="alt")
          .col-sm-8.col-lg-8
            h5.text-white ¿Sabías qué?
            p.text-white Lo invitamos a escuchar el siguiente pódcast:
            TarjetaAudio.color-white.mb-3(
              texto="Analítica web: concepto, herramientas y metodología."
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )



</template>

<script>
export default {
  name: 'Tema4',
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
