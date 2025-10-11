import { Card } from '@/components/ui/card';
import { Target, Shield, Zap, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const values = [
  {
    icon: Target,
    title: 'On-the-spot guidance',
    description: 'Reduce guesswork with step-by-step overlays and tool recognition.',
  },
  {
    icon: Shield,
    title: 'Fewer errors',
    description: 'Real-time checks catch mis-wires, missing fasteners, and unsafe steps.',
  },
  {
    icon: Zap,
    title: 'Faster training',
    description: 'Turn expert workflows into repeatable, auditable procedures.',
  },
  {
    icon: MapPin,
    title: 'Works where you work',
    description: 'From factory floors to field service, online or offline.',
  },
];

export default function ValueProps() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real-time AI assistance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            R-Hat brings intelligence to your workflow without pulling you away from the task at hand.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <TiltCard className="h-full">
                  <Card
                    className="p-8 h-full hover-elevate transition-all duration-200 shadow-md"
                    data-testid={`card-value-${index}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
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
