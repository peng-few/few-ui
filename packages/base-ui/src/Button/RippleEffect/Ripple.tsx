import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import clsx from 'clsx';

const rippleEndFrame = keyframes`
  from {
    opacity: 0.8;
  }
  to {
    opacity: 0;
  }
`;

const RippleInner = styled.span({
  inset: 0,
  position: 'absolute',
  backgroundColor: 'currentColor',
  borderRadius: '100%',
  '&.ripple-child--leaving': {
    animation: `${rippleEndFrame} 0.5s ease-in forwards`,
  },
});

export interface RippleProps {
  in?: boolean;
  onExited?: () => void;
  timeout: number;
  className?: string;
  size: number;
  top: number;
  left: number;
}

export const Ripple = ({
  in: isAppear,
  className,
  onExited,
  timeout,
}: RippleProps) => {
  React.useEffect(() => {
    // 要從 DOM 移除這個 ripple 的動作在 onExited，在消失動畫結束後執行
    if (!isAppear && onExited != null) {
      const timeoutId = setTimeout(() => {
        onExited();
      }, timeout);

      return () => {
        clearTimeout(timeoutId);
      };
    }
    return undefined;
  }, [onExited, isAppear, timeout]);

  return (
    <span className={className}>
      <RippleInner
        className={clsx('ripple-child', { 'ripple-child--leaving': !isAppear })}
      />
    </span>
  );
};
