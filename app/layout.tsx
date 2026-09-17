import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LUXORA — Smart Automation for Modern Businesses',
  description:
    'LUXORA diseña automatizaciones inteligentes para empresas que quieren ahorrar tiempo, reducir tareas manuales y organizar mejor sus procesos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
