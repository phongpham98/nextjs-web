import * as React from "react";

function SvgPen(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14.553.443a3.173 3.173 0 00-2.32.923L11.115 2.5c-2.146-.122-3.954.436-5.374 1.443-.787.559-1.316 1.115-1.594 1.532a.987.987 0 00-.125.312L.99 18.037l7-7v-1a2 2 0 112 2h-1l-7 7 12.25-3.031a.964.964 0 00.312-.125c.415-.277.974-.808 1.532-1.594 1.009-1.422 1.588-3.2 1.435-5.368l1.163-1.15c1.288-1.287 1.096-3.358.015-4.44L16.71 1.334c-.54-.541-1.35-.866-2.157-.891zm-.031 2c.297.01.594.139.772.317l1.957 1.947c.356.356.502 1.143.064 1.58l-.824.844c-1.09-1.091-2.607-2.606-3.592-3.59l.822-.817c.218-.218.505-.29.8-.281z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgPen;