import * as React from "react";
import { SVGProps } from "react";

const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.666 1.303a.68.68 0 0 0-.48.187l-2 2-6.666 6.667a.68.68 0 0 0-.187.48v3.332c0 .368.298.667.666.667h3.334a.68.68 0 0 0 .479-.187l6.667-6.667 2-2a.68.68 0 0 0 .187-.48c0-1.838-.101-2.393-.854-3.145-.753-.753-1.307-.854-3.146-.854Zm.296 1.324c1.17.011 1.51.098 1.89.468.407.396.468.765.48 1.936-.36.36-.888.868-1.333 1.313L9.625 3.97l1.337-1.342ZM8.666 4.928l.709.708-4.71 4.708-.707-.708 4.708-4.708Zm1.666 1.667.71.708-4.71 4.708-.707-.708 4.707-4.708Zm-7.333 4 1.188 1.187 1.188 1.187-.334.334H2.666v-2.375l.333-.333Z"
      fill="#272727"
    />
  </svg>
);

export default SvgPencil;