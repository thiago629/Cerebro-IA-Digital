'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection, Container, SectionLabel } from './ui';

const formFields = [
  { name: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Tu nombre' },
  { name: 'empresa', label: 'Empresa', type: 'text', placeholder: 'Nombre de tu empresa' },
  { name: 'sector', label: 'Sector', type: 'text', placeholder: 'Ej. Hotel, Inmobiliaria...' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'tu@email.com' },
  { name: 'telefono', label: 'Teléfono / WhatsApp', type: 'tel', placeholder: '+34 ...' },
  { name: 'web', label: 'Página web', type: 'url', placeholder: 'https://...' },
  { name: 'herramientas', label: 'Herramientas que utiliza actualmente', type: 'text', placeholder: 'CRM, WhatsApp, Excel...' },
];

const textAreas = [
  { name: 'tareaTiempo', label: '¿Cuál es la tarea que más tiempo consume en tu negocio?', placeholder: 'Describe la tarea...' },
  { name: 'automatizar', label: '¿Qué proceso te gustaría automatizar?', placeholder: 'Describe el proceso...' },
  { name: 'consultas', label: '¿Cuántas consultas recibe aproximadamente?', placeholder: 'Ej. 50 al día, 200 a la semana...' },
  { name: 'gestionClientes', label: '¿Cómo gestiona actualmente sus clientes?', placeholder: 'Describe tu método actual...' },
  { name: 'resultado', label: '¿Qué resultado espera conseguir?', placeholder: 'Describe el resultado esperado...' },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <AnimatedSection className="text-center">
            <SectionLabel>Contacto</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              LUXORA Business Automation Audit
            </h2>
            <p className="mt-4 text-sm text-ink-muted">
              Cuéntanos sobre tu negocio y analizaremos qué proceso podría automatizarse.
            </p>
          </AnimatedSection>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 rounded-3xl border border-gold/15 bg-gold/5 p-10 text-center"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                <svg className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">¡Gracias! Hemos recibido tu solicitud.</h3>
              <p className="mt-2 text-sm text-ink-muted">
                Te contactaremos en breve para analizar tu negocio y las oportunidades de automatización.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {formFields.map((field) => (
                  <div key={field.name} className={field.name === 'herramientas' ? 'sm:col-span-2' : ''}>
                    <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium text-ink-soft">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.name !== 'web' && field.name !== 'herramientas'}
                      className="w-full rounded-xl border border-ink/10 bg-neutral-50 px-4 py-3 text-sm text-ink outline-none transition-all duration-200 placeholder:text-ink-faint focus:border-gold/30 focus:bg-white focus:ring-2 focus:ring-gold/10"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-5">
                {textAreas.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium text-ink-soft">
                      {field.label}
                    </label>
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={3}
                      placeholder={field.placeholder}
                      required={field.name !== 'consultas' && field.name !== 'gestionClientes'}
                      className="w-full resize-none rounded-xl border border-ink/10 bg-neutral-50 px-4 py-3 text-sm text-ink outline-none transition-all duration-200 placeholder:text-ink-faint focus:border-gold/30 focus:bg-white focus:ring-2 focus:ring-gold/10"
                    />
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-ink px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-ink-soft hover:shadow-lg hover:shadow-ink/10 hover:-translate-y-0.5"
                >
                  Enviar análisis
                </button>
                <p className="mt-4 text-center text-xs text-ink-faint">
                  La información se utilizará únicamente para analizar las necesidades de automatización del negocio.
                </p>
              </div>
            </motion.form>
          )}
        </div>
      </Container>
    </section>
  );
}
