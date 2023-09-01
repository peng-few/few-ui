import { IconProps } from './Icon.type';

export const IconSearch = ({
  width = 25,
  height = 25,
  color = 'currentcolor',
  ...props
}: IconProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 27.328 27.328"
    >
      <g
        id="Group_12253"
        data-name="Group 12253"
        transform="translate(1852 279)"
      >
        <g
          id="Group_12252"
          data-name="Group 12252"
          transform="translate(2585 -1850)"
        >
          <g
            id="Ellipse_860"
            data-name="Ellipse 860"
            transform="translate(-4437 1571)"
            fill="none"
            stroke={color}
            strokeWidth="3"
          >
            <circle cx="11.5" cy="11.5" r="11.5" stroke="none" />
            <circle cx="11.5" cy="11.5" r="9.5" fill="none" />
          </g>
          <line
            id="Line_166"
            data-name="Line 166"
            x1="6"
            y1="6"
            transform="translate(-4418.5 1589.5)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeWidth="3"
          />
        </g>
      </g>
    </svg>
  );
};

export default IconSearch;
