import { GeneralHeaderWrapper } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { HeaderContent, ImageContainer, NewsImage, NewsSubTitleP, NewsTitleDiv, NewsTitleH1 } from './NewsHeaderStyled';

const NewsHeader = () => {

	const { t } = useTranslation(['news', 'title']);

	return (
		<GeneralHeaderWrapper>
			<HeaderContent>
				<Row>
					<Col span={12}>
						<NewsTitleDiv>
							<NewsTitleH1>{t('news', { ns: 'title' })}</NewsTitleH1>
							<NewsSubTitleP>{t('header_desc')}</NewsSubTitleP>
						</NewsTitleDiv>
					</Col>
					<Col span={12}>
						<ImageContainer>
							<NewsImage src={'/news-banner.png'} alt="fika news" />
						</ImageContainer>
					</Col>
				</Row>
			</HeaderContent>
		</GeneralHeaderWrapper>
	);
};

export default NewsHeader;