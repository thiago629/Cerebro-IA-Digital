'use client';

import { motion } from 'framer-motion';
import { AnimatedSection, Container, SectionLabel, fadeUp, staggerContainer } from './ui';

const technologies = [
  { name: 'n8n', desc: 'Orquestación de flujos' },
  { name: 'OpenAI', desc: 'Inteligencia artificial' },
  { name: 'WhatsApp Business', desc: 'Comunicación' },
  { name: 'CRM', desc: 'Gestión de clientes' },
  { name: 'Google Calendar', desc: 'Agenda y citas' },
  { name: 'Gmail / Outlook', desc: 'Correo electrónico' },
  { name: 'Webhooks', desc: 'Conexión en tiempo real' },
  { name: 'APIs', desc: 'Integración de servicios' },
];

export default function Technology() {
  return (
    <section id="technology" className="bg-white py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionLabel>Tecnología</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Tecnología que conecta tu negocio
          </h2>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-ink/8 bg-neutral-50 p-6 text-center transition-all duration-300 hover:border-gold/20 hover:bg-white hover:shadow-card"
            >
              {/* Subtle connecting line effect */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-gold/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="font-display text-base font-semibold text-ink">{tech.name}</h3>
              <p className="mt-1 text-xs text-ink-faint">{tech.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.2} className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-ink-muted">
            Seleccionamos las herramientas según las necesidades de cada proyecto.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
