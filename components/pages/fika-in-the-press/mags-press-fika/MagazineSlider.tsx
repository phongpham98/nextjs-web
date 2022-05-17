import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import { RootState } from '@redux/store';
import SvgChevronLeft from '@svgs/ChevronLeft';
import SvgChevronRight from '@svgs/ChevronRight';
import { GeneralImage } from '@utils/styled-components/GeneralStyled';
import React from 'react';
import LazyLoad from 'react-lazyload';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ChevronIconContainer, MagazineTime, MagazineTitle, MagazineTitleWrapper, MagBrand } from './MagazinSliderStyled';

const NextArrow = (props: any) => {
	const { onClick } = props;
	return (
		<ChevronIconContainer style={{ right: 10, bottom: "50%", }} onClick={onClick}>
			<SvgChevronRight />
		</ChevronIconContainer >
	)
}

const PrevArrow = (props: any) => {
	const { onClick } = props;
	return (
		<ChevronIconContainer style={{ left: 10, bottom: "50%", zIndex: 1 }} onClick={onClick}>
			<SvgChevronLeft />
		</ChevronIconContainer >
	)
}

const MagazineSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	const { magazines } = useSelector((state: RootState) => state.pressFika);

	return (
		<Slider {...settings}>
			{magazines.slice(3, magazines.length - 3).map(mag => {
				return (
					<React.Fragment key={mag.id}>
						<div style={{ position: "relative", width: "100%", paddingTop: "100%" }}>
							<MagazineTitleWrapper>
								<MagBrand>{mag.author}</MagBrand>
								<MagazineTitle href={mag.link} rel="nofolow noreferrer" target={'_blank'} >{mag.title}</MagazineTitle>
								<MagazineTime>{renderDateFollowLanguage(mag.date)}</MagazineTime>
							</MagazineTitleWrapper>
							<LazyLoad throttle={100} height={100} once>
								<GeneralImage alt={mag.title} src={mag.thumbnail} />
							</LazyLoad>
						</div>
					</React.Fragment>
				)
			})}
		</Slider>
	);
};

export default MagazineSlider;