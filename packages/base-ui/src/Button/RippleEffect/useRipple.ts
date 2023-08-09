import { RippleAction } from './RippleEffect.type';
import { useRef } from 'react';

export default function useRipple() {
  const rippleRef = useRef<RippleAction>(null);

  const handleRipple =
    (action: keyof RippleAction) => (event: React.SyntheticEvent) => {
      if (rippleRef.current) {
        rippleRef.current[action](event);
      }
    };

  const rippleEvents = {
    onMouseDown: handleRipple('start'),
    onMouseUp: handleRipple('stop'),
  };

  return { rippleRef, rippleEvents };
}
