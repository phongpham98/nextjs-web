import * as React from "react";

function SvgIconMenuMobile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="icon-menu-mobile_svg__a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={3}
        y={6}
        width={18}
        height={12}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 8V6h18v2H3zm0 5h18v-2H3v2zm0 5h18v-2H3v2z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#icon-menu-mobile_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h24v24H0V0z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default SvgIconMenuMobile;
