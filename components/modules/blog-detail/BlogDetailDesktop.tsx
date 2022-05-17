/* eslint-disable react-hooks/exhaustive-deps */
import { BlogApi } from '@api';
import MoreBlogs from '@components/pages/blog-detail/more-blog/MoreBlogs';
import { domain } from '@configs/api';
import { clickDownloadEvent } from '@helpers/customGTM';
import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import { PostModel } from '@interfaces/posts';
import { getNextPost, getPrevPost, update_blog_detail } from '@redux/slices/blog';
import { trackViews } from '@redux/slices/comment';
import { getLatestNews } from '@redux/slices/news';
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
interface IBlogDetailDesktopProps {
}

const BlogDetailDesktop: React.FunctionComponent<IBlogDetailDesktopProps> = (props) => {
	const dispatch = useDispatch();
	const { blogDetail, nextBlog, prevBlog } = useSelector((state: RootState) => state.blog);
	const router = useRouter();
	const { link } = router.query;
	const { latestNews } = useSelector((state: RootState) => state.news);
	const [loading, setLoading] = React.useState<boolean>(false);

	const fetchBlogDetail = async () => {
		setLoading(true)
		try {
			let response: PostModel | undefined
			if (typeof link === 'string') {
				if (link.includes('&&')) {
					response = await BlogApi.fetchByLinkorId(undefined, link.split('&&')[1], router.locale);
				} else
					response = await BlogApi.fetchByLinkorId(link, undefined, router.locale);
			}

			if (response) {
				setLoading(false)
				dispatch(update_blog_detail(response));
			}
		} catch (error: any) {
			setLoading(false)
		}
	}

	React.useEffect(() => {
		dispatch(getLatestNews());
		fetchBlogDetail();
	}, [link]);

	React.useEffect(() => {
		if (blogDetail) {
			dispatch(getPrevPost(blogDetail.id, blogDetail.created_at));
			dispatch(getNextPost(blogDetail.id, blogDetail.created_at));
			dispatch(trackViews(blogDetail.id));
		}
	}, [blogDetail]);

	return (
		<ArticleContainer>
			<GeneralHeaderWrapper>
				{blogDetail && !loading ?
					<GeneralImageWrapper>
						<RenderSmoothImage width='1500' height='600' alt={blogDetail.title} src={blogDetail.banner} />
					</GeneralImageWrapper>
					: <GeneralImageWrapper>
						<RenderSmoothImage width='1500' height='600' alt={''} src={''} />
					</GeneralImageWrapper>}
			</GeneralHeaderWrapper> <ContentWrapper>
				<Row gutter={{ xs: 30, sm: 50, xl: 100, xxl: 140 }}>
					<Col span={16}>
						{blogDetail && !loading ?
							<React.Fragment>
								<MarginBottonDiv>
									<GeneralTitlePostDetailH1>{blogDetail.title}</GeneralTitlePostDetailH1>
									<MotoP>{blogDetail.short_description}</MotoP>
									<TimeAndAuthor>{renderDateFollowLanguage(blogDetail.created_at)} / BY {blogDetail.author.name}</TimeAndAuthor>
									<ShareAndLikeContainer>
										<ShareButton title={blogDetail.title} url={`${domain}${router.pathname}&&${blogDetail.id}#${blogDetail.id}`} />

									</ShareAndLikeContainer>
								</MarginBottonDiv>
								<ContentContainer>
									{parse(blogDetail.contents.replaceAll('<a', "<a aria-label={''} target='_blank '"))}
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
						{blogDetail && !loading ? <CategoriesAndTags type={"news"} latestPosts={latestNews ? latestNews : []} tags={blogDetail.tags} hasCategory={false} hasDownloadButton={false} /> : <LoadingContentWrapper>
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t) => {
								return <LoadingContent key={t} />
							})}
						</LoadingContentWrapper>}
					</Col>
				</Row>
			</ContentWrapper>
			<DownloadFika onClick={() => clickDownloadEvent('Fika Blog')} />
			<LazyLoad>
				<div id="div1">
					{blogDetail ? <BlogComment nextPost={nextBlog} prevPost={prevBlog} type="blog" author={blogDetail.author} postId={blogDetail.id} /> : null}
				</div>
			</LazyLoad>
			<LazyLoad>
				<MoreBlogs />
			</LazyLoad>
		</ArticleContainer>
	);
};

export default BlogDetailDesktop;
