'use client';

import { motion } from 'framer-motion';
import { Container } from './ui';

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden bg-white py-24 lg:py-36">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl font-bold leading-[1.2] tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Automatizar no significa sustituir personas.
            <br />
            <span className="text-gradient-gold">Significa liberar su tiempo.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted"
          >
            Las personas deberían dedicar su tiempo a atender clientes, vender, crear,
            decidir y hacer crecer el negocio. Las tareas repetitivas que pueden
            gestionarse automáticamente no deberían consumir horas del equipo.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
