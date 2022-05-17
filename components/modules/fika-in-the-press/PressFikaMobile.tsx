import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import BrandMagazine from '@components/pages/fika-in-the-press/brand-magazines/BrandMagazine';
import Enquires from '@components/pages/fika-in-the-press/enquires/Enquires';
import PressFikaMobileHeader from '@components/pages/fika-in-the-press/header/PressFikaMobileHeader';
import MagazineSlider from '@components/pages/fika-in-the-press/mags-press-fika/MagazineSlider';
import { MagazineColumnContent, MagColumnBrand, MagColumnDate, MagColumnTilte, MagImage } from '@components/pages/fika-in-the-press/mags-press-fika/MagsPressFikaStyled';
import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import { RootState } from '@redux/store';
import HrLine from '@utils/components/HrLine';
import { GeneralImage, GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import { Col, Row, Space } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import LazyLoad from 'react-lazyload';
import { useSelector } from 'react-redux';
interface IPressFikaMobileProps {
}

const PressFikaMobile: React.FunctionComponent<IPressFikaMobileProps> = (props) => {
	const { magazines } = useSelector((state: RootState) => state.pressFika);
	return (
		<React.Fragment>
			<NavMobile hasSearchFirst={true} />
			<PressFikaMobileHeader />
			<GeneralPaddingMobile>
				<Space style={{ width: "100%" }} size={20} direction="vertical">
					<MagazineSlider />
					{/* <MagazineContainer> */}
					{magazines.slice(-4).map(mag => {
						return (
							<Row gutter={20} key={mag.id}>
								<Col span={10}>
									<MagImage>
										<LazyLoad throttle={100} height={100} once>
											<GeneralImage src={mag.thumbnail} alt={mag.title} width="100%" style={{ border: "1px solid #A0A0A0" }} />
										</LazyLoad>
									</MagImage>
								</Col>
								<Col span={14}>
									<MagazineColumnContent>
										<MagColumnBrand>
											{mag.author}
										</MagColumnBrand>
										<MagColumnTilte href={mag.link} rel="noreferrer nofollow" target="_blank">
											{mag.title}
										</MagColumnTilte>
										<MagColumnDate>
											{renderDateFollowLanguage(mag.date)}
										</MagColumnDate>
									</MagazineColumnContent>
								</Col>
							</Row>
						)
					})}
					<HrLine margin="0" />
					<Enquires />
				</Space>
			</GeneralPaddingMobile>
			<BrandMagazine />
		</React.Fragment>
	)
};

export default PressFikaMobile;
