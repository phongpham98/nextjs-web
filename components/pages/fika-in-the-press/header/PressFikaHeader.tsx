import { RootState } from '@redux/store';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { useSelector } from 'react-redux';
import { MagazineContainer, MagBrand, MagTitle, MagTitleWrapper, PressFikaHeaderContainer, PressFikaTitle, PressSubContent } from './PressFikaHeaderStyled';

const PressFikaHeader = () => {
	const { t } = useTranslation('title');
	const { magazines } = useSelector((state: RootState) => state.pressFika);

	return (
		<PressFikaHeaderContainer>
			<PressFikaTitle>
				{t('fika_in_the_press')}
			</PressFikaTitle>
			<Row justify="space-between">
				{magazines.slice(0, 3).map(mag => {

					return (
						<Col span={7} key={mag.id}>
							<MagazineContainer>
								<PressSubContent href={mag.link} rel="noreferrer nofollow" target="_blank" >
									<GeneralImageWrapper>
										<RenderSmoothImage width='500' height='500' src={mag.banner} alt={mag.title} />
									</GeneralImageWrapper>
								</PressSubContent>
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
		</PressFikaHeaderContainer>
	);
};

export default PressFikaHeader;