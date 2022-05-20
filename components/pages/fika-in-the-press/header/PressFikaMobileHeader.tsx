import { RootState } from '@redux/store';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { MobileHeader, PressTitle } from './MobileStyled';
import { MagazineContainer, MagBrand, MagTitleH2, MagTitleWrapper } from './PressFikaHeaderStyled';

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
								<Link href={mag.link}>
									<a rel="noreferrer nofollow" target="_blank" >
										<GeneralImageWrapper>
											<RenderSmoothNextImage src={mag.banner} alt={mag.title} />
										</GeneralImageWrapper>
									</a>
								</Link>
								<MagTitleWrapper>
									<MagBrand>{mag.author}</MagBrand>
								</MagTitleWrapper>
							</MagazineContainer>
							<Link href={mag.link}>
								<a rel="noreferrer nofollow" target="_blank" >
									<MagTitleH2>
										{mag.title}
									</MagTitleH2>
								</a>
							</Link>
						</Col>
					)
				})}
			</Row>
		</MobileHeader>
	);
};

export default PressFikaMobileHeader;
