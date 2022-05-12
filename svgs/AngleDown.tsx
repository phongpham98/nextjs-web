import * as React from "react";

function SvgAngleDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.234.834a.8.8 0 011.131 0L4 3.47 6.634.834a.8.8 0 111.131 1.132l-3.2 3.2a.8.8 0 01-1.13 0l-3.2-3.2a.8.8 0 010-1.132z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgAngleDown;
