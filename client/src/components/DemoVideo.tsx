import { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
import { Button } from './ui/button';

export default function DemoVideo() {
  const videos = [
    {
      id: 'Bzl6oHfrMh0',
      embedUrl: 'https://www.youtube.com/embed/Bzl6oHfrMh0?si=uEGicXmpQ7REvaHe',
      externalUrl: 'https://youtu.be/Bzl6oHfrMh0?si=uEGicXmpQ7REvaHe',
      subtitle: 'Agentic Visual System',
      headline: 'A visual agent that sees what you see.',
      description:
        'R-Hat’s agentic vision detects, recognizes, and tracks the objects in front of you in real time—so guidance is always anchored to your workspace.',
      callouts: [
        {
          label: 'Real-time object awareness',
          description: 'Understands tools, components, and connectors as you move and work.',
          dotClass: 'bg-primary',
        },
        {
          label: 'Anchored overlays',
          description: 'Highlights stay locked to the right part, even while you change angles or distance.',
          dotClass: 'bg-accent',
        },
      ],
    },
    {
      id: 'YGgfB-3kMe4',
      embedUrl: 'https://www.youtube.com/embed/YGgfB-3kMe4',
      externalUrl: 'https://www.youtube.com/watch?v=YGgfB-3kMe4',
      subtitle: 'Full Demo',
      headline: 'End-to-end field workflow.',
      description:
        'Follow a full procedure with AR overlays, auto-captured evidence, and checklists synced for the back office.',
      callouts: [
        {
          label: 'Checklist + proof',
          description: 'Every step is verified with video and metadata—no extra taps needed.',
          dotClass: 'bg-primary',
        },
        {
          label: 'Edge AI context',
          description: 'Understands orientation, components, and hazards to adapt instructions live.',
          dotClass: 'bg-accent',
        },
      ],
    },
  ];

  const [active, setActive] = useState(0);
  const activeVideo = videos[active];

  const next = () => setActive((prev) => (prev + 1) % videos.length);
  const prev = () => setActive((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1.05fr,0.95fr] gap-12 items-center">
          <ScrollReveal className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
              Watch the build
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVideo.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {activeVideo.headline}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {activeVideo.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  {activeVideo.callouts.map((callout, idx) => (
                    <div key={idx} className="space-y-2">
                      <p className="flex items-center gap-2 text-foreground font-medium">
                        <span className={`w-2 h-2 rounded-full ${callout.dotClass}`} />
                        {callout.label}
                      </p>
                      <p className="leading-relaxed">{callout.description}</p>
                    </div>
                  ))}
                </div>
                <Button asChild variant="ghost" className="w-fit gap-2 px-0">
                  <a
                    href={activeVideo.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Open in YouTube
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.1}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVideo.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard className="relative">
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-lg bg-black">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-accent/20 pointer-events-none" />
                    <iframe
                      src={activeVideo.embedUrl}
                      title="R-Hat product demo"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                    <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none" />
                  </div>
                </TiltCard>
                <p className="mt-4 text-center text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {activeVideo.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="h-10 w-10 rounded-full border border-border bg-background text-foreground shadow-sm hover-elevate"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-5 h-5 mx-auto" />
          </button>
          <div className="flex items-center gap-2">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  active === index ? 'w-10 bg-primary' : 'w-6 bg-muted'
                }`}
                aria-label={`Go to ${video.subtitle}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="h-10 w-10 rounded-full border border-border bg-background text-foreground shadow-sm hover-elevate"
            aria-label="Next video"
          >
            <ChevronRight className="w-5 h-5 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
}
