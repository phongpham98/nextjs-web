import { GeneralHeaderWrapper } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { BlogHeaderContainer, BlogImageContainer, BlogText, BlogTitle, Image, SubTitleP, Text } from './BlogHeaderStyled';

const BlogHeader = () => {
	const { t } = useTranslation(['blog', 'title']);

	return (
		<GeneralHeaderWrapper>
			<BlogHeaderContainer>
				<Row style={{ height: "100%" }} gutter={20}>
					<Col span={16}>
						<BlogTitle>
							<Text>Fika</Text>
							<BlogText>{t('blogs', { ns: 'title' })}</BlogText>
							<SubTitleP>
								{t('header_desc')}
							</SubTitleP>
						</BlogTitle>
					</Col>
					<Col span={8}>
						<BlogImageContainer className="blog-image">
							<Image src={'/header-blog.png'} alt="fika blog" />
						</BlogImageContainer>
					</Col>
				</Row>
			</BlogHeaderContainer>
		</GeneralHeaderWrapper>
	);
};

export default BlogHeader;