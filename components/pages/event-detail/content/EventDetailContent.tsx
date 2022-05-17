/* eslint-disable react-hooks/exhaustive-deps */
import isMobileDevice from '@helpers/isMobile';
import { RootState } from '@redux/store';
import CategoriesAndTags from '@utils/components/categories-tags/CategoriesAndTags';
import { ContentContainer, ContentWrapper, GeneralTitlePostDetailH1 } from '@utils/styled-components/GeneralContentStyled';
import { MarginBottonDiv } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import parse from 'html-react-parser';
import * as React from 'react';
import { useSelector } from 'react-redux';
import EventImageSlider from '../slider/EventImageSlider';

interface IEventDetailContentProps {
}
// desktop ? 140 : laptop1600 ? 100 : laptop1440 ? 100 : laptop1024 ? 50 : 30
const EventDetailContent: React.FunctionComponent<IEventDetailContentProps> = (props) => {
	const { event_detail } = useSelector((state: RootState) => state.event);
	const { latestBlogs } = useSelector((state: RootState) => state.blog);

	return (
		<ContentWrapper>
			<Row gutter={{ xs: 30, sm: 50, lg: 100, xxl: 140 }}>
				{event_detail ? <Col span={16}>

					{event_detail && <div style={{ padding: "0 12%" }}>
						<MarginBottonDiv>
							<GeneralTitlePostDetailH1>{event_detail.name}</GeneralTitlePostDetailH1>
						</MarginBottonDiv>
						<EventImageSlider />
						<div style={{ padding: "1rem" }}></div>
						<ContentContainer>
							{parse(event_detail.description ? event_detail.description.replaceAll('<a', "<a aria-label={''} target='_blank '") : '')}
						</ContentContainer>
					</div>}
				</Col> : null}
				<Col span={8}>
					{latestBlogs ? <CategoriesAndTags type="blog" tags={event_detail?.tags ? event_detail.tags : []} latestPosts={latestBlogs.slice(0, 3)} hasCategory={false} hasDownloadButton={true} /> : null}
				</Col>
			</Row>
		</ContentWrapper>
	);
};

export default EventDetailContent;
