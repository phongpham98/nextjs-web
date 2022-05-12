import * as React from "react";

function SvgMusic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 15 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.841.967l-6 1c-.482.08-.844.51-.844 1l-.01 10.528a3.826 3.826 0 00-1.99-.528 4 4 0 104 4l.013-9.162 5.137-.87c.114-.018.374-.101.6-.343a.85.85 0 00.25-.625v-4c0-.618-.547-1.102-1.156-1zm-.859 2.17l.005 1.973-3.99.669.004-1.983 3.981-.66z"
        fill="#030303"
      />
    </svg>
  );
}

export default SvgMusic;
