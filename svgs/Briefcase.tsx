import * as React from "react";
import { SVGProps } from "react";

const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.333.994a2.667 2.667 0 0 0-2.667 2.667h-.667C1.613 3.66.503 4.725.374 6.077c.337.116 4.855 1.626 4.855 1.625.956.32 2.584.32 3.54 0 0 0 3.456-1.153 4.876-1.625A2.653 2.653 0 0 0 11 3.661h-.667A2.667 2.667 0 0 0 7.666.994H6.333Zm0 1.333h1.333c.737 0 1.333.597 1.333 1.334H5c0-.737.597-1.334 1.334-1.334Zm-6 5.146v2.855a2.667 2.667 0 0 0 2.666 2.666h8a2.667 2.667 0 0 0 2.667-2.666V7.473l-4.48 1.5c-1.23.41-3.144.41-4.374 0l-4.48-1.5Z"
      fill="#000"
    />
  </svg>
);

export default SvgBriefcase;
