import * as React from "react";

function SvgCloseThin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.994.906c-.256 0-.523.086-.718.281a1.029 1.029 0 000 1.438l6.28 6.281-6.28 6.281a1.029 1.029 0 000 1.438c.39.39 1.047.39 1.437 0l6.281-6.28 6.281 6.28c.391.39 1.048.39 1.438 0 .39-.39.39-1.047 0-1.438l-6.281-6.28 6.281-6.282c.39-.39.39-1.047 0-1.438a1.013 1.013 0 00-.719-.28c-.256 0-.523.085-.719.28l-6.28 6.281-6.282-6.28a1.013 1.013 0 00-.719-.282z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCloseThin;
