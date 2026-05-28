import { Award, Clock, Users, ShieldCheck } from 'lucide-react'

/**
 * About Section Component - Sobre Nosotros
 * Layout: Texto e stats a la izquierda, 4 feature cards a la derecha (2x2)
 * Feature Cards: Calidad Premium, Entrega Puntual, Atención Personalizada, Garantía Total
 */

const features = [
  {
    icon: Award,
    title: 'Calidad Premium',
    description: 'Materiales importados que cumplen los estándares de calidad.'
  },
  {
    icon: Clock,
    title: 'Entrega Puntual',
    description: 'Cumplimos con los plazos acordados siempre.'
  },
  {
    icon: Users,
    title: 'Atención Personalizada',
    description: 'Cada cliente recibe un trato único y dedicado.'
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad',
    description: 'Medidas de seguridad Anti-falsificación'
  }
]

const stats = [
  { value: '20+', label: 'Instituciones Educativas' },
  { value: '25+', label: 'Años' }
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-[#F5F5F7] pt-7.5 pb-10" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Text Content and Stats */}
          <article>
            <p className="text-[#D7B63A] font-semibold text-sm uppercase tracking-wider mb-2">
              SOBRE NOSOTROS
            </p>
            <h2 id="about-heading" className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
              Más de 25 Años <span className="text-[#D7B63A]">Creando Excelencia</span>
            </h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed mb-0.5">
              En <b>Diplomart</b>, transformamos los logros académicos y corporativos en piezas artísticas de distinción. Desde Cali, proveemos soluciones gráficas de alta calidad a instituciones educativas y empresas en todo el Valle del Cauca y Colombia, garantizando excelencia en cada detalle.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap mb-3.5 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-4xl font-bold text-[#D7B63A] text-center">{stat.value}</div>
                  <div className="text-sm text-[#1A1A1A]/60 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="text-[#1A1A1A]/60 text-sm">
              Nuestro compromiso con la <b>excelencia</b> y la <b>calidad</b> nos permite brindarle a <b>miles</b> de estudiantes  en el Valle del Cauca un Diploma en recompensa por su esfuerzo educativo, manteniendo siempre los más altos estándares de calidad y seguridad que nos caracterizan.
            </p>
          </article>

          {/* Right Column - Feature Cards (2x2 Grid) */}
          <aside className="grid grid-cols-2 gap-4 sm:gap-6" aria-label="Características destacadas">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <article
                  key={feature.title}
                  className="bg-[#D7B63A] p-4 sm:p-6 rounded-lg border-2 border-[#D7B63A]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center mb-3 sm:mb-4" aria-hidden="true">
                    <Icon className="w-6 h-6 text-[#D7B63A]" />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold mb-2 text-[#1A1A1A] leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-[#1A1A1A]/80 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              )
            })}
          </aside>
        </div>
      </div>
    </section>
  )
}
