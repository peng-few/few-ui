import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { Ripple } from './Ripple';
import { ContainerRect, RippleAction } from './RippleEffect.type';

const TIMEOUT = 550;
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

export const PositionedRipple = styled(Ripple)((props) => ({
  width: props.size,
  height: props.size,
  position: 'absolute',
  top: props.top,
  left: props.left,
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

export function getRippleRect(
  target: HTMLElement | null,
  { pageX, pageY }: React.MouseEvent,
) {
  const rect: ContainerRect = target
    ? target.getBoundingClientRect()
    : { top: 0, left: 0, width: 0, height: 0 };

  const size = Math.max(rect.width, rect.height) * 2;
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop || 0;
  const top = pageY - rect.top - scrollTop - size / 2;
  const left = pageX - rect.left - document.body.scrollTop - size / 2;

  return { size, top, left };
}

export const RippleEffect = React.forwardRef<RippleAction>((_, ref) => {
  const [ripples, setRipples] = useState<React.ReactNode[]>([]);
  const container = useRef<HTMLSpanElement>(null);
  const [id, setId] = useState(0);

  const start = (event: React.MouseEvent) => {
    const { size, top, left } = getRippleRect(container.current, event);

    setRipples((oldRipples) => {
      return [
        ...oldRipples,
        // 不能用 Transition 因為會移除到還在消失動畫中的ripple
        <PositionedRipple
          top={top}
          left={left}
          size={size}
          key={id}
          timeout={TIMEOUT}
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
      <TransitionGroup timeout={TIMEOUT} component={null} exit>
        {ripples}
      </TransitionGroup>
    </Container>
  );
});

RippleEffect.displayName = 'RippleEffect';
