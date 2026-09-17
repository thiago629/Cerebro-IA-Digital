'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection, Container, SectionLabel, fadeUp, staggerContainer } from './ui';

const demos = [
  {
    sector: 'Hotel',
    emoji: '🏨',
    desc: 'Gestión de reservas, confirmaciones y comunicación automatizada con huéspedes.',
    flow: ['Reserva recibida', 'Confirmación por WhatsApp', 'Check-in automatizado', 'Solicitud de servicios', 'Checkout', 'Solicitud de reseña'],
  },
  {
    sector: 'Inmobiliaria',
    emoji: '🏡',
    desc: 'Captación de leads, clasificación inteligente y seguimiento automático.',
    flow: ['Nuevo cliente', 'Formulario / WhatsApp', 'Automatización', 'IA analiza la solicitud', 'Clasificación del lead', 'CRM', 'Aviso al comercial'],
  },
  {
    sector: 'Automoción',
    emoji: '🚘',
    desc: 'Consulta de vehículos, citas de taller y seguimiento post-servicio.',
    flow: ['Consulta de vehículo', 'WhatsApp / Formulario', 'IA responde dudas', 'Cita de taller', 'Recordatorio automático', 'Seguimiento post-servicio'],
  },
  {
    sector: 'Clínica',
    emoji: '💆',
    desc: 'Solicitud de citas, confirmaciones y recordatorios automáticos.',
    flow: ['Solicitud de cita', 'WhatsApp / Web', 'Comprobación de disponibilidad', 'Confirmación automática', 'Recordatorio previo', 'Seguimiento post-cita'],
  },
  {
    sector: 'Charter',
    emoji: '🛥️',
    desc: 'Consulta de disponibilidad, propuestas y gestión de reservas.',
    flow: ['Consulta de disponibilidad', 'WhatsApp', 'Propuesta automatizada', 'Reserva confirmada', 'Itinerario enviado', 'Seguimiento post-travesía'],
  },
  {
    sector: 'Restaurante',
    emoji: '🍽️',
    desc: 'Reservas, confirmaciones y gestión de preferencias de clientes.',
    flow: ['Reserva recibida', 'Confirmación automática', 'Recordatorio previo', 'Gestión de preferencias', 'Seguimiento post-visita'],
  },
  {
    sector: 'Servicios profesionales',
    emoji: '🏢',
    desc: 'Consulta, clasificación de solicitudes y propuesta automatizada.',
    flow: ['Consulta recibida', 'Formulario', 'IA clasifica la solicitud', 'Asignación de responsable', 'Propuesta enviada', 'Seguimiento'],
  },
];

export default function Demos() {
  const [activeDemo, setActiveDemo] = useState<(typeof demos)[0] | null>(null);

  return (
    <section id="demos" className="bg-white py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionLabel>LUXORA Demos</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Descubre cómo podría funcionar una automatización en tu negocio.
          </h2>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {demos.map((demo) => (
            <motion.button
              key={demo.sector}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveDemo(demo)}
              className="group relative overflow-hidden rounded-2xl border border-ink/8 bg-neutral-50 p-7 text-left transition-all duration-300 hover:border-gold/20 hover:bg-white hover:shadow-card"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-3xl shadow-soft transition-transform duration-300 group-hover:scale-105">
                {demo.emoji}
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">{demo.sector}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{demo.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-all duration-300 group-hover:gap-2.5">
                Ver demo
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.button>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-sm text-ink-faint">
          Las demostraciones son conceptuales y representan ejemplos de automatización, no instalaciones reales de clientes.
        </p>
      </Container>

      {/* Demo modal */}
      <AnimatePresence>
        {activeDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveDemo(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-ink/8 bg-white p-8 shadow-2xl sm:p-10"
            >
              <button
                onClick={() => setActiveDemo(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-50 text-ink-muted transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-3">
                <span className="text-3xl">{activeDemo.emoji}</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{activeDemo.sector}</h3>
                  <p className="text-sm text-ink-muted">Demostración conceptual de automatización</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{activeDemo.desc}</p>

              {/* Flow diagram */}
              <div className="mt-8 space-y-1">
                {activeDemo.flow.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
                        <span className="font-display text-xs font-bold text-gold">{i + 1}</span>
                      </div>
                      {i < activeDemo.flow.length - 1 && (
                        <div className="h-6 w-px bg-gradient-to-b from-gold/30 to-transparent" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-ink-soft">{step}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-neutral-50 p-5">
                <p className="text-xs leading-relaxed text-ink-faint">
                  Esta es una demostración conceptual. El flujo real se adapta a las herramientas
                  y procesos específicos de cada negocio.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
