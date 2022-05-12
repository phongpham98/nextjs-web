import cx from 'classnames';
import Image from 'next/image';
import * as React from 'react';
import useImage from '../../hooks/useImage';

interface IRenderSmoothImageProps {
	src: any;
	alt?: string;
	width?: string;
	height?: string;
}

const RenderSmoothImage: React.FunctionComponent<IRenderSmoothImageProps> = ({ src, alt, ...props }) => {
	const { loaded } = useImage({ src })
	return (
		<img {...props} className={cx("smooth-image", { loaded })} src={src} alt={alt ? alt : ''} />
	);
};

export default RenderSmoothImage;
