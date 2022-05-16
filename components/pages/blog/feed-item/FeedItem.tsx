import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import Link from 'next/link';
import React from 'react';
import { ImageContainer } from './FeedItemStyled';

interface FeedItemProps {
	image?: string;
	feedContent: any;
	url: string;
}

const FeedItem = ({ image, feedContent, url }: FeedItemProps) => {

	return (
		<Row gutter={20}>
			<Col sm={8} md={7}>
				<Link href={url}>
					<a aria-label={'fika connects'} style={{ color: 'black' }}>
						<ImageContainer>
							<GeneralImageWrapper>
								<RenderSmoothImage width='276' height='225' src={image ? image : ''} alt="blog" />
							</GeneralImageWrapper>
						</ImageContainer>
					</a>
				</Link>
			</Col>
			<Col span={15}>
				{feedContent}
			</Col>
		</Row>
	);
};

export default FeedItem;