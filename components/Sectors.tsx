'use client';

import { motion } from 'framer-motion';
import { AnimatedSection, Container, SectionLabel, fadeUp, staggerContainer } from './ui';

const sectors = [
  'Hoteles',
  'Inmobiliarias',
  'Automoción',
  'Clínicas',
  'Charter',
  'Restaurantes',
  'Servicios profesionales',
  'Otros negocios',
];

export default function Sectors() {
  return (
    <section id="sectors" className="bg-neutral-50 py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionLabel>Sectores</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Automatización adaptada a tu negocio.
          </h2>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3 sm:gap-4"
        >
          {sectors.map((sector) => (
            <motion.span
              key={sector}
              variants={fadeUp}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-full border border-ink/10 bg-white px-6 py-3 text-sm font-medium text-ink-soft shadow-soft transition-all duration-300 hover:border-gold/20 hover:text-ink"
            >
              {sector}
            </motion.span>
          ))}
        </motion.div>

        <AnimatedSection delay={0.2} className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-ink-muted">
            No utilizamos una automatización idéntica para todas las empresas. El sistema
            se adapta al proceso que realmente necesita mejorar cada negocio.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
