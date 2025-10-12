import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

interface HeroProps {
  onRequestDemo: () => void;
}

export default function Hero({ onRequestDemo }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
        style={{ y }}
      >
        <motion.div 
          className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                             linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            y: useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
          }} 
        />
      </motion.div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32"
        style={{ opacity }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <ScrollReveal>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight" data-testid="text-hero-headline">
                  AI for hands-on engineers.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-hero-subheadline">
                  Wearable AR guidance that highlights the right step, right where you're looking.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={onRequestDemo} className="gap-2" data-testid="button-request-demo-hero">
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3} direction="left">
            <TiltCard className="relative" intensity={10}>
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-border shadow-lg">
                <img 
                  src="/r-hat-device.jpg" 
                  alt="R-Hat AR wearable device" 
                  className="w-full h-full object-cover"
                />
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </motion.div>
    </section>
  );
}
