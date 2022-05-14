import { PersonalityType } from '@components/pages/personality-home/personality-difference/PersonalityDifference';
import PersonalityTypeItem from '@components/pages/personality-home/personality-type/PersonalityTypeItem';
import isMobileDevice from '@helpers/isMobile';
import { PersonalityTypeItemModel } from '@interfaces/model';
import SvgChevronLeft from '@svgs/ChevronLeft';
import SvgChevronRight from '@svgs/ChevronRight';
import SectionTitle from '@utils/components/SectionTitle';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ChevronIconContainer, MorePersonalitiesContainer, SliderItem, SliderMobileContainer } from './MorePersonalityStyled';

interface IMorePersonalitiesProps {
}

export const NextArrow = (props: any) => {
	const { onClick, className, style } = props;
	return (
		<ChevronIconContainer className={className} style={{ ...style }} onClick={onClick}>
			<SvgChevronRight />
		</ChevronIconContainer >
	)
}

export const PrevArrow = (props: any) => {
	const { onClick, className, style } = props;
	return (
		<ChevronIconContainer className={className} style={{ ...style }} onClick={onClick}>
			<SvgChevronLeft />
		</ChevronIconContainer >
	)
}

let morePersonalities: PersonalityTypeItemModel[] = [];

let getMorePersonality = (types: PersonalityType[]) => {
	types.forEach(element => {
		morePersonalities = morePersonalities.concat(element.items);
	});
	return morePersonalities;
}

const MorePersonalities: React.FunctionComponent<IMorePersonalitiesProps> = (props) => {
	const mobile = isMobileDevice();
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "0px",
		slidesToShow: mobile ? 2 : 3,
		speed: 500,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};
	const [mores, setMores] = React.useState<PersonalityTypeItemModel[]>([]);
	const { t } = useTranslation('personality-home')
	React.useEffect(() => {
		const types: PersonalityType[] = t('types', { returnObjects: true })
		setMores(getMorePersonality(types));
	}, []);

	return (
		<MorePersonalitiesContainer>
			<SectionTitle marginBottom={mobile ? "20" : "60"} title='More Personalities' />
			<SliderMobileContainer>
				<Slider {...settings}>
					{mores.map((type, idx) => {
						return <div key={type.image_src}>
							<SliderItem>
								<PersonalityTypeItem isSlider={mobile} key={idx} item={type} />
							</SliderItem>
						</div>
					})}
				</Slider>
			</SliderMobileContainer>
		</MorePersonalitiesContainer >
	);
};

export default MorePersonalities;
