import * as React from "react";

function SvgYoutube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 35 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M34.263 3.76c-.388-1.482-1.591-2.62-3.104-3.038C28.442 0 17.5 0 17.5 0S6.596 0 3.841.722c-1.513.38-2.677 1.556-3.104 3.037C0 6.418 0 12 0 12s0 5.544.737 8.24c.388 1.482 1.591 2.62 3.104 3.039C6.558 24 17.5 24 17.5 24s10.904 0 13.659-.721c1.513-.38 2.677-1.558 3.104-3.038C35 17.582 35 12 35 12s0-5.582-.737-8.24zM14.047 17.088V6.835l9.08 5.127-9.08 5.127z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgYoutube;
