<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Identificación y aplicación de una idea de negocio',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> aplicar los conceptos de estructura organizacional, procesos administrativos, viabilidad y plan de negocio para la formulación y desarrollo de una idea de negocio en un contexto real. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué es una unidad administrativa dentro de una organización?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un sistema de ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un método de financiación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una estructura funcional encargada de ejecutar actividades específicas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un canal de distribución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La unidad administrativa es la estructura funcional básica encargada de ejecutar actividades alineadas con los objetivos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el concepto de unidad administrativa.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la función principal de una unidad administrativa estratégica?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir políticas y objetivos organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ejecutar tareas operativas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar auditorías.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestionar inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las unidades estratégicas orientan la dirección y los objetivos de la organización.',
          mensaje_incorrecto:
            'Revise la clasificación de las unidades administrativas.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es un elemento fundamental de la estructura administrativa?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promoción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Distribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Jerarquía.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La jerarquía establece los niveles de autoridad dentro de la organización.',
          mensaje_incorrecto:
            'Revise los elementos de la estructura administrativa.',
        },
        {
          id: 4,
          texto: '¿Qué permite una estructura organizacional bien definida?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la duplicidad de funciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejorar la coordinación y el control interno.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la comunicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la productividad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Una estructura organizacional adecuada facilita la coordinación y el cumplimiento de objetivos.',
          mensaje_incorrecto:
            'Revise nuevamente el tema de estructura organizacional.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes corresponde a una estructura organizacional funcional?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Agrupa actividades por áreas como ventas, finanzas y mercadeo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Organiza exclusivamente por proyectos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina la jerarquía.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Funciona sin departamentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La estructura funcional agrupa actividades según áreas especializadas.',
          mensaje_incorrecto:
            'Revise los tipos de estructuras organizacionales.',
        },
        {
          id: 6,
          texto: '¿Qué define un procedimiento administrativo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los objetivos estratégicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La misión organizacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La estructura financiera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los pasos específicos para realizar una actividad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El procedimiento establece cómo se desarrolla una actividad determinada.',
          mensaje_incorrecto:
            'Revise la diferencia entre proceso y procedimiento.',
        },
        {
          id: 7,
          texto: '¿Cuál es un ejemplo de proceso misional?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recursos humanos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Auditoría interna.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Producción o ventas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Planeación estratégica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los procesos misionales generan valor directo al cliente.',
          mensaje_incorrecto:
            'Revise la clasificación de los procesos administrativos.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es uno de los beneficios de aplicar procesos administrativos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar errores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estandarizar actividades y mejorar la calidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el control interno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la supervisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los procesos administrativos favorecen la estandarización y la eficiencia.',
          mensaje_incorrecto:
            'Revise los beneficios de los procesos administrativos.',
        },
        {
          id: 9,
          texto: '¿Qué es una idea de negocio?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un presupuesto financiero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una estrategia de ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un procedimiento operativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una propuesta para satisfacer una necesidad mediante un producto o servicio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Una idea de negocio busca resolver necesidades o problemas del mercado.',
          mensaje_incorrecto:
            'Revise nuevamente el concepto de idea de negocio.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es una característica fundamental de una idea de negocio exitosa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Innovación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Improvisación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Informalidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dependencia absoluta de terceros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La innovación permite generar valor y diferenciación en el mercado.',
          mensaje_incorrecto:
            'Revise las características de una idea de negocio.',
        },
        {
          id: 11,
          texto: '¿Cuál es una característica de una idea de negocio viable?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No requiere recursos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No necesita clientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Puede ejecutarse con los recursos disponibles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elimina la competencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La viabilidad implica que la idea pueda desarrollarse con recursos humanos, técnicos y financieros disponibles.',
          mensaje_incorrecto:
            'Revise las características de una idea de negocio.',
        },
        {
          id: 12,
          texto:
            '¿Qué característica permite que un negocio crezca sin aumentar proporcionalmente sus costos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pertinencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Escalabilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Jerarquía.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formalización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La escalabilidad facilita el crecimiento y expansión del negocio.',
          mensaje_incorrecto:
            'Revise las características de una idea de negocio.',
        },
        {
          id: 13,
          texto:
            '¿Qué elemento de la formulación de una idea de negocio identifica una necesidad insatisfecha?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Problema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Canal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Recurso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El problema representa la necesidad o situación que requiere solución.',
          mensaje_incorrecto:
            'Revise los elementos de formulación de una idea de negocio.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la función principal de un canal dentro de la formulación de una idea de negocio?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir la competencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Calcular utilidades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Determinar los costos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facilitar la entrega del producto o servicio al cliente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El canal es el medio mediante el cual el cliente accede al producto o servicio.',
          mensaje_incorrecto:
            'Revise los elementos de formulación de la idea de negocio.',
        },
        {
          id: 15,
          texto: '¿Qué implica la innovación dentro de un negocio?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Copiar procesos existentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la calidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crear o mejorar productos, servicios o procesos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar la competencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La innovación genera valor mediante mejoras o nuevas soluciones.',
          mensaje_incorrecto: 'Revise el concepto de innovación empresarial.',
        },
        {
          id: 16,
          texto: '¿Qué busca el emprendimiento?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Llevar una idea al mercado gestionando recursos y riesgos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar procesos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir la innovación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la toma de decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El emprendimiento permite convertir ideas en proyectos empresariales.',
          mensaje_incorrecto: 'Revise el concepto de emprendimiento.',
        },
        {
          id: 17,
          texto: '¿Qué permite evaluar la viabilidad de una idea de negocio?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente los gustos del emprendedor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las posibilidades reales de implementación y éxito.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo el tamaño de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente la publicidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La viabilidad analiza si la idea puede desarrollarse de manera sostenible.',
          mensaje_incorrecto: 'Revise el concepto de viabilidad.',
        },
        {
          id: 18,
          texto: '¿Cuál de los siguientes corresponde a un tipo de viabilidad?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicitaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comercialización visual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comunicacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Financiera.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La viabilidad financiera analiza recursos económicos y sostenibilidad del negocio.',
          mensaje_incorrecto: 'Revise la clasificación de la viabilidad.',
        },
        {
          id: 19,
          texto: '¿Cuál es el propósito principal de un plan de negocio?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar la estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar riesgos empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Organizar y presentar la información estratégica del negocio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir el análisis de mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El plan de negocio integra información estratégica, operativa y financiera.',
          mensaje_incorrecto: 'Revise el tema relacionado con plan de negocio.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el beneficio de utilizar herramientas TIC y paquetes ofimáticos en la gestión empresarial?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la comunicación organizacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar la gestión, análisis y presentación de la información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar procesos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la planeación empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las herramientas TIC apoyan la gestión de información y la toma de decisiones.',
          mensaje_incorrecto:
            'Revise el tema de herramientas TIC y paquetes ofimáticos.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente!, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
