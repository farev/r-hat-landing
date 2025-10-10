import { Card } from '@/components/ui/card';
import { WifiOff, Lock, Settings, Plug } from 'lucide-react';

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
                <div key={index} className="flex flex-col items-center gap-3" data-testid={`tech-feature-${index}`}>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground text-center">{feature.label}</p>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}
