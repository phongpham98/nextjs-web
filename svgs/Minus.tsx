import * as React from "react";

function SvgMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.075a1.2 1.2 0 011.2-1.2h9.6a1.2 1.2 0 110 2.4H1.2a1.2 1.2 0 01-1.2-1.2z"
        fill="#FAFAFA"
      />
    </svg>
  );
}

export default SvgMinus;
