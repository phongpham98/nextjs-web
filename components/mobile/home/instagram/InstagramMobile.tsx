import InstagramPost from '@components/home/instagram/InstagramPost';
import { RootState } from '@redux/store';
import SvgInstagram from '@svgs/Instagram';
import FikaButtonMobile from '@utils/components/FikaButtonMobile';
import SectionTitle from '@utils/components/SectionTitle';
import { GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ButtonDisContainer } from '../discover/DiscoverMobileStyled';
import { SliderMobileContainer } from './InstagramMobileStyled';

interface IInstagramMobileProps {
}

const InstagramMobile: React.FunctionComponent<IInstagramMobileProps> = (props) => {

	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 1,
		speed: 500
	};

	const { instagrams } = useSelector((state: RootState) => state.instagram);
	const { t } = useTranslation('button');

	return (
		<GeneralPaddingMobile>
			<SectionTitle marginBottom="20" title='Instagram' icon={<SvgInstagram color='#030303' />} />

			<SliderMobileContainer>
				<Slider {...settings}>
					{instagrams.map((item) => {
						return (
							<div key={item.link}>
								<InstagramPost img={item.image} />
							</div>
						)
					})}
				</Slider>
			</SliderMobileContainer>
			<ButtonDisContainer>
				<FikaButtonMobile onClick={() => window.open("https://www.instagram.com/keep_fika/")}>{t("instagram")}</FikaButtonMobile>
			</ButtonDisContainer>
		</GeneralPaddingMobile>
	);
};

export default InstagramMobile;
