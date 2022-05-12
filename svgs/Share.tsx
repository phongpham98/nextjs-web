import * as React from "react";

function SvgShare(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11.332 1.303a2 2 0 00-2 2c0 .171.027.384.068.543L5.83 6.336a2.168 2.168 0 00-1.166-.367 2 2 0 100 4c.422 0 .838-.156 1.16-.378l3.576 2.51c-.044.165-.069.356-.069.535a2 2 0 102-2 2.07 2.07 0 00-1.154.375L6.593 8.502c.043-.165.072-.354.072-.533 0-.178-.025-.37-.069-.536l3.577-2.5c.319.214.745.37 1.159.37a2 2 0 100-4zm0 1.333a.667.667 0 110 1.334.667.667 0 010-1.334zM4.665 7.303a.667.667 0 110 1.334.667.667 0 010-1.334zm6.667 4.666a.667.667 0 110 1.334.667.667 0 010-1.334z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgShare;
