/* eslint-disable react-hooks/exhaustive-deps */
import { ConnectedStoryApi } from '@api';
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import LatestPosts from '@components/pages/blog/content/LatestPosts';
import MoreStories from '@components/pages/connected-story-detail/more-stories/MoreStories';
import SendStoryFormMobile from '@components/pages/connected-story/send-story/SendStoryFormMobile';
import { domain } from '@configs/api';
import { clickDownloadEvent } from '@helpers/customGTM';
import { StoryModel } from '@interfaces/model';
import { update_story_detail } from '@redux/slices/connectedStoriesSlice';
import { RootState } from '@redux/store';
import DownloadFika from '@utils/components/DownloadFika';
import HrLine from '@utils/components/HrLine';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import ShareButton from '@utils/components/share/ShareButton';
import { GeneralTitlePostDetailH1, MotoP, ShareAndLikeContainer } from '@utils/styled-components/GeneralContentStyled';
import { GeneralHeaderMobileContainer, GeneralImageWrapper, GeneralPaddingMobile, MarginBottonDiv } from '@utils/styled-components/GeneralStyled';
import { Col, Space } from 'antd';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentMobileContainer, StoryMobileContainer } from './StoryDetiailStyled';

const StoryDetailMobile = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { link } = router.query;
	const { storyDetail, detailLoading } = useSelector((state: RootState) => state.loveStory);
	const { latestBlogs } = useSelector((state: RootState) => state.blog);

	const [loading, setLoading] = React.useState<boolean>(false);

	const fetchBlogDetail = async () => {
		setLoading(true)
		try {
			let response: StoryModel | undefined
			if (typeof link === 'string') {
				if (link.includes('&&')) {
					response = await ConnectedStoryApi.fetchStoryById(undefined, link.split('&&')[1], router.locale);
				} else
					response = await ConnectedStoryApi.fetchStoryById(link, undefined, router.locale);
			}
			if (response) {
				setLoading(false)
				dispatch(update_story_detail(response));
			}
		} catch (error: any) {
			setLoading(false)
			console.log('error', error)
		}
	}

	React.useEffect(() => {
		fetchBlogDetail()
		// if (params.link.includes('&&')) {
		// 	dispatch(getStoryDetail(undefined, params.link.split('&&')[1]));
		// } else
		// 	dispatch(getStoryDetail(params.link));
	}, [link]);



	return (
		<StoryMobileContainer>
			{/* {loading === true && <Loader />} */}
			<GeneralHeaderMobileContainer>
				{storyDetail && !loading ? (
					<GeneralImageWrapper>
						<RenderSmoothNextImage width='500' height='500' src={storyDetail.thumbnail ? storyDetail.thumbnail : ''} alt={storyDetail.title} />
					</GeneralImageWrapper>
				) : <GeneralImageWrapper>
					<RenderSmoothImage width='500' height='500' alt={''} src={''} />
				</GeneralImageWrapper>}

			</GeneralHeaderMobileContainer>
			<NavMobile hasMarginBottom tags={storyDetail ? storyDetail.tags : []} />
			{storyDetail ? <GeneralPaddingMobile>
				<MarginBottonDiv>
					<GeneralTitlePostDetailH1>{storyDetail.title}</GeneralTitlePostDetailH1>
					<MotoP>{storyDetail.short_description}</MotoP>
					<ShareAndLikeContainer>
						<ShareButton title={storyDetail.title} url={`${domain}${router.pathname}&&${storyDetail.id}#${storyDetail.id}`} />
					</ShareAndLikeContainer>
				</MarginBottonDiv>
				<Space style={{ width: "100%" }} size={20} direction="vertical">
					<ContentMobileContainer>
						{parse(storyDetail.contents.replaceAll('<a', "<a aria-label={'contact us'} target='_blank '"))}
					</ContentMobileContainer>
					<HrLine margin="0" />
					<Col md={24}>
						<SendStoryFormMobile />
					</Col>
					<DownloadFika onClick={() => clickDownloadEvent('Connected Stories - Mobile')} />
					{latestBlogs ? <LatestPosts type={"blog"} posts={latestBlogs.slice(0, 3)} /> : null}
					<HrLine margin="0" />
					<MoreStories />
				</Space>
			</GeneralPaddingMobile> : null}
		</StoryMobileContainer>
	);
};

export default StoryDetailMobile;