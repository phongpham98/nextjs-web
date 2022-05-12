import * as React from "react";
import { SVGProps } from "react";

const SvgRelationship = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={16} cy={16} r={16} fill="#EB539F" />
    <path
      d="M15.468 21.677a2.16 2.16 0 0 1-2.767-.003c-2.716-2.292-6.172-5.07-6.172-8.602 0-2.35 1.828-4.196 4.155-4.196 1.314 0 2.576.579 3.399 1.556.823-.977 2.085-1.556 3.4-1.556 2.326 0 4.154 1.846 4.154 4.196 0 3.525-3.45 6.317-6.17 8.605Z"
      fill="#fff"
    />
    <path
      d="M23.492 22.773a2.172 2.172 0 0 1-2.701-.002c-1.519-1.227-3.183-2.69-3.183-4.497 0-1.343 1.097-2.398 2.493-2.398.788 0 1.545.33 2.04.889.493-.558 1.25-.889 2.039-.889 1.396 0 2.492 1.055 2.492 2.398 0 1.804-1.661 3.273-3.18 4.5Z"
      fill="#fff"
      stroke="#EB539F"
    />
  </svg>
);

export default SvgRelationship;
