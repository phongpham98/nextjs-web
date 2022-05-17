import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import { getLatestNews } from '@redux/slices/home';
import { RootState } from '@redux/store';
import SvgChevronLeft from '@svgs/ChevronLeft';
import SvgChevronRight from '@svgs/ChevronRight';
import { ChevronIconContainer, GeneralImage } from '@utils/styled-components/GeneralStyled';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { DateTime, SliderContainer, SliderContent, SliderItemContainer, SliderLoadingContainer, SliderSubTitleP, SliderTitleH3 } from './TopicSliderStyled';
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

const TopicSlider = () => {
	const { latestNews } = useSelector((state: RootState) => state.home);
	const dispatch = useDispatch();
	const router = useRouter()
	const {t} = useTranslation(['routes']);

	useEffect(() => {
		dispatch(getLatestNews(true));
	}, [])

	return (
		latestNews && latestNews.length > 0 ? <SliderContainer>
			<Slider {...settings}>
				{latestNews.map(item => {
					return (
						<div style={{ height: "100%" }} key={item.id}>
							<SliderItemContainer style={{ position: "relative", height: "100%" }}>
								<SliderContent>
									<Link href={`/${t('news')}/${t('detail')}/${item.link}`}>
										<a>
											<SliderTitleH3 >{item.title}</SliderTitleH3>
										</a>
									</Link>
									<SliderSubTitleP>{item.short_description}</SliderSubTitleP>
									<DateTime>{renderDateFollowLanguage(item.public_date ? item.public_date : item.created_at)}</DateTime>
								</SliderContent>
								<GeneralImage alt={item.title} src={item.thumbnail} />
							</SliderItemContainer>
						</div>
					)
				})}
			</Slider>
		</SliderContainer> : <SliderLoadingContainer />
	);
};

export default TopicSlider;