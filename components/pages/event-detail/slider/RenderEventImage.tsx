import * as React from 'react';
import LazyLoad from 'react-lazyload';

interface IRenderEventImageProps {
	src: string;
}

const RenderEventImage: React.FunctionComponent<IRenderEventImageProps> = ({ src }) => {
	const [width, setWidth] = React.useState<string>('100%');
	const ref = React.useRef<any>();
	const handleImageLoaded = () => {
		if (ref.current.clientHeight > ref.current.clientWidth) {
			setWidth("70%");
		}
	}
	return (
		<div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
			<LazyLoad style={{ display: 'flex', justifyContent: "center" }} throttle={100} height={300} once>
				<img ref={ref} width={width} onLoad={handleImageLoaded} alt="contact fika" src={src} />
			</LazyLoad>
		</div>
	);
};

export default RenderEventImage;
