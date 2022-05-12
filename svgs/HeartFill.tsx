import * as React from "react";
import { SVGProps } from "react";

const SvgHeartFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.498.99a5.5 5.5 0 0 0-5.5 5.5c0 3.185 1.814 6.189 4.813 8.939 1.023.938 2.125 1.76 3.218 2.5.383.258.742.492 1.063.687.196.119.325.205.406.25.302.168.698.168 1 0 .081-.045.21-.131.406-.25.321-.195.68-.43 1.063-.687 1.093-.74 2.195-1.562 3.219-2.5 2.999-2.75 4.812-5.754 4.812-8.938a5.5 5.5 0 0 0-5.5-5.5c-1.725 0-3.41.94-4.469 2.312C9.996 1.907 8.318.99 6.5.99Z"
      fill="#EB539F"
    />
  </svg>
);

export default SvgHeartFill;
