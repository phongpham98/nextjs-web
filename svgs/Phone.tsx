import * as React from "react";

function SvgPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.28.615C5.045.615.732 4.928.732 8.163c0 4.167 4.313 11.859 8.625 16.171l2.157 2.156c4.312 4.313 12.004 8.625 16.17 8.625 3.236 0 7.548-4.312 7.548-7.547 0-3.234-4.312-7.546-7.547-7.546-1.078 0-4.978 2.23-5.39 2.156-3.439-.621-7.906-5.2-8.625-8.625-.1-.477 2.156-4.313 2.156-5.39 0-3.235-4.312-7.548-7.546-7.548z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgPhone;
