import * as React from "react";

function SvgArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 15 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.116 24.884a1.25 1.25 0 001.768-1.768l-1.768 1.768zM2 13l-.884-.884a1.25 1.25 0 000 1.768L2 13zM13.884 2.884a1.25 1.25 0 00-1.768-1.768l1.768 1.768zm0 20.232l-11-11-1.768 1.768 11 11 1.768-1.768zm-11-9.232l11-11-1.768-1.768-11 11 1.768 1.768z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowLeft;
