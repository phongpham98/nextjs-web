import { SliderContainer } from '@components/home/topics/TopicSliderStyled';
import { RootState } from '@redux/store';
import SvgChevronLeft from '@svgs/ChevronLeft';
import SvgChevronRight from '@svgs/ChevronRight';
import { ChevronIconContainer } from '@utils/styled-components/GeneralStyled';
import * as React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import RenderEventImage from './RenderEventImage';

interface IEventImageSliderProps {
}
export const NextArrow = (props: any) => {
	const { onClick } = props;
	return (
		<ChevronIconContainer style={{ right: 10, bottom: "50%", }} onClick={onClick}>
			<SvgChevronRight />
		</ChevronIconContainer >
	)
}

export const PrevArrow = (props: any) => {
	const { onClick } = props;
	return (
		<ChevronIconContainer style={{ left: 10, bottom: "50%", zIndex: 1 }} onClick={onClick}>
			<SvgChevronLeft />
		</ChevronIconContainer >
	)
}
const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
};
const EventImageSlider: React.FunctionComponent<IEventImageSliderProps> = (props) => {

	const { event_detail } = useSelector((state: RootState) => state.event);


	return (
		event_detail ? <SliderContainer>
			<Slider {...settings}>
				{event_detail.galleries?.map((item, idx) => {
					return (
						<React.Fragment key={item.key}>
							<RenderEventImage src={item.url} />
						</React.Fragment>
					)
				})}


			</Slider>
		</SliderContainer> : null
	);
};

export default EventImageSlider;
