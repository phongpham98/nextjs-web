import * as React from "react";

function SvgSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.014.953a8 8 0 000 16 8.12 8.12 0 004.928-1.67l4.353 4.39c.391.39 1.047.39 1.438 0 .39-.392.39-1.048 0-1.439l-4.383-4.36a8.089 8.089 0 001.664-4.92 8 8 0 00-8-8zm0 2a6 6 0 110 12 6 6 0 010-12z"
        fill="#66F"
      />
    </svg>
  );
}

export default SvgSearch;
