import * as React from "react";

function SvgYellowStarFill(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10.024.441c-.57 0-1.154.355-1.499 1.062L6.401 5.876l-4.841.687C.003 6.78-.501 8.307.623 9.405L4.12 12.81l-.812 4.78c-.267 1.546 1.016 2.481 2.405 1.748.537-.284 3.297-1.714 4.31-2.249l4.31 2.25c1.391.732 2.678-.202 2.405-1.75l-.843-4.779 3.498-3.405c1.13-1.094.652-2.62-.905-2.842l-4.873-.687-2.093-4.373C11.18.796 10.595.442 10.024.441z"
        fill="#FFC322"
      />
    </svg>
  );
}

export default SvgYellowStarFill;
