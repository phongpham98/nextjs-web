import * as React from "react";

function SvgMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.415.487C5.123.487.832 4.778.832 10.07v19.108c0 1.058.86 1.914 1.917 1.916l34.5.06a1.914 1.914 0 001.916-1.917V10.07c0-5.292-4.29-9.583-9.583-9.583H10.415zm0 3.833c2.652 0 5.75 2.528 5.75 5.75v17.25l-11.5-.12V10.07c0-3.222 3.099-5.75 5.75-5.75zm13.417 7.667h7.667c1.058 0 1.916.859 1.916 1.917v3.833c0 1.708-2.087 2.586-3.294 1.378l-3.294-3.295h-2.995a1.917 1.917 0 010-3.833z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgMail;
