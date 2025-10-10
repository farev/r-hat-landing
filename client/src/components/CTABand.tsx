import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTABandProps {
  onRequestDemo: () => void;
}

export default function CTABand({ onRequestDemo }: CTABandProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-12 md:p-20 text-center shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Bring AI to the bench, bay, and field.
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            See how R-Hat can transform your team's efficiency and accuracy.
          </p>
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
        </div>
      </div>
    </section>
  );
}
