'use client';

import { motion } from 'framer-motion';
import { AnimatedSection, Container, SectionLabel } from './ui';

const steps = [
  { label: 'Análisis', desc: 'Entendemos cómo funciona tu negocio y detectamos oportunidades.' },
  { label: 'Diseño', desc: 'Creamos el flujo completo de la automatización antes de construirla.' },
  { label: 'Automatización', desc: 'Conectamos herramientas y procesos para que la información fluya.' },
  { label: 'Pruebas', desc: 'Verificamos que todo funcione correctamente antes de implementar.' },
  { label: 'Implementación', desc: 'Configuramos el sistema y lo ponemos en funcionamiento.' },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionLabel>Qué hace LUXORA</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            No vendemos IA. <span className="text-gradient-gold">Resolvemos procesos.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Primero entendemos cómo funciona tu negocio. Después identificamos una
            tarea o proceso que pueda mejorarse y diseñamos una automatización
            adaptada a tus necesidades.
          </p>
        </AnimatedSection>

        {/* Process flow */}
        <div className="mt-20">
          {/* Desktop horizontal flow */}
          <div className="hidden lg:flex items-start justify-between">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-1 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="flex w-full flex-col items-center text-center"
                >
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-ink/10 bg-white shadow-soft">
                    <span className="font-display text-lg font-bold text-gold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-sm font-semibold uppercase tracking-wide text-ink">
                    {step.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.desc}</p>
                </motion.div>
                {i < steps.length - 1 && (
                  <div className="mt-8 flex flex-1 items-center px-2">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.12 + 0.3, ease: 'easeOut' }}
                      className="h-px w-full origin-left bg-gradient-to-r from-gold/30 to-ink/10"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile vertical flow */}
          <div className="lg:hidden">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4 pb-8 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink/10 bg-white shadow-soft">
                    <span className="font-display text-sm font-bold text-gold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {i < steps.length - 1 && <div className="mt-2 w-px flex-1 bg-ink/8" />}
                </div>
                <div className="pb-2">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
                    {step.label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
