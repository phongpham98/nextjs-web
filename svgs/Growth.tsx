import * as React from "react";
import { SVGProps } from "react";

const SvgGrowth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 73 73"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.994.963a4 4 0 0 0-4 4v52c0 8.836 7.164 16 16 16h52c2.208 0 4-1.792 4-4s-1.792-4-4-4h-52c-4.418 0-8-3.58-8-8v-52a4 4 0 0 0-4-4Zm40 8v8h14.248L48.118 28.087c-.36.364-1.484.876-2 .876H39.87c-2.636 0-5.888 1.26-7.752 3.124l-14 14c-1.561 1.564-1.561 4.188 0 5.752.782.78 1.853 1.124 2.876 1.124 1.024 0 2.094-.344 2.875-1.124l14.001-14c.36-.364 1.484-.876 2-.876h6.248c2.636 0 5.888-1.26 7.752-3.124l11.124-11.124v14.248h8v-24c0-2.208-1.792-4-4-4h-24Z"
      fill="#fff"
    />
  </svg>
);

export default SvgGrowth;
