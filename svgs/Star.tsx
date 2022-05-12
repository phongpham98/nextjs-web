import * as React from "react";

function SvgStar(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10.024.441c-.571 0-1.154.355-1.5 1.062L6.402 5.876l-4.842.687C.003 6.78-.5 8.307.622 9.405l3.499 3.405-.812 4.78c-.268 1.546 1.015 2.481 2.405 1.748.536-.284 3.296-1.714 4.31-2.249l4.31 2.25c1.39.732 2.678-.202 2.405-1.75l-.843-4.779 3.498-3.405c1.13-1.094.651-2.62-.906-2.842l-4.872-.687-2.093-4.373c-.345-.707-.928-1.061-1.5-1.062z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStar;
