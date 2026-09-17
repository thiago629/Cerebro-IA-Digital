'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

/* ── Animation variants ────────────────────────────── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ── AnimatedSection ─ scroll-triggered fade-up ────── */
export function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Container ─ max-width wrapper ──────────────────── */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${className ?? ''}`}>
      {children}
    </div>
  );
}

/* ── SectionLabel � small eyebrow text ──────────────── */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
      {children}
    </span>
  );
}

/* ── Button ─ anchor-based CTA ─────────────────────── */
type ButtonVariant = 'primary' | 'outline' | 'gold';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-ink text-white hover:bg-ink-soft hover:shadow-lg hover:shadow-ink/10',
  outline:
    'border border-ink/15 text-ink hover:border-ink/30 hover:bg-ink/[0.02]',
  gold: 'bg-gradient-to-r from-gold-dark to-gold text-white hover:shadow-lg hover:shadow-gold/20',
};

export function Button({
  children,
  href = '#',
  variant = 'primary',
  className,
}: {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${variantClasses[variant]} ${className ?? ''}`}
    >
      {children}
    </a>
  );
}
