import * as React from "react";
import { SVGProps } from "react";

const SvgEnergy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 36 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.689.765c-.852-.247-1.853.034-2.434.947-1.894 2.975-13.252 20.826-15.146 23.8-.916 1.44.118 3.313 1.826 3.313h12.982v12.982c0 2.163 2.827 2.975 3.989 1.149l15.145-23.8c.917-1.439-.118-3.313-1.825-3.313H20.244V2.861A2.142 2.142 0 0 0 18.689.765ZM15.917 10.3v7.707c0 1.194.968 2.163 2.163 2.163h11.224l-9.06 14.198v-7.707a2.164 2.164 0 0 0-2.164-2.163H6.856c2.483-3.901 5.734-8.973 9.06-14.198Z"
      fill="#F9C"
    />
  </svg>
);

export default SvgEnergy;
