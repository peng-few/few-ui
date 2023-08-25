import { IconProps } from './Icon.type';

export const IconClose = ({
  width = 25,
  height = 25,
  color = '#e0e4eb',
  ...props
}: IconProps) => {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L17 17"
        stroke={color}
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M17 2L2 17"
        stroke={color}
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default IconClose;
