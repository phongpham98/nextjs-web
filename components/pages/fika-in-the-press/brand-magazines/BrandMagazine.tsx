import React from 'react';
import { BrandItemContainer, BrandMagazineContainer } from './BrandMagazineStyled';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import brand1 from '@public/fika-in-the-press/brand1.png';
import brand2 from '@public/fika-in-the-press/brand2.png';
import brand3 from '@public/fika-in-the-press/brand3.png';
import brand4 from '@public/fika-in-the-press/brand4.png';
import brand5 from '@public/fika-in-the-press/brand5.png';
import brand6 from '@public/fika-in-the-press/brand6.png';
import brand7 from '@public/fika-in-the-press/brand7.png';
import brand8 from '@public/fika-in-the-press/brand8.png';
import brand9 from '@public/fika-in-the-press/brand9.png';
import brand10 from '@public/fika-in-the-press/brand10.png';
import brand11 from '@public/fika-in-the-press/brand11.png';
import brand12 from '@public/fika-in-the-press/brand12.png';
import brand13 from '@public/fika-in-the-press/brand13.png';
import brand14 from '@public/fika-in-the-press/brand14.png';
import brand15 from '@public/fika-in-the-press/brand15.png';
import brand16 from '@public/fika-in-the-press/brand16.png';
import brand17 from '@public/fika-in-the-press/brand17.png';
import { useMediaQuery } from 'react-responsive';
import LazyLoad from 'react-lazyload';
import isMobileDevice from '@helpers/isMobile';

const brands = [
	{
		img: brand1.src,
		name: ""
	},
	{
		img: brand2.src,
		name: ""
	},
	{
		img: brand3.src,
		name: ""
	},
	{
		img: brand4.src,
		name: ""
	},
	{
		img: brand5.src,
		name: ""
	},
	{
		img: brand6.src,
		name: ""
	},
	{
		img: brand7.src,
		name: ""
	},
	{
		img: brand8.src,
		name: ""
	},
	{
		img: brand9.src,
		name: ""
	},
	{
		img: brand10.src,
		name: ""
	},
	{
		img: brand11.src,
		name: ""
	},
	{
		img: brand12.src,
		name: ""
	},
	{
		img: brand13.src,
		name: ""
	},
	{
		img: brand14.src,
		name: ""
	},
	{
		img: brand15.src,
		name: ""
	},

	{
		img: brand16.src,
		name: ""
	},
	{
		img: brand17.src,
		name: ""
	},
]

const BrandMagazine = () => {
	const mobile = isMobileDevice();
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: mobile ? 4 : 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};
	return (
		<BrandMagazineContainer>
			<Slider {...settings}>
				{brands.map(brand => {
					return (
						<BrandItemContainer key={brand.img}>
							<LazyLoad throttle={100} height={100} once>
								<img src={brand.img} alt="fika" width="100%" />
							</LazyLoad>
						</BrandItemContainer>
					)
				})}
			</Slider>
		</BrandMagazineContainer>
	);
};

export default BrandMagazine;