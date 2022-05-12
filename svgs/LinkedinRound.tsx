import * as React from "react";

function SvgLinkedinRound(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.615 29.692c8.072 0 14.616-6.544 14.616-14.616S22.687.461 14.615.461 0 7.004 0 15.076s6.543 14.616 14.615 14.616z"
        fill="currentColor"
      />
      <path
        d="M15.559 13.36c.19-.208.345-.432.553-.622.604-.57 1.312-.864 2.159-.847.466 0 .915.035 1.347.173 1.019.294 1.606.985 1.883 1.986.207.743.241 1.503.259 2.263v4.836c0 .156-.035.19-.19.19h-2.488c-.138 0-.172-.051-.172-.19v-4.594c0-.38-.018-.76-.139-1.14-.19-.691-.69-1.036-1.416-1.002-.984.052-1.503.536-1.623 1.537a5.13 5.13 0 00-.052.726v4.473c0 .156-.035.19-.19.19h-2.505c-.138 0-.172-.034-.172-.172v-8.861c0-.138.051-.173.19-.173h2.383c.138 0 .19.052.173.19v1.037zM11.016 16.729v4.387c0 .156-.034.207-.207.207-.83-.017-1.658 0-2.487 0-.139 0-.173-.034-.173-.172V12.29c0-.121.034-.173.155-.173h2.522c.156 0 .19.07.19.207v4.405zM11.241 9.196c0 .915-.743 1.658-1.658 1.658-.898 0-1.658-.743-1.658-1.64 0-.916.743-1.659 1.658-1.659a1.633 1.633 0 011.658 1.64z"
        fill="#FEFEFE"
      />
    </svg>
  );
}

export default SvgLinkedinRound;
