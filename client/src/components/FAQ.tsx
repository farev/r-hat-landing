import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How does R-Hat recognize parts and tools?',
    answer: 'R-Hat uses advanced computer vision and edge AI to identify components in real-time. The system has been trained on thousands of industrial parts and continues to learn from your specific environment.',
  },
  {
    question: 'Does it work offline?',
    answer: 'Yes. R-Hat is designed for environments where connectivity may be limited. Core guidance features work offline, with optional cloud sync for updates and analytics.',
  },
  {
    question: 'How long does the battery last?',
    answer: 'The R-Hat system provides 8-10 hours of continuous use on a single charge, suitable for a full work shift. Fast charging enables 50% charge in under 30 minutes.',
  },
  {
    question: 'Can I create custom procedures?',
    answer: 'Absolutely. The admin console allows you to capture expert workflows, create step-by-step procedures, and deploy them across your team. No coding required.',
  },
  {
    question: 'What safety features are included?',
    answer: 'R-Hat includes real-time safety checks, hazard warnings, and compliance verification. The system can be configured to enforce safety protocols and log completion for audit trails.',
  },
  {
    question: 'How do I get started?',
    answer: 'Request a demo to see R-Hat in action with your specific use case. Our team will work with you to pilot the system and measure impact before full deployment.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6" data-testid={`faq-item-${index}`}>
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
