'use client';

import { motion } from 'framer-motion';
import { Container, AnimatedSection, SectionLabel } from './ui';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-neutral-50 py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-48 w-48 rounded-full bg-gold/5 blur-3xl" />

      <Container>
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <SectionLabel>Sobre LUXORA</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Sobre LUXORA
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 space-y-6"
            >
              <p className="text-lg leading-relaxed text-ink-muted">
                LUXORA nace con una idea sencilla: la tecnología debería hacer que las
                empresas trabajen mejor, no complicarlas más.
              </p>
              <p className="text-lg leading-relaxed text-ink-muted">
                Analizamos procesos, conectamos herramientas y diseñamos automatizaciones
                personalizadas para reducir trabajo manual y ahorrar tiempo.
              </p>
            </motion.div>

            {/* Brand concept */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 rounded-2xl border border-ink/8 bg-white p-8"
            >
              <p className="font-display text-2xl font-bold leading-snug text-ink">
                Automatiza el trabajo.
                <br />
                <span className="text-gradient-gold">Recupera el tiempo.</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                LUXORA diseña automatizaciones inteligentes para empresas que quieren
                trabajar de forma más eficiente.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
