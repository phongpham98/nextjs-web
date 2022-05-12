import * as React from "react";
import { SVGProps } from "react";

const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 7 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.633.666a.5.5 0 0 0-.707.707l.707-.707Zm4.235 4.942.354.354a.5.5 0 0 0 0-.707l-.354.353ZM.926 9.844a.5.5 0 1 0 .707.707l-.707-.707Zm0-8.47 4.589 4.588.707-.707L1.632.666l-.706.707Zm4.589 3.88-4.59 4.59.708.707 4.589-4.59-.707-.706Z"
      fill="#fff"
    />
  </svg>
);

export default SvgChevronRight;
