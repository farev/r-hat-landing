import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import HowItWorks from '@/components/HowItWorks';
import DemoVideo from '@/components/DemoVideo';
import UseCases from '@/components/UseCases';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation onRequestDemo={() => setDemoModalOpen(true)} />
      <Hero onRequestDemo={() => setDemoModalOpen(true)} />
      <ValueProps />
      <HowItWorks />
      <DemoVideo />
      <UseCases />
      <FAQ />
      <CTABand onRequestDemo={() => setDemoModalOpen(true)} />
      <Footer />

      <DemoModal open={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}
