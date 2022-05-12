import * as React from "react";

function SvgCircleSolid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="circle"
      className="circle-solid_svg__svg-inline--fa circle-solid_svg__fa-circle circle-solid_svg__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
      />
    </svg>
  );
}

export default SvgCircleSolid;
