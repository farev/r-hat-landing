import { useState } from 'react';
import WaitlistModal from '../WaitlistModal';
import { Button } from '@/components/ui/button';

export default function WaitlistModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Waitlist Modal</Button>
      <WaitlistModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
