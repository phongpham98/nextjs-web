import * as React from "react";

function SvgPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0a1.2 1.2 0 011.2 1.2v3.6h3.6a1.2 1.2 0 110 2.4H7.2v3.6a1.2 1.2 0 11-2.4 0V7.2H1.2a1.2 1.2 0 010-2.4h3.6V1.2A1.2 1.2 0 016 0z"
        fill="#DEDEDE"
      />
    </svg>
  );
}

export default SvgPlus;
