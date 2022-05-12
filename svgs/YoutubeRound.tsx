import * as React from "react";

function SvgYoutubeRound(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 30 30"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M14.615 29.922c8.072 0 14.616-6.544 14.616-14.615C29.23 7.235 22.687.69 14.615.69S0 7.235 0 15.307c0 8.071 6.543 14.615 14.615 14.615z"
				fill="currentColor"
			/>
			<path
				d="M23.626 11.005c-.203-.773-.83-1.367-1.62-1.585-1.418-.377-7.13-.377-7.13-.377s-5.691 0-7.13.377a2.273 2.273 0 00-1.62 1.585c-.384 1.388-.384 4.302-.384 4.302s0 2.894.385 4.301c.202.773.83 1.368 1.62 1.586 1.418.376 7.13.376 7.13.376s5.69 0 7.129-.376a2.273 2.273 0 001.62-1.586c.385-1.387.385-4.301.385-4.301s0-2.914-.385-4.302zm-10.552 6.958V12.61l4.74 2.676-4.74 2.676z"
				fill="#fff"
			/>
		</svg>
	);
}

export default SvgYoutubeRound;
