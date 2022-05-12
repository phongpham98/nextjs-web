import * as React from "react";

function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.014-.001c-5.523 0-10 4.477-10 10 0 4.815 3.445 8.889 8.001 9.805v-6.805h-2v-3h2v-3a3.007 3.007 0 013-3h3v3h-2a1.01 1.01 0 00-1 1v2h3l-1 3h-2l.006 6.962c5.032-.522 8.993-4.792 8.993-9.962 0-5.523-4.477-10-10-10z"
        fill="#030303"
      />
    </svg>
  );
}

export default SvgFacebook;
