import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import { RootState } from '@redux/store';
import { GeneralContentWrapper, GeneralImage } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import React from 'react';
import LazyLoad from 'react-lazyload';
import { useSelector } from 'react-redux';
import MagazineSlider from './MagazineSlider';
import { MagazineColumnContent, MagazineContainer, MagColumnBrand, MagColumnDate, MagColumnTilte, MagImage } from './MagsPressFikaStyled';

const MagsPressFika = () => {
	const { magazines } = useSelector((state: RootState) => state.pressFika);
	return (
		<GeneralContentWrapper>
			<Row gutter={60}>
				<Col span={11}>
					<MagazineSlider />
				</Col>
				<Col span={13}>
					<MagazineContainer>
						{magazines.slice(-3).map(mag => {
							return (
								<Row gutter={20} key={mag.id}>
									<Col span={6}>
										<MagImage>
											<LazyLoad throttle={100} height={100} once>
												<MagColumnTilte href={mag.link} rel="noreferrer nofollow" target="_blank">
													<GeneralImage src={mag.thumbnail} alt={mag.title} width="100%" style={{ border: "1px solid #A0A0A0" }} />
												</MagColumnTilte>
											</LazyLoad>
										</MagImage>
									</Col>
									<Col span={15}>
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
					</MagazineContainer>
				</Col>
			</Row>
		</GeneralContentWrapper>
	);
};

export default MagsPressFika;