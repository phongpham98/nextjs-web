/* eslint-disable react-hooks/exhaustive-deps */
import { ConnectedStoryApi } from '@api';
import MoreStories from '@components/pages/connected-story-detail/more-stories/MoreStories';
import SendStoryForm from '@components/pages/connected-story/send-story/SendStoryForm';
import { domain } from '@configs/api';
import { StoryModel } from '@interfaces/model';
import { getLatestBlogs } from '@redux/slices/blog';
import { trackViews } from '@redux/slices/comment';
import { update_story_detail } from '@redux/slices/connectedStoriesSlice';
import { RootState } from '@redux/store';
import CategoriesAndTags from '@utils/components/categories-tags/CategoriesAndTags';
import LoadingContent from '@utils/components/categories-tags/loading/LoadingContent';
import LoadingMoto from '@utils/components/categories-tags/loading/LoadingMoto';
import { LoadingContentWrapper } from '@utils/components/categories-tags/loading/LoadingStyled';
import LoadingTitle from '@utils/components/categories-tags/loading/LoadingTitle';
import HrLine from '@utils/components/HrLine';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import ShareButton from '@utils/components/share/ShareButton';
import { ArticleContainer, ContentContainer, ContentWrapper, GeneralTitlePostDetailH1, MotoP, ShareAndLikeContainer } from '@utils/styled-components/GeneralContentStyled';
import { GeneralHeaderWrapper, GeneralImageWrapper, MarginBottonDiv } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import { SendStoryContainer } from './LoveStoryDetailStyled';

interface ILoveStoryDetailDesktopProps {
}

const LoveStoryDetailDesktop: React.FunctionComponent<ILoveStoryDetailDesktopProps> = (props) => {
	const dispatch = useDispatch();
	const [loading, setLoading] = React.useState<boolean>(false);
	const router = useRouter();
	const { link } = router.query;

	const { storyDetail } = useSelector((state: RootState) => state.loveStory);

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

	React.useEffect(() => {
		if (storyDetail) {
			let tagIds: string[] = storyDetail.tags.map(tag => tag.id);
			dispatch(getLatestBlogs(tagIds));
			dispatch(trackViews(storyDetail.id));
		}
	}, [storyDetail, dispatch])

	const { latestBlogs } = useSelector((state: RootState) => state.blog);
	return (
		<ArticleContainer>
			<GeneralHeaderWrapper>
				{storyDetail && !loading ?
					<GeneralImageWrapper>
						<RenderSmoothImage width='1500' height='600' alt={storyDetail.title} src={storyDetail.banner} />
					</GeneralImageWrapper>
					: <GeneralImageWrapper>
						<RenderSmoothImage width='1500' height='600' alt={''} src={''} />
					</GeneralImageWrapper>}
			</GeneralHeaderWrapper>
			{storyDetail && !loading ?
				<React.Fragment>
					<ContentWrapper>
						<Row gutter={{ xs: 30, sm: 50, xl: 100, xxl: 140 }}>
							<Col span={16}>
								<MarginBottonDiv>
									<GeneralTitlePostDetailH1>{storyDetail.title}</GeneralTitlePostDetailH1>
									<MotoP>{storyDetail.short_description}</MotoP>
									<ShareAndLikeContainer>
										<ShareButton title={storyDetail.title} url={`${domain}${router.pathname}&&${storyDetail.id}#${storyDetail.id}`} />
									</ShareAndLikeContainer>
								</MarginBottonDiv>
								<ContentContainer>
									{parse(storyDetail.contents.replaceAll('<a', "<a  aria-label={'contact us'} target='_blank '"))}
								</ContentContainer>
							</Col>
							<Col span={8}>
								{latestBlogs ? <CategoriesAndTags type={"blog"} latestPosts={latestBlogs.slice(0, 3)} tags={storyDetail?.tags ? storyDetail.tags : []} hasCategory={false} /> : null}
							</Col>

						</Row>
					</ContentWrapper>
					<HrLine margin="25" />
				</React.Fragment> : <React.Fragment>
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
			<LazyLoad>
				<SendStoryContainer>
					<Col md={16}>
						<SendStoryForm />
					</Col>
				</SendStoryContainer>
			</LazyLoad>
			<LazyLoad height={200}>
				<MoreStories />
			</LazyLoad>
		</ArticleContainer>
	);
};

export default LoveStoryDetailDesktop;
