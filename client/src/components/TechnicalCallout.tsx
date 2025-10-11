import { Card } from '@/components/ui/card';
import { WifiOff, Lock, Settings, Plug } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const features = [
  { icon: WifiOff, label: 'Offline modes' },
  { icon: Lock, label: 'Privacy-first video' },
  { icon: Settings, label: 'Admin console' },
  { icon: Plug, label: 'API hooks' },
];

export default function TechnicalCallout() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <Card className="p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Built for industry
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Enterprise-grade infrastructure designed for demanding environments.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="flex flex-col items-center gap-3" 
                    data-testid={`tech-feature-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="p-3 bg-primary/10 rounded-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <p className="text-sm font-medium text-foreground text-center">{feature.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
