import React from "react";
import { cx, css } from "@emotion/css";

const Close = ({ className, color = "#3e4148", ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      className={cx(
        css`
          fill: ${color};
          vertical-align: middle;
        `,
        className
      )}
      {...props}
    >
      <defs>
        <path
          id="a"
          d="m12.8925.3025c-.39-.39-1.02-.39-1.41 0l-4.89 4.88-4.89-4.89c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l4.89 4.89-4.89 4.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l4.89-4.89 4.89 4.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-4.89-4.89 4.89-4.89c.38-.38.38-1.02 0-1.4z"
        />
        <mask id="b" fill="#fff">
          <use fill="#fff" fillRule="evenodd" xlinkHref="#a" />
        </mask>
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(5.5 5.5)">
        <use fill="#1d1d1d" xlinkHref="#a" />
        <g fill={color} mask="url(#b)">
          <path d="m0 0h24v24h-24z" transform="translate(-6 -5)" />
        </g>
      </g>
    </svg>
  );
};

export default Close;
