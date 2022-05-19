import cx from 'classnames';
import Image, { ImageProps } from 'next/image';
import * as React from 'react';
import useImage from '../../hooks/useImage';


const RenderSmoothNextImage: React.FunctionComponent<ImageProps> = ({ src, ...props }) => {
	const { loaded } = useImage({ src })
	return (
		<Image layout='fill' objectFit='cover' {...props} className={cx("smooth-image", { loaded })} src={src ? src : '/header-blog.png'} />
	);
};

export default RenderSmoothNextImage;
