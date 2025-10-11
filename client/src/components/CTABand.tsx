import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface CTABandProps {
  onRequestDemo: () => void;
}

export default function CTABand({ onRequestDemo }: CTABandProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <motion.div 
            className="bg-gradient-to-br from-primary to-accent rounded-2xl p-12 md:p-20 text-center shadow-xl overflow-hidden relative"
            style={{ perspective: 1000 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
                backgroundSize: '24px 24px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '24px 24px']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            <div className="relative z-10">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Bring AI to the bench, bay, and field.
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                See how R-Hat can transform your team's efficiency and accuracy.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={onRequestDemo}
                  className="gap-2 bg-white text-primary hover:bg-white/90"
                  data-testid="button-request-demo-cta"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
