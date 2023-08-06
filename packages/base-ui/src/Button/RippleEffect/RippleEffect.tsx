import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { Ripple } from './Ripple';

const rippleStartFrame = keyframes`
  from {
    opacity: 0.65;
    transform: scale(0)
  }
  to {
    transform: scale(1);
    transition: opacity 0.3s;
    opacity: 0.3;
  }
`;

const PositionedRipple = styled(Ripple)((props) => ({
  width: props.size ?? 0,
  height: props.size ?? 0,
  position: 'absolute',
  top: props.top ?? 0,
  left: props.left ?? 0,
  animation: `${rippleStartFrame} 0.5s ease forwards`,
}));

const Container = styled.span({
  inset: 0,
  position: 'absolute',
  left: 0,
  top: 0,
  pointerEvents: 'none',
  overflow: 'hidden',
});

export interface RippleAction {
  start(event: React.SyntheticEvent): void;
  stop(): void;
}

export const RippleEffect = React.forwardRef<RippleAction>((_, ref) => {
  const [ripples, setRipples] = useState<React.ReactNode[]>([]);
  const container = useRef<HTMLSpanElement>(null);
  const [id, setId] = useState(0);

  const start = (event: React.MouseEvent) => {
    const rect = container.current
      ? container.current.getBoundingClientRect()
      : { top: 0, left: 0, width: 0, height: 0 };

    const size = Math.max(rect.width, rect.height) * 2;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop || 0;
    const top = event.pageY - rect.top - scrollTop - size / 2;
    const left = event.pageX - rect.left - document.body.scrollTop - size / 2;

    setRipples((oldRipples) => {
      return [
        ...oldRipples,
        // 不能用 Transition 因為會移除到還在消失動畫中的ripple
        <PositionedRipple
          top={top}
          left={left}
          size={size}
          key={id}
          timeout={550}
        />,
      ];
    });
    setId(id + 1);
  };

  const stop = () => {
    setRipples((oldRipples) => oldRipples.slice(1));
  };

  React.useImperativeHandle(ref, () => ({
    start,
    stop,
  }));

  return (
    <Container ref={container}>
      <TransitionGroup timeout={550} component={null} exit>
        {ripples}
      </TransitionGroup>
    </Container>
  );
});

RippleEffect.displayName = 'RippleEffect';
