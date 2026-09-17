'use client';

import { motion } from 'framer-motion';
import { AnimatedSection, Container, SectionLabel, Button } from './ui';

const included = [
  'Diseño de la solución',
  'Configuración completa',
  'Integración de herramientas',
  'Pruebas del sistema',
  'Puesta en funcionamiento',
];

export default function SmartAutomation() {
  return (
    <section id="smart-automation" className="relative overflow-hidden bg-neutral-50 py-24 lg:py-32">
      {/* Subtle gradient accent */}
      <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />

      <Container>
        <div className="mx-auto max-w-4xl">
          <AnimatedSection className="text-center">
            <SectionLabel>El servicio</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              LUXORA Smart Automation
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Una automatización diseñada para un problema concreto de tu negocio.
            </p>
          </AnimatedSection>

          {/* Price card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 overflow-hidden rounded-3xl border border-ink/8 bg-white shadow-card"
          >
            <div className="grid gap-0 lg:grid-cols-2">
              {/* Left: Price */}
              <div className="flex flex-col justify-center border-b border-ink/8 p-10 lg:border-b-0 lg:border-r">
                <p className="text-sm font-medium text-ink-faint">Precio único</p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="font-display text-6xl font-bold tracking-tight text-ink">250</span>
                  <span className="mb-2 font-display text-2xl font-semibold text-gold">€</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Diseño + configuración + integración + pruebas + puesta en funcionamiento.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Cada automatización se adapta al negocio y a las herramientas que utiliza.
                </p>
              </div>

              {/* Right: What's included */}
              <div className="p-10">
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
                  Qué incluye
                </p>
                <ul className="mt-5 space-y-4">
                  {included.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <svg className="h-3 w-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-ink-soft">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="#contact" variant="primary" className="w-full">
                    Solicitar Automation Audit
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
