import { Card } from '@/components/ui/card';
import { Factory, Wrench, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const useCases = [
  {
    icon: Factory,
    title: 'Manufacturing',
    items: ['Production changeovers', 'Preventive maintenance', 'Quality control checks'],
  },
  {
    icon: Wrench,
    title: 'Electrical & HVAC',
    items: ['System diagnostics', 'Installation guidance', 'Troubleshooting'],
  },
  {
    icon: FlaskConical,
    title: 'Lab & Calibration',
    items: ['Standard procedures', 'Equipment calibration', 'Safety protocols'],
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for the field
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From factory floors to lab benches, R-Hat adapts to your environment.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <TiltCard className="h-full">
                  <Card className="p-8 h-full hover-elevate transition-all duration-200 shadow-md" data-testid={`use-case-${index}`}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="p-2 bg-primary/10 rounded-lg"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-foreground">{useCase.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {useCase.items.map((item, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start gap-2 text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + idx * 0.05 }}
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
