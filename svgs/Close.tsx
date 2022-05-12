import * as React from "react";

function SvgClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.907.185C1.502.185 1.08.32.77.629a1.63 1.63 0 000 2.277l9.946 9.945-9.946 9.945a1.63 1.63 0 000 2.277 1.63 1.63 0 002.277 0l9.945-9.945 9.945 9.945a1.63 1.63 0 002.276 0 1.63 1.63 0 000-2.277l-9.945-9.945 9.945-9.945a1.63 1.63 0 000-2.277c-.309-.308-.733-.444-1.138-.444-.405 0-.829.136-1.138.444l-9.945 9.945L3.046.63C2.736.321 2.313.185 1.907.185z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgClose;
