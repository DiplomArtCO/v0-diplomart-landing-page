/**
 * Centralized product/service data for detail pages
 * Expanded with SEO fields, galleries, FAQs, use cases, materials, customization options
 */

export interface ProductRecord {
  id: string
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  image: string
  heroImage: string
  gallery: Array<{ src: string; alt: string }>
  features: string[]
  materials: string[]
  customizationOptions: string[]
  useCases: string[]
  serviceArea: string
  faqs: Array<{ question: string; answer: string }>
  relatedSlugs: string[]
  seoTitle: string
  seoDescription: string
  keywords: string[]
}

export const products: Record<string, ProductRecord> = {
  diplomas: {
    id: 'diplomas',
    slug: 'diplomas',
    title: 'Diplomas y Actas de Graduación',
    shortDescription: 'Paquete de Diploma y Acta para Instituciones Educativas.',
    longDescription:
      'Paquetes completos de Diplomas, Actas y Carpetas portadiploma elaborados con los más altos estándares de calidad. Cada pieza es un símbolo del logro académico de tus estudiantes, reflejando la excelencia de tu institución.',
    image: '/kit-diploma-carpeta-acta.webp',
    heroImage: '/kit-diploma-carpeta-acta.webp',
    gallery: [
      { src: '/kit-diploma-carpeta-acta.webp', alt: 'Kit completo diploma carpeta acta con presentación premium Cali' },
      { src: '/kit-diploma-carpeta-acta.webp', alt: 'Diploma personalizado con acta y carpeta portadiploma Cali' },
      { src: '/kit-diploma-carpeta-acta.webp', alt: 'Paquete de graduación con materiales de lujo Cali' },
    ],
    features: [
      'Papel Importado de Alto Gramaje',
      'Tinta UV de Seguridad con Filigrana',
      'Diseño Personalizado Premium',
      'Acabados de Lujo',
      'Escudo Repujado en Relieve',
      'Impresión Litográfica de Seguridad',
      'Empaque Profesional',
    ],
    materials: [
      'Papel importado 300gsm mínimo',
      'Tinta de seguridad UV con filigrana',
      'Carpeta portadiploma en cartulina premium',
      'Acabados: barniz, repujado, relieve',
    ],
    customizationOptions: [
      'Diseño personalizado según identidad institucional',
      'Logotipos y escudos en relieve',
      'Textos y nombres personalizados',
      'Selección de colores corporativos',
      'Opciones de encuadernación y presentación',
    ],
    useCases: [
      'Graduaciones de educación primaria y secundaria',
      'Certificados de educación superior y posgrados',
      'Reconocimientos académicos y doctorados honoris causa',
      'Diplomas de educación técnica y profesional',
      'Certificados de competencia laboral',
    ],
    serviceArea: 'Cali, Valle del Cauca y Colombia',
    faqs: [
      {
        question: '¿Cuál es el tiempo de entrega?',
        answer:
          'Nuestros tiempos de entrega varían según el volumen y complejidad del diseño. Generalmente, un pedido toma entre 5 a 15 días hábiles. Contáctanos para conocer tiempos específicos según tu proyecto.',
      },
      {
        question: '¿Qué materiales utilizan?',
        answer:
          'Utilizamos papel importado de alto gramaje (mínimo 300gsm), tintas de seguridad UV con filigrana, y acabados premium que incluyen repujado, relieve y barnices de lujo.',
      },
      {
        question: '¿Puedo personalizar el diseño?',
        answer:
          'Sí, cada diploma es completamente personalizable. Incluimos diseño según tu identidad institucional, logotipos, escudos en relieve, y todos tus textos específicos.',
      },
      {
        question: '¿Cuál es el mínimo de pedido?',
        answer:
          'Nuestro mínimo de pedido es flexible y depende del diseño específico. Contáctanos para discutir las opciones que mejor se adapten a tu institución.',
      },
      {
        question: '¿Incluyen empaque?',
        answer:
          'Sí, todos nuestros diplomas incluyen empaque profesional. Ofrecemos opciones de presentación en carpetas, estuches y packaging personalizado.',
      },
    ],
    relatedSlugs: ['agendas', 'totebags', 'merchandising'],
    seoTitle: 'Diplomas y Actas de Graduación Personalizados | DiplomArt Cali',
    seoDescription:
      'Diplomas premium, actas y carpetas portadiploma personalizadas para instituciones educativas en Cali. Papel importado, tinta de seguridad, diseño exclusivo.',
    keywords: ['diplomas personalizados', 'actas de graduación', 'certificados premium', 'Cali'],
  },

  agendas: {
    id: 'agendas',
    slug: 'agendas',
    title: 'Agendas Ejecutivas y Corporativas',
    shortDescription: 'Agendas ejecutivas y corporativas con encuadernación premium. Ideales para Kits empresariales y Merch Empresarial.',
    longDescription:
      'Agendas y cuadernos personalizados con los más altos estándares de calidad en materiales y acabados. Perfectas para kits corporativos, incentivos empresariales y merchandising de marca.',
    image: '/agendas-argollada-personalizada.webp',
    heroImage: '/agendas-argollada-personalizada.webp',
    gallery: [
      { src: '/agendas-argollada-personalizada.webp', alt: 'Agenda argollada personalizada con encuadernación en pasta dura Cali' },
      { src: '/cuaderno-argollado-personalizado.webp', alt: 'Cuaderno argollado con diseño personalizado Cali' },
      { src: '/agenda-corporativa-personalizada.webp', alt: 'Agenda corporativa cosida con diseño personalizado Cali' },
      { src: '/cuaderno-corporativo-personalizado.webp', alt: 'Cuaderno empresarial personalizado argollado Cali' },
      { src: '/agenda-cosida-personalizada.webp', alt: 'Agenda tapa blanda personalizada Cali' },
      { src: '/agenda-pasta-dura.webp', alt: 'Cuaderno personalizado pasta dura argollado Cali' },
    ],
    features: [
      'Personalización Completa Interior y Exterior',
      'Múltiples Opciones de Encuadernación',
      'Papel de Alta Calidad',
      'Impresión Full Color',
      'Acabados Premium',
      'Diseño Corporativo',
    ],
    materials: [
      'Cartulina de pasta dura o blanda para portada',
      'Papel bond o de periódico para interiores',
      'Encuadernación: argollada, cosida, hotmelt, o pegada',
      'Tintas de impresión en colores especiales',
    ],
    customizationOptions: [
      'Diseño personalizado de portada y contraportada',
      'Interior personalizado con calendarios o contenido',
      'Selección de colores corporativos',
      'Logotipos bordados o estampados',
      'Opciones de encuadernación múltiples',
      'Tamaños personalizados',
    ],
    useCases: [
      'Agendas corporativas para ejecutivos',
      'Kits de bienvenida para empleados',
      'Regalos corporativos para clientes',
      'Herramientas de planeación empresarial',
      'Merchandising de marca premium',
      'Cuadernos escolares y universitarios',
    ],
    serviceArea: 'Cali, Valle del Cauca y Colombia',
    faqs: [
      {
        question: '¿Qué opciones de encuadernación ofrecen?',
        answer:
          'Ofrecemos encuadernación argollada (espiral metálico), cosida (tradicional), hotmelt (pegada con calor) y pegada. Cada opción tiene ventajas diferentes según tu uso.',
      },
      {
        question: '¿Puedo elegir el tipo de papel?',
        answer:
          'Sí, ofrecemos múltiples opciones de papel: bond, periódico, couché, reciclado y más. Cada uno tiene propiedades diferentes de grosor, textura y acabado.',
      },
      {
        question: '¿Hacen impresión full color?',
        answer:
          'Sí, realizamos impresión full color tanto en portadas como en interiores. Podemos incluir imágenes, gráficos y diseños complejos con excelente calidad.',
      },
      {
        question: '¿Cuál es el mínimo de unidades?',
        answer:
          'Nuestro mínimo de pedido comienza desde 100 unidades, aunque podemos discutir opciones especiales según tu proyecto.',
      },
      {
        question: '¿Incluyen diseño?',
        answer:
          'Nuestro equipo de diseño puede crear o adaptar tu diseño existente. Ofrecemos diseño personalizado como parte del servicio.',
      },
    ],
    relatedSlugs: ['diplomas', 'merchandising', 'totebags'],
    seoTitle: 'Agendas Corporativas y Cuadernos Personalizados | DiplomArt Cali',
    seoDescription:
      'Agendas ejecutivas, cuadernos y libretas personalizadas con encuadernación premium para empresas en Cali. Merchandising corporativo de calidad.',
    keywords: ['agendas corporativas', 'cuadernos personalizados', 'merchandising empresarial', 'Cali'],
  },

  totebags: {
    id: 'totebags',
    slug: 'totebags',
    title: 'Totebags Ecológicos Personalizados',
    shortDescription: 'Bolsas ecológicas personalizadas con tu marca. Ideales para eventos, conferencias y promociones.',
    longDescription:
      'Totebags 100% algodón personalizados con serigrafía de alta calidad. Perfectos para eventos corporativos, conferencias, y como merchandising institucional. Amigables con el medio ambiente y totalmente personalizables.',
    image: '/totebag-estampado.webp',
    heroImage: '/totebag-estampado.webp',
    gallery: [
      { src: '/totebag-estampado.webp', alt: 'Totebag blanco con diseño personzaliado estampado' },
      { src: '/totebag-personalizado.webp', alt: 'Bolsa ecológica de algodón con imagen estampada' },
      { src: '/bolsa-ecologica-personalizada.webp', alt: 'Tote bag ecológica resistente personalizada' },
    ],
    features: [
      '100% Algodón Orgánico',
      'Serigrafía de Alta Calidad',
      'Eco-Friendly y Sostenible',
      'Resistente y Durable',
      'Personalización Completa',
      'Asas Reforzadas',
    ],
    materials: [
      'Algodón 100% orgánico',
      'Tinta de serigrafía ecológica',
      'Asas reforzadas de 5cm de ancho',
      'Fondo con refuerzo',
    ],
    customizationOptions: [
      'Diseño personalizado de serigrafía',
      'Selección de colores de bolsa',
      'Múltiples ubicaciones de estampado',
      'Logos y textos personalizados',
      'Tamaños personalizados',
      'Opciones de tinta especial',
    ],
    useCases: [
      'Eventos corporativos y conferencias',
      'Ferias y exposiciones comerciales',
      'Regalos promocionales de marca',
      'Kits de bienvenida a eventos',
      'Merchandising ecológico',
      'Bolsas de compras para tiendas',
    ],
    serviceArea: 'Cali, Valle del Cauca y Colombia',
    faqs: [
      {
        question: '¿Cuáles son las dimensiones estándar?',
        answer:
          'Nuestro tamaño estándar es de 38cm x 42cm (sin incluir asas). Podemos personalizar dimensiones según tu necesidad.',
      },
      {
        question: '¿Cuántos colores puedo usar en el diseño?',
        answer:
          'En serigrafía tradicional, recomendamos hasta 4 colores. Sin embargo, podemos realizar diseños más complejos usando técnicas especiales como sublimación o estampado digital.',
      },
      {
        question: '¿El algodón es orgánico?',
        answer:
          'Sí, utilizamos algodón 100% orgánico certificado, lo que lo hace amigable con el medio ambiente y cómodo de usar.',
      },
      {
        question: '¿Cuál es el mínimo de pedido?',
        answer:
          'Nuestro mínimo de pedido es de 100 bolsas. Ofrecemos precios especiales para pedidos en volumen.',
      },
      {
        question: '¿Cuánto tiempo demora la producción?',
        answer:
          'Generalmente, nuestros pedidos se entregan entre 10 a 20 días hábiles desde la aprobación del diseño.',
      },
    ],
    relatedSlugs: ['merchandising', 'agendas', 'diplomas'],
    seoTitle: 'Totebags Ecológicos Personalizados | DiplomArt Cali',
    seoDescription:
      'Bolsas ecológicas de algodón 100% personalizadas con serigrafía para eventos y merchandising corporativo en Cali.',
    keywords: ['totebags personalizados', 'bolsas ecológicas', 'merchandise corporativo', 'Cali'],
  },

  merchandising: {
    id: 'merchandising',
    slug: 'merchandising',
    title: 'Merchandising Corporativo y Promocional',
    shortDescription: 'Artículos promocionales de alta calidad: tazas, bolígrafos, llaveros y más con tu identidad corporativa.',
    longDescription:
      'Línea completa de merchandising corporativo de alta calidad. Desde tazas de cerámica hasta bolígrafos premium, llaveros metálicos, libretas y mucho más. Todos personalizables con tu identidad de marca.',
    image: '/merchandising-empresarial-cali.webp',
    heroImage: '/merchandising-empresarial-cali.webp',
    gallery: [
      { src: '/merchandising-empresarial-cali.webp', alt: 'Merchandising empresarial con taza, totebag, agendas y bolígrafos. Todo personalizado' },
      { src: '/merchandising-empresarial-cali.webp', alt: 'Kit corporativo personalizado con mugs y artículos promocionales' },
      { src: '/merchandising-empresarial-cali.webp', alt: 'Material POP personalizado' },
    ],
    features: [
      'Catálogo Amplio de Productos',
      'Calidad Premium en Todos los Artículos',
      'Branding Completo y Personalización',
      'Soluciones Integrales de Merchandising',
      'Precios Competitivos en Volumen',
    ],
    materials: [
      'Cerámica para tazas y accesorios',
      'Plástico ABS de calidad',
      'Metal para llaveros y accesorios',
      'Papel de alta gramaje',
      'Materiales ecológicos disponibles',
    ],
    customizationOptions: [
      'Impresión full color',
      'Grabado láser',
      'Serigrafía',
      'Bordado',
      'Logotipos personalizados',
      'Packaging corporativo',
    ],
    useCases: [
      'Regalos para clientes corporativos',
      'Incentivos para empleados',
      'Souvenirs de eventos y conferencias',
      'Kits de bienvenida y onboarding',
      'Campaña de branding y marketing',
      'Regalos de cierre de año',
    ],
    serviceArea: 'Cali, Valle del Cauca y Colombia',
    faqs: [
      {
        question: '¿Qué artículos tienen disponibles?',
        answer:
          'Tenemos un catálogo extenso que incluye tazas, bolígrafos, llaveros, camisetas, gorras, mochilas, botellas, espejos, pulseras y mucho más. Contáctanos para ver nuestro catálogo completo.',
      },
      {
        question: '¿Puedo ver muestras antes de hacer mi pedido?',
        answer:
          'Sí, ofrecemos muestras personalizadas de la mayoría de nuestros productos. Podemos enviar muestras para tu aprobación antes de iniciar la producción en volumen.',
      },
      {
        question: '¿Hacen entrega incluida en el precio?',
        answer:
          'Nuestros precios incluyen mercancía hasta nuestras instalaciones. Ofrecemos opciones de envío nacional e internacional con costos adicionales según destino.',
      },
      {
        question: '¿Cuál es el mínimo de pedido por artículo?',
        answer:
          'Los mínimos varían según el producto. Generalmente, comienzan desde 50 hasta 200 unidades dependiendo del artículo. Contáctanos para artículos específicos.',
      },
      {
        question: '¿Incluyen diseño?',
        answer:
          'Nuestro equipo de diseño puede ayudarte con la creación o adaptación de tu diseño. El diseño está incluido en la mayoría de nuestros servicios.',
      },
    ],
    relatedSlugs: ['totebags', 'agendas', 'diplomas'],
    seoTitle: 'Merchandising Corporativo y Promocional | DiplomArt Cali',
    seoDescription:
      'Merchandising empresarial de calidad: tazas, bolígrafos, llaveros y más personalizados con tu marca en Cali.',
    keywords: ['merchandising corporativo', 'artículos promocionales', 'marketing Cali', 'branding empresarial'],
  },

  material_pop: {
    id: 'material_pop',
    slug: 'material-pop',
    title: 'Material POP y Soluciones de Punto de Venta',
    shortDescription: 'Material POP personalizado para potenciar tu marca en punto de venta con soluciones creativas y efectivas.',
    longDescription:
      'Soluciones integrales de Material POP (Point of Purchase) diseñadas para captar la atención en puntos de venta y maximizar el impacto de tu marca. Desde afiches y banners hasta expositores personalizados.',
    image: '/merchandising-empresarial-cali.webp',
    heroImage: '/merchandising-empresarial-cali.webp',
    gallery: [
      { src: '/merchandising-empresarial-cali.webp', alt: 'Material POP personalizado para punto de venta' },
      { src: '/merchandising-empresarial-cali.webp', alt: 'Soluciones creativas POP para retail' },
      { src: '/merchandising-empresarial-cali.webp', alt: 'Expositores y displays personalizados' },
    ],
    features: [
      'Diseño Estratégico de Alto Impacto',
      'Múltiples Formatos y Materiales',
      'Instalación y Soporte Incluido',
      'Impresión de Alta Calidad',
      'Soluciones Personalizadas',
    ],
    materials: [
      'Papel couché de alta calidad',
      'Cartón corrugado',
      'PVC y poliestireno',
      'Acrílico transparente',
      'Materiales ecológicos',
    ],
    customizationOptions: [
      'Diseño estratégico según punto de venta',
      'Múltiples formatos: afiches, banners, expositores',
      'Impresión full color de alta resolución',
      'Laminado protector',
      'Acabados especiales',
    ],
    useCases: [
      'Campañas promocionales en tiendas',
      'Lanzamiento de nuevos productos',
      'Señalética interior de establecimientos',
      'Materiales para eventos de marca',
      'Expositores de productos',
      'Campañas estacionales',
    ],
    serviceArea: 'Cali, Valle del Cauca y Colombia',
    faqs: [
      {
        question: '¿Cuáles son los tamaños disponibles?',
        answer:
          'Disponemos de múltiples opciones de tamaño desde pequeños afiches (A4) hasta grandes banners (6m). Podemos personalizar según tus necesidades específicas.',
      },
      {
        question: '¿Incluyen diseño e instalación?',
        answer:
          'Nuestro servicio incluye diseño estratégico y asesoramiento. La instalación se coordina según tu ubicación y necesidad.',
      },
      {
        question: '¿Cuánto dura el material?',
        answer:
          'Utilizamos materiales de larga durabilidad. Con laminado protector, el material puede durar 1 a 2 años en condiciones normales de punto de venta.',
      },
      {
        question: '¿Puedo cambiar el contenido después?',
        answer:
          'Sí, algunos formatos como afiches modulares permiten cambios de contenido. Contáctanos para explorar opciones reutilizables.',
      },
      {
        question: '¿Realizan entregas en toda Colombia?',
        answer:
          'Sí, realizamos entregas a nivel nacional. Los costos varían según destino. Ofrecemos también servicios en Cali y zona metropolitana.',
      },
    ],
    relatedSlugs: ['merchandising', 'totebags', 'agendas'],
    seoTitle: 'Material POP y Punto de Venta Personalizado | DiplomArt Cali',
    seoDescription:
      'Material POP de alto impacto, afiches y expositores personalizados para punto de venta en Cali y Colombia.',
    keywords: ['material POP', 'punto de venta', 'soluciones retail', 'Cali'],
  },
}

export function getProduct(slug: string): ProductRecord | null {
  return products[slug] || products[slug.replace(/-/g, '_')] || null
}

export function getAllProductSlugs(): string[] {
  return Object.keys(products)
}
