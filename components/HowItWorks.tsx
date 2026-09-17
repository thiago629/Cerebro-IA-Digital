'use client';

import { motion } from 'framer-motion';
import { AnimatedSection, Container, SectionLabel } from './ui';

const steps = [
  { num: '01', title: 'Analizamos', desc: 'Entendemos cómo funciona actualmente tu negocio.' },
  { num: '02', title: 'Detectamos', desc: 'Encontramos una tarea repetitiva que pueda optimizarse.' },
  { num: '03', title: 'Diseñamos', desc: 'Creamos la estructura de la automatización.' },
  { num: '04', title: 'Construimos', desc: 'Conectamos herramientas, procesos e inteligencia artificial cuando sea necesario.' },
  { num: '05', title: 'Implementamos', desc: 'Probamos, configuramos y ponemos el sistema en funcionamiento.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-neutral-50 py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionLabel>Proceso</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Cómo funciona
          </h2>
        </AnimatedSection>

        <div className="mt-20">
          {/* Desktop: horizontal alternating layout */}
          <div className="hidden lg:block">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex items-center gap-8 ${i % 2 === 1 ? 'flex-row-reverse text-right' : ''}`}
              >
                <div className="w-1/2" />
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold/20 bg-white shadow-soft">
                  <span className="font-display text-sm font-bold text-gold">{step.num}</span>
                </div>
                <div className="w-1/2">
                  <h3 className="font-display text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-5 pb-10 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold/20 bg-white shadow-soft">
                    <span className="font-display text-xs font-bold text-gold">{step.num}</span>
                  </div>
                  {i < steps.length - 1 && <div className="mt-2 w-px flex-1 bg-ink/8" />}
                </div>
                <div className="pb-2">
                  <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
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
