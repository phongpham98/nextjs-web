import * as React from "react";

function SvgArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 21 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.014 5.989a1 1 0 011-1h14v-4l5 5-5 5v-4h-14a1 1 0 01-1-1z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgArrowRight;
