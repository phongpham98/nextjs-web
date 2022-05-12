import * as React from "react";
import { SVGProps } from "react";

const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 7 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.368 10.55a.5.5 0 1 0 .707-.706l-.707.707ZM1.132 5.609.78 5.255a.5.5 0 0 0 0 .707l.353-.354Zm4.943-4.235a.5.5 0 1 0-.707-.707l.707.707Zm0 8.47-4.59-4.588-.706.707 4.589 4.589.707-.707Zm-4.59-3.881 4.59-4.589-.707-.707-4.59 4.589.708.707Z"
      fill="#fff"
    />
  </svg>
);

export default SvgChevronLeft;
