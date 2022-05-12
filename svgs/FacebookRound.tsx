import * as React from "react";

function SvgFacebookRound(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 56 56"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={28} cy={28} r={28} fill="currentColor" />
      <path
        d="M36.653 38.762l1.092-7.002h-6.842v-4.561c0-1.903.946-3.77 4.003-3.77H38v-5.962S35.198 17 32.504 17c-5.604 0-9.244 3.34-9.244 9.409v5.35H17v7.003h6.26v16.95c1.237.18 2.548.288 3.821.288 1.31 0 2.585-.108 3.822-.287v-16.95h5.75z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgFacebookRound;
