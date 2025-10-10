import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero
      onRequestDemo={() => console.log('Request demo clicked')}
      onJoinWaitlist={() => console.log('Join waitlist clicked')}
    />
  );
}
