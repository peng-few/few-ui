import { keyframes } from '@emotion/react';
import { Color } from '../styles';
import { IconProps } from './Icon.type';

export interface IconLoadProps extends IconProps {
  background?: Color;
}

const rotate = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg);
  }
`;

export const IconLoad = ({
  width = 43,
  height = 43,
  color = '#e0e4eb',
  background = '#e4e9f1',
  ...props
}: IconLoadProps) => {
  return (
    <svg
      {...props}
      css={{ animation: `${rotate} 1.2s infinite` }}
      width={width}
      height={width}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="21.5" cy="21.5" r="18.5" stroke={color} strokeWidth="6" />
      <path
        d="M9.26306 7.625C5.42237 11.0149 3 15.9745 3 21.5C3 31.7173 11.2827 40 21.5 40C31.7173 40 40 31.7173 40 21.5C40 20.7964 39.9607 20.1019 39.8842 19.4188"
        stroke={background}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default IconLoad;
