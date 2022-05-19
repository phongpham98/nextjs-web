import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import { RootState } from '@redux/store';
import { ContentContainer, GeneralTitlePostDetailH1, MotoP } from '@utils/styled-components/GeneralContentStyled';
import { GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import { Space } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux';
import EventImageSlider from '../slider/EventImageSlider';
import parse from 'html-react-parser'
import DownloadFika from '@utils/components/DownloadFika';
import { clickDownloadEvent } from '@helpers/customGTM';
import LatestPosts from '@components/pages/blog/content/LatestPosts';
import HrLine from '@utils/components/HrLine';
import LazyLoad from 'react-lazyload';
import MoreEvents from '../more-events/MoreEvents';
import LoadingTitle from '@utils/components/categories-tags/loading/LoadingTitle';
import LoadingMoto from '@utils/components/categories-tags/loading/LoadingMoto';
import { LoadingContentWrapper } from '@utils/components/categories-tags/loading/LoadingStyled';
import LoadingContent from '@utils/components/categories-tags/loading/LoadingContent';

type Props = {}

const EventDetailMobile = (props: Props) => {
	const { event_detail, eventLoading } = useSelector((state: RootState) => state.event);
	const { latestBlogs } = useSelector((state: RootState) => state.blog);
	return (
		<React.Fragment>
			<NavMobile hasMarginBottom tags={event_detail?.tags} />
			{event_detail && !eventLoading ? <GeneralPaddingMobile>
				<Space style={{ width: "100%" }} size={20} direction="vertical">
					<GeneralTitlePostDetailH1>{event_detail.name}</GeneralTitlePostDetailH1>
					<EventImageSlider />
					<ContentContainer>
						{parse(event_detail.description ? event_detail.description : '')}
					</ContentContainer>
					<DownloadFika onClick={() => clickDownloadEvent('Event')} />
					{latestBlogs ? <LatestPosts type="blog" posts={latestBlogs.slice(0, 3)} /> : null}
					<HrLine margin="0" />
					<LazyLoad offset={300}>
						<MoreEvents />
					</LazyLoad>
				</Space>
			</GeneralPaddingMobile> : <React.Fragment>
				<GeneralTitlePostDetailH1>
					<LoadingTitle />
					<LoadingTitle width={80} />
				</GeneralTitlePostDetailH1>
				<MotoP>
					<LoadingMoto />
					<LoadingMoto />
					<LoadingMoto width={20} />
				</MotoP>
				<LoadingContentWrapper>
					{[1, 2, 3, 4, 5].map((t) => {
						return <LoadingContent key={t} />
					})}
				</LoadingContentWrapper>
			</React.Fragment>}
		</React.Fragment>
	)
}

export default EventDetailMobile