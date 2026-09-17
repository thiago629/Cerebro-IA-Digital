'use client';

import { Container } from './ui';

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Cómo funciona', href: '#how-it-works' },
  { label: 'Soluciones', href: '#smart-automation' },
  { label: 'Demostraciones', href: '#demos' },
  { label: 'Sobre LUXORA', href: '#about' },
  { label: 'Contacto', href: '#contact' },
  { label: 'Privacidad', href: '#' },
  { label: 'Cookies', href: '#' },
  { label: 'Aviso legal', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-white">
      <Container className="py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-display text-xl font-bold tracking-tight text-ink">LUXORA</p>
            <p className="mt-2 text-sm text-ink-muted">Smart Automation for Modern Businesses</p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-ink/5 pt-8">
          <p className="text-center text-xs text-ink-faint">
            © 2026 LUXORA. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
