import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import { RootState } from '@redux/store';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralContentWrapper, GeneralImage } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import Link from 'next/link';
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
											<Link href={mag.link}>
												<a rel="noreferrer nofollow" target="_blank">
													<RenderSmoothNextImage src={mag.thumbnail} alt={mag.title} width="100%" style={{ border: "1px solid #A0A0A0" }} />
												</a>
											</Link>
										</MagImage>
									</Col>
									<Col span={15}>
										<MagazineColumnContent>
											<MagColumnBrand>
												{mag.author}
											</MagColumnBrand>
											<Link href={mag.link}>
												<a rel="noreferrer nofollow" target="_blank">
													<MagColumnTilte>
														{mag.title}
													</MagColumnTilte>
												</a>
											</Link>
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