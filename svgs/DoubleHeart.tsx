import * as React from "react";

function SvgDoubleHeart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.468 13.28a2.16 2.16 0 01-2.767-.003C3.985 10.985.53 8.206.53 4.675.53 2.325 2.357.479 4.684.479c1.314 0 2.576.579 3.4 1.555C8.905 1.058 10.167.48 11.481.48c2.327 0 4.155 1.846 4.155 4.196 0 3.525-3.45 6.317-6.17 8.605z"
        fill="#fff"
      />
      <path
        d="M17.492 14.376a2.172 2.172 0 01-2.701-.003c-1.519-1.226-3.183-2.689-3.183-4.497 0-1.342 1.097-2.397 2.493-2.397.788 0 1.545.33 2.04.888.493-.558 1.25-.888 2.039-.888 1.396 0 2.493 1.055 2.493 2.397 0 1.805-1.662 3.274-3.181 4.5z"
        fill="#fff"
        stroke="#EB539F"
      />
    </svg>
  );
}

export default SvgDoubleHeart;
