import * as React from "react";

function SvgLinkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.64 16V5.488H.372V16h3.27zM1.989 4.082c1.055 0 1.899-.879 1.899-1.934 0-1.02-.844-1.863-1.899-1.863C.968.285.125 1.13.125 2.148c0 1.055.844 1.934 1.863 1.934zM15.84 16h.035v-5.766c0-2.812-.633-4.992-3.938-4.992-1.582 0-2.636.88-3.093 1.688h-.035V5.488h-3.13V16h3.27v-5.203c0-1.371.246-2.672 1.934-2.672 1.687 0 1.723 1.547 1.723 2.777V16h3.234z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgLinkedin;
