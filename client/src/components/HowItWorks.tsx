import { Camera, Brain, Eye, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const steps = [
  {
    icon: Camera,
    title: 'Capture',
    description: 'Camera + IMU stream captures your work environment in real-time.',
  },
  {
    icon: Brain,
    title: 'Understand',
    description: 'On-device/edge AI interprets the scene and understands your intent.',
  },
  {
    icon: Eye,
    title: 'Guide',
    description: 'AR highlights + voiced instructions show what to do next. Auto-log completion.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps from vision to action.
          </p>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={index} delay={index * 0.15} className="relative" data-testid={`step-${index}`}>
                  <TiltCard className="h-full">
                    <div className="bg-background rounded-lg p-8 border border-border h-full hover-elevate transition-all duration-200 shadow-md">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <motion.div 
                          className="w-16 h-16 bg-primary rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-8 h-8 text-primary-foreground" />
                        </motion.div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.15 }}
                    >
                      <ArrowRight className="w-8 h-8 text-primary" />
                    </motion.div>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
