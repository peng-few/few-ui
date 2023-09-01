import { IconProps } from './Icon.type';

export const IconClose = ({
  size = 25,
  width = size,
  height = size,
  color = 'currentcolor',
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
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M17 2L2 17"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconClose;
