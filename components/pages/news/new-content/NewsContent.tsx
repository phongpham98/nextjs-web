import FeedContent from '@components/home/news-feed/FeedContent';
import { BigImageContainer, BlogContentHeader, SingleContentWrapper } from '@components/pages/blog/content/BlogContentStyled';
import { BlogGridContainer, BlogGridContent, GridImageContainer } from '@components/pages/blog/content/BlogGridStyled';
import Line from '@components/pages/blog/content/Line';
import FeedItem from '@components/pages/blog/feed-item/FeedItem';
import { PostRequest } from '@interfaces/posts';
import { getLatestBlogs } from '@redux/slices/blog';
import { getListNews, getMoreNews, update_query } from '@redux/slices/news';
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
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NewsContentContainer } from './NewsContentStyled';
const NewsContent = () => {
	const { newsList, loadMoreNews, query, total } = useSelector((state: RootState) => state.news);
	const { latestBlogs } = useSelector((state: RootState) => state.blog);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const dispatch = useDispatch();
	const { t } = useTranslation('routes');

	useEffect(() => {
		// if (state)
		// 	dispatch(getListNews(undefined, state.tags ? state.tags : []));
		// else
		dispatch(getListNews());
		dispatch(getLatestBlogs());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);



	const fetchMoreData = () => {
		if (newsList.length + loadMoreNews.length >= total) {
			setHasMore(false);
			return
		}
		if (query) {
			const newQuery: PostRequest = {
				limit: query.limit,
				page: query?.page ? query.page + 1 : 1,
			}
			if (newQuery.page === Math.ceil(total / 9)) {
				newQuery.limit = total % 9
			}
			dispatch(update_query(newQuery));
			// if (state)
			// 	dispatch(getMoreNews(state.tags ? state.tags : []));
			// else
			dispatch(getMoreNews());
		}

	};

	return (
		<NewsContentContainer>
			{/* {loading === true && <Loader />} */}
			{newsList.length > 0 ? (<Row gutter={60}>
				<Col span={16}>
					<BlogContentHeader>
						<Link href={`/${t('news')}/${t('detail')}/${newsList[0].link}`}>
							<a>
								<BigImageContainer>
									<GeneralImageWrapper>
										<RenderSmoothImage width='1200' height='500' src={newsList[0].banner} alt={newsList[0].title} />
									</GeneralImageWrapper>
								</BigImageContainer>
							</a>
						</Link>

						<FeedContent
							url={`/${t('news')}/${t('detail')}/` + newsList[0].link}
							bigTitle={true}
							small={true}
							story={newsList[0]} />
					</BlogContentHeader>
					<Line marginRight="10%" />
					<SingleContentWrapper>
						{newsList.slice(1, 5).map(news => {
							return (
								<React.Fragment key={news.id}>
									<FeedItem
										url={`/${t('news')}/${t('detail')}/` + news.link}
										image={news.thumbnail}
										feedContent={<FeedContent
											url={`/${t('news')}/${t('detail')}/` + news.link}
											bigTitle={true}
											small={true}
											story={news} />}
									/>
									<Line marginRight="5%" />
								</React.Fragment>
							)
						})}
					</SingleContentWrapper>
					<BlogGridContainer>
						<Row gutter={[40, 40]}>
							{newsList.slice(5, 9).map(news => {
								return (
									<Col key={news.id} sm={24} md={12}>
										<Link href={`/${t('news')}/${t('detail')}/` + news.link}>
											<a maria-label={news.title} style={{ color: 'black' }}>
												<GridImageContainer>
													<GeneralImageWrapper>
														<RenderSmoothImage width='477' height='377' src={news.thumbnail} alt={news.title} />
													</GeneralImageWrapper>
												</GridImageContainer>
											</a>
										</Link>
										<BlogGridContent >
											<FeedContent
												url={`/${t('news')}/${t('detail')}/` + news.link}
												small={true}
												story={news} />
										</BlogGridContent>
									</Col>
								)
							})}
						</Row>
					</BlogGridContainer>
					<InfiniteScrollPosts
						children={<SingleContentWrapper>
							{loadMoreNews?.map(news => {
								return (
									<React.Fragment key={news.id}>
										<FeedItem
											url={`/${t('news')}/${t('detail')}/` + news.link}
											image={news.thumbnail}
											feedContent={<FeedContent
												url={`/${t('news')}/${t('detail')}/` + news.link}
												bigTitle={true}
												small={true}
												story={news}
											/>}
										/>
										<Line marginRight="5%" />
									</React.Fragment>
								)
							})}

						</SingleContentWrapper>}
						fetchData={fetchMoreData}
						hasMore={hasMore}
						dataLength={loadMoreNews ? loadMoreNews.length : 0}
					/>
				</Col>
				<Col span={8}>
					<CategoriesAndTags type="blog" latestPosts={latestBlogs ? latestBlogs : []} tags={newsList[0].tags} hasInvestorBtn={true} hasCategory={false} hasDownloadButton={false} />
				</Col>
			</Row>
			) : (
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

		</NewsContentContainer >
	);
};

export default NewsContent;