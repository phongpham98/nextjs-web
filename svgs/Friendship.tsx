import * as React from "react";
import { SVGProps } from "react";

const SvgFriendship = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={16} cy={16} r={16} fill="#9D75EF" />
    <path
      d="M15.18 7.666a.844.844 0 0 0-.599.234c-.13.131-.054.096-.52.47-.827.662-1.208 1.342-1.327 2.63h-2.549a.833.833 0 0 0-.832.833v5.729c0 2.218 1.22 4.12 2.887 5.104h-1.222a.833.833 0 0 0 0 1.667h9.988a.833.833 0 0 0 0-1.667h-1.249c1.758-1.038 2.914-2.974 2.914-5A3.331 3.331 0 0 0 26 14.333c0-1.841-1.49-3.334-3.33-3.334h-4.083c.073-.646.212-.976.65-1.328.542-.434.506-.377.703-.572a.859.859 0 0 0 0-1.199.844.844 0 0 0-.599-.234.844.844 0 0 0-.598.234c-.13.131-.054.096-.52.47-.821.657-1.182 1.359-1.3 2.63h-2.498c.075-.656.208-.974.65-1.329.542-.434.507-.377.703-.572a.859.859 0 0 0 0-1.199.843.843 0 0 0-.598-.234Zm7.49 5c.92 0 1.665.746 1.665 1.667 0 .92-.745 1.666-1.664 1.666v-3.333Z"
      fill="#fff"
    />
  </svg>
);

export default SvgFriendship;
