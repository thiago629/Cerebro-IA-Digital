'use client';

import { motion } from 'framer-motion';
import { AnimatedSection, Container, Button } from './ui';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-neutral-50 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <Container>
        <AnimatedSection className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Descubre qué podría automatizarse en tu negocio.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Cuéntanos cómo trabajas actualmente y analizaremos qué proceso podría
            tener sentido automatizar.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="#contact" variant="primary">
              Solicitar Business Automation Audit
            </Button>
            <Button href="#demos" variant="outline">
              Ver demostraciones
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-sm font-medium text-ink-faint"
          >
            LUXORA Smart Automation — 250 €
          </motion.p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
