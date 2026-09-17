'use client';

import { motion } from 'framer-motion';
import { AnimatedSection, Container, SectionLabel, fadeUp, staggerContainer } from './ui';

const problems = [
  { icon: '📋', text: 'Copiar información entre herramientas' },
  { icon: '💬', text: 'Responder las mismas consultas continuamente' },
  { icon: '⌨️', text: 'Introducir datos manualmente' },
  { icon: '🏷️', text: 'Clasificar clientes' },
  { icon: '📧', text: 'Enviar emails repetitivos' },
  { icon: '📥', text: 'Organizar solicitudes' },
  { icon: '🔄', text: 'Hacer seguimientos manualmente' },
  { icon: '🔀', text: 'Mover información entre plataformas' },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-neutral-50 py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <SectionLabel>El problema</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Tu equipo no debería perder horas haciendo tareas repetitivas.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Cada negocio tiene procesos que consumen tiempo sin aportar valor
            proporcional. LUXORA identifica esos procesos y busca una forma más
            inteligente de gestionarlos.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          {problems.map((item) => (
            <motion.div
              key={item.text}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl border border-ink/8 bg-white p-6 transition-all duration-300 hover:border-gold/20 hover:shadow-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-50 text-2xl transition-colors duration-300 group-hover:bg-gold/5">
                {item.icon}
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
