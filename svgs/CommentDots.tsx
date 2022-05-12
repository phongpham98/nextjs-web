import * as React from "react";
import { SVGProps } from "react";

const SvgCommentDots = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 40 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.526.662A7.667 7.667 0 0 0 .859 8.33v23c0 1.708 2.088 2.586 3.295 1.378l7.128-5.211h20.244a7.667 7.667 0 0 0 7.667-7.667V8.33A7.667 7.667 0 0 0 31.526.662h-23Zm6.708 9.584c1.403.002 2.584.954 2.875 2.756.435 2.69-.165 4.564-1.677 6.467a.906.906 0 0 1-1.316.12c-.403-.344-.466-.975-.121-1.377.598-.698 1.02-1.425 1.257-2.396a2.82 2.82 0 0 1-1.018.18 2.876 2.876 0 0 1 0-5.75Zm9.584 0c1.403.002 2.583.954 2.875 2.756.435 2.69-.165 4.564-1.677 6.467a.906.906 0 0 1-1.317.12c-.403-.344-.466-.975-.12-1.377.597-.698 1.019-1.425 1.256-2.396a2.82 2.82 0 0 1-1.017.18 2.876 2.876 0 0 1 0-5.75Z"
      fill="#000"
    />
  </svg>
);

export default SvgCommentDots;