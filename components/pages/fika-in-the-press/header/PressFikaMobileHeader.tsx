import { RootState } from '@redux/store';
import { GeneralImage } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { useSelector } from 'react-redux';
import { MobileHeader, PressTitle } from './MobileStyled';
import { MagazineContainer, MagBrand, MagTitle, MagTitleWrapper, PressSubContent } from './PressFikaHeaderStyled';

interface IPressFikaMobileHeaderProps {
}

const PressFikaMobileHeader: React.FunctionComponent<IPressFikaMobileHeaderProps> = (props) => {
	const { t } = useTranslation('title')
	const { magazines } = useSelector((state: RootState) => state.pressFika);
	return (
		<MobileHeader>
			<PressTitle>
				{t('fika_in_the_press')}
			</PressTitle>
			<Row justify="space-between" gutter={[0, 20]}>
				{magazines.slice(0, 3).map(mag => {

					return (
						<Col span={24} key={mag.id}>
							<MagazineContainer>
								<LazyLoad throttle={100} height={100} once>
									<GeneralImage src={mag.banner} alt={mag.title} />
								</LazyLoad>
								<MagTitleWrapper>
									<MagBrand>{mag.author}</MagBrand>
								</MagTitleWrapper>
							</MagazineContainer>
							<MagTitle>
								<PressSubContent href={mag.link} rel="noreferrer nofollow" target="_blank" >
									{mag.title}
								</PressSubContent>
							</MagTitle>
						</Col>
					)
				})}
			</Row>
		</MobileHeader>
	);
};

export default PressFikaMobileHeader;
