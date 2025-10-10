import { Card } from '@/components/ui/card';
import { Factory, Wrench, FlaskConical } from 'lucide-react';

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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for the field
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From factory floors to lab benches, R-Hat adapts to your environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card key={index} className="p-8 hover-elevate transition-all duration-200" data-testid={`use-case-${index}`}>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{useCase.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {useCase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
