import * as React from "react";

function SvgChatSquare(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4.01 2.666a2.667 2.667 0 00-2.667 2.667v4a2.667 2.667 0 002.666 2.666h1.709l1.812 1.813c.26.26.677.26.938 0l1.833-1.813h1.708a2.667 2.667 0 002.667-2.666v-4a2.667 2.667 0 00-2.667-2.667h-8zm0 1.333h8c.736 0 1.333.597 1.333 1.334v4c0 .736-.597 1.333-1.334 1.333h-2a.68.68 0 00-.479.187l-1.52 1.521-1.521-1.52a.676.676 0 00-.48-.188h-2a1.333 1.333 0 01-1.333-1.333v-4c0-.737.597-1.334 1.333-1.334z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChatSquare;
