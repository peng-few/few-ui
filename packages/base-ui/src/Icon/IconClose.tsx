import { IconProps } from './Icon.type';

export const IconClose = ({
  width = 25,
  height = 25,
  color = 'white',
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.63672 18.3643L18.3646 5.63634"
        stroke={color}
        stroke-width="2.5"
        stroke-linecap="round"
      />
      <path
        d="M5.63672 5.63623L18.3646 18.3642"
        stroke={color}
        stroke-width="2.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
