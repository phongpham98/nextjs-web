import FeedContent from '@components/home/news-feed/FeedContent';
import { PostRequest } from '@interfaces/posts';
import { getBlogs, loadMoreBlogs, update_query } from '@redux/slices/blog';
import { getLatestNews } from '@redux/slices/news';
import { RootState } from '@redux/store';
import CategoriesAndTags from '@utils/components/categories-tags/CategoriesAndTags';
import BlogLoading from '@utils/components/categories-tags/loading/BlogLoading';
import LoadingContent from '@utils/components/categories-tags/loading/LoadingContent';
import { LoadingContentWrapper } from '@utils/components/categories-tags/loading/LoadingStyled';
import InfiniteScrollPosts from '@utils/components/infinite-scroll-posts/InfiniteScrollPosts';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FeedItem from '../feed-item/FeedItem';
import { BigImageContainer, BlogContentContainer, BlogContentHeader, SingleContentWrapper } from './BlogContentStyled';
import { BlogGridContainer, BlogGridContent, GridImageContainer } from './BlogGridStyled';
import Line from './Line';
const BlogContent = () => {
	const { query, blogs, loadBlogs, total } = useSelector((state: RootState) => state.blog);
	const { latestNews } = useSelector((state: RootState) => state.news);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const dispatch = useDispatch();
	const {t} = useTranslation('routes');

	useEffect(() => {
		// dispatch(clear());
		// if (state)
		// 	dispatch(getBlogs(state.tags ? state.tags : []));
		// else
		dispatch(getBlogs());
		dispatch(getLatestNews());
	}, []);

	const fetchMoreData = () => {
		if (blogs.length + (loadBlogs?.length ? loadBlogs.length : 0) >= total) {
			setHasMore(false);
			return
		}
		const newQuery: PostRequest = {
			limit: query ? query.limit : 9,
			page: query?.page ? query.page + 1 : 1,
		}
		if (newQuery.page === Math.ceil(total / 9)) {
			newQuery.limit = total % 9
		}
		dispatch(update_query(newQuery));
		// if (state)
		// 	dispatch(loadMoreBlogs(state.tags ? state.tags : []));
		// else
		dispatch(loadMoreBlogs());
	};

	return (<BlogContentContainer>
		{blogs.length > 0 ? (<Row gutter={60}>
			<Col span={16}>
				<BlogContentHeader>
					<Link href={`/${t('blogs', {ns: 'routes'})}/${blogs[0].link}`}>
						<a>
							<BigImageContainer>
								<GeneralImageWrapper>
									<RenderSmoothImage width='1000' height='500' src={blogs[0].banner} alt={blogs[0].title} />
								</GeneralImageWrapper>
							</BigImageContainer>
						</a>
					</Link>

					<FeedContent
						url={`/${t('blogs', {ns: 'routes'})}/` + blogs[0].link}
						bigTitle={true}
						small={true}
						story={blogs[0]} />
				</BlogContentHeader>
				<Line marginRight="10%" />
				<SingleContentWrapper>
					{blogs.slice(1, 5).map(blog => {
						return (
							<React.Fragment key={blog.id}>
								<FeedItem
									image={blog.thumbnail}
									url={`/${t('blogs', {ns: 'routes'})}/` + blog.link}
									feedContent={<FeedContent
										url={`/${t('blogs', {ns: 'routes'})}/` + blog.link}
										bigTitle={true}
										small={true}
										story={blog} />}
								/>
								<Line marginRight="5%" />
							</React.Fragment>
						)
					})}
				</SingleContentWrapper>
				<BlogGridContainer>
					<Row gutter={[40, 40]}>
						{blogs.slice(5, 9).map(blog => {
							return (
								<Col key={blog.id} sm={24} md={12}>
									<Link href={`/${t('blogs', {ns: 'routes'})}/` + blog.link}>
										<a maria-label={blog.title} style={{ color: 'black' }}>
											<GridImageContainer>
												<GeneralImageWrapper>
													<RenderSmoothImage width='477' height='377' src={blog.thumbnail ? blog.thumbnail : ''} alt={blog.title} />
												</GeneralImageWrapper>
											</GridImageContainer>
										</a>
									</Link>
									<BlogGridContent >
										<FeedContent
											url={`/${t('blogs', {ns: 'routes'})}/` + blog.link}
											small={true}
											story={blog} />
									</BlogGridContent>
								</Col>
							)
						})}
					</Row>
				</BlogGridContainer>
				<InfiniteScrollPosts
					children={<SingleContentWrapper>
						{loadBlogs?.map(blog => {
							return (
								<React.Fragment key={blog.id}>
									<FeedItem
										url={`/${t('blogs', {ns: 'routes'})}/` + blog.link}
										image={blog.thumbnail}
										feedContent={<FeedContent
											url={`/${t('blogs', {ns: 'routes'})}/` + blog.link}
											bigTitle={true}
											small={true}
											story={blog} />}
									/>
									<Line marginRight="5%" />
								</React.Fragment>
							)
						})}

					</SingleContentWrapper>}
					fetchData={fetchMoreData}
					hasMore={hasMore}
					dataLength={loadBlogs ? loadBlogs.length : 0}
				/>
			</Col>
			<Col span={8}>
				<CategoriesAndTags type="news" tags={blogs[0].tags} latestPosts={latestNews ? latestNews : []} hasCategory={false} hasInvestorBtn={false} />
			</Col>
		</Row>) : (
			<Row gutter={60}>
				<Col span={16}>
					<BlogLoading />
				</Col>
				<Col span={8}>
					<LoadingContentWrapper>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t) => {
							return <LoadingContent key={t} />
						})}
					</LoadingContentWrapper>
				</Col>
			</Row>
		)
		}
	</BlogContentContainer >
	);
};

export default BlogContent;