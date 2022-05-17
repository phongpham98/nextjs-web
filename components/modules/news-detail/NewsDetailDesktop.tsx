/* eslint-disable react-hooks/exhaustive-deps */
import { NewsApi } from '@api';
import MoreNews from '@components/pages/news-detail/more-news/MoreNews';
import { domain } from '@configs/api';
import { clickDownloadEvent } from '@helpers/customGTM';
import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import { PostModel } from '@interfaces/posts';
import { getLatestBlogs } from '@redux/slices/blog';
import { trackViews } from '@redux/slices/comment';
import { getNextPost, getPrevPost, update_news_detail } from '@redux/slices/news';
import { RootState } from '@redux/store';
import CategoriesAndTags from '@utils/components/categories-tags/CategoriesAndTags';
import LoadingContent from '@utils/components/categories-tags/loading/LoadingContent';
import LoadingMoto from '@utils/components/categories-tags/loading/LoadingMoto';
import { LoadingContentWrapper } from '@utils/components/categories-tags/loading/LoadingStyled';
import LoadingTitle from '@utils/components/categories-tags/loading/LoadingTitle';
import BlogComment from '@utils/components/comment/BlogComment';
import DownloadFika from '@utils/components/DownloadFika';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import ShareButton from '@utils/components/share/ShareButton';
import { ArticleContainer, ContentContainer, ContentWrapper, GeneralTitlePostDetailH1, MotoP, ShareAndLikeContainer, TimeAndAuthor } from '@utils/styled-components/GeneralContentStyled';
import { GeneralHeaderWrapper, GeneralImageWrapper, MarginBottonDiv } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import { NewsDetailContainer } from './NewsDetailStyled';

interface INewsDetailDesktopProps {
}

const NewsDetailDesktop: React.FunctionComponent<INewsDetailDesktopProps> = (props) => {
	const { newsDetail, nextBlog, prevBlog } = useSelector((state: RootState) => state.news);
	const { latestBlogs } = useSelector((state: RootState) => state.blog);
	const [loading, setLoading] = React.useState<boolean>(false);

	const router = useRouter();
	const { link } = router.query;
	const dispatch = useDispatch();

	const fetchnewsDetail = async () => {
		setLoading(true)
		try {
			let response: PostModel | undefined
			if (typeof link === 'string') {
				if (link.includes('&&')) {
					response = await NewsApi.fetchNewsByLinkOrId(undefined, link.split('&&')[1], router.locale);
				} else
					response = await NewsApi.fetchNewsByLinkOrId(link, undefined, router.locale);
			}
			if (response) {
				setLoading(false)
				dispatch(update_news_detail(response));
			}
		} catch (error: any) {
			setLoading(false)
			console.log('error', error)
		}
	}

	React.useEffect(() => {
		dispatch(getLatestBlogs());
		fetchnewsDetail();
	}, [link])

	React.useEffect(() => {
		if (newsDetail) {
			dispatch(getNextPost(newsDetail.id, newsDetail.created_at));
			dispatch(getPrevPost(newsDetail.id, newsDetail.created_at));
			dispatch(trackViews(newsDetail.id));
		}
	}, [newsDetail]);

	return (
		<ArticleContainer>
			<GeneralHeaderWrapper>
				{newsDetail && !loading ?
					<GeneralImageWrapper>
						<RenderSmoothImage width='1500' height='600' alt={newsDetail.title} src={newsDetail.banner} />
					</GeneralImageWrapper>
					: <GeneralImageWrapper>
						<RenderSmoothImage width='1500' height='600' alt={''} src={''} />
					</GeneralImageWrapper>}
			</GeneralHeaderWrapper> <ContentWrapper>
				<Row gutter={{ xs: 30, sm: 50, xl: 100, xxl: 140 }}>
					<Col span={16}>
						{newsDetail && !loading ?
							<React.Fragment>
								<MarginBottonDiv>
									<GeneralTitlePostDetailH1>{newsDetail.title}</GeneralTitlePostDetailH1>
									<MotoP>{newsDetail.short_description}</MotoP>
									<TimeAndAuthor>{renderDateFollowLanguage(newsDetail.created_at)} / BY {newsDetail.author.name}</TimeAndAuthor>
									<ShareAndLikeContainer>
										<ShareButton title={newsDetail.title} url={`${domain}${router.pathname}&&${newsDetail.id}#${newsDetail.id}`} />

									</ShareAndLikeContainer>
								</MarginBottonDiv>
								<ContentContainer>
									{parse(newsDetail.contents.replaceAll('<a', "<a aria-label={''} target='_blank '"))}
								</ContentContainer>
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
					</Col>
					<Col span={8}>
						{!newsDetail || loading ? <React.Fragment>
							<LoadingContentWrapper>
								{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t) => {
									return <LoadingContent key={t} />
								})}
							</LoadingContentWrapper>
						</React.Fragment> : <CategoriesAndTags type="blog" latestPosts={latestBlogs ? latestBlogs : []} tags={newsDetail.tags} hasCategory={false} hasDownloadButton={false} />}

					</Col>
				</Row>
			</ContentWrapper>
			<DownloadFika onClick={() => clickDownloadEvent('Fika News Detail')} />
			<LazyLoad>
				{newsDetail ? <BlogComment type='news' nextPost={nextBlog} prevPost={prevBlog} author={newsDetail.author} postId={newsDetail.id} /> : null}
			</LazyLoad>
			<LazyLoad>
				<MoreNews />
			</LazyLoad>
		</ArticleContainer>
	);
};

export default NewsDetailDesktop;
