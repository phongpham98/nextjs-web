import * as React from "react";

function SvgInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.998.99a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5v-8a5 5 0 00-5-5h-8zm0 2h8a3 3 0 013 3v8a3 3 0 01-3 3h-8a3 3 0 01-3-3v-8a3 3 0 013-3zm8 2A1 1 0 1014 6.992a1 1 0 000-2zm-4 1a4 4 0 100 8.001 4 4 0 000-8zm0 2a2 2 0 11.001 4 2 2 0 010-4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgInstagram;
