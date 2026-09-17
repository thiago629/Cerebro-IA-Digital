import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import WhatWeDo from '@/components/WhatWeDo';
import SmartAutomation from '@/components/SmartAutomation';
import WhatsIncluded from '@/components/WhatsIncluded';
import HowItWorks from '@/components/HowItWorks';
import Demos from '@/components/Demos';
import Sectors from '@/components/Sectors';
import Technology from '@/components/Technology';
import Trust from '@/components/Trust';
import Philosophy from '@/components/Philosophy';
import FinalCTA from '@/components/FinalCTA';
import ContactForm from '@/components/ContactForm';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <WhatWeDo />
        <SmartAutomation />
        <WhatsIncluded />
        <HowItWorks />
        <Demos />
        <Sectors />
        <Technology />
        <Trust />
        <Philosophy />
        <FinalCTA />
        <ContactForm />
        <About />
      </main>
      <Footer />
    </>
  );
}
