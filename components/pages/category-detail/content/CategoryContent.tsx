import FeedContent from '@components/home/news-feed/FeedContent';
import { BigImageContainer, BlogContentContainer, BlogContentHeader, SingleContentWrapper } from '@components/pages/blog/content/BlogContentStyled';
import { BlogGridContainer, BlogGridContent, GridImage, GridImageContainer } from '@components/pages/blog/content/BlogGridStyled';
import Line from '@components/pages/blog/content/Line';
import FeedItem from '@components/pages/blog/feed-item/FeedItem';
import { CategoryRequest } from '@interfaces/request';
import { loadMoreBlogs, update_query } from '@redux/slices/category';
import { getListNews } from '@redux/slices/news';
import { RootState } from '@redux/store';
import CategoriesAndTags from '@utils/components/categories-tags/CategoriesAndTags';
import BlogLoading from '@utils/components/categories-tags/loading/BlogLoading';
import LoadingContent from '@utils/components/categories-tags/loading/LoadingContent';
import { LoadingContentWrapper } from '@utils/components/categories-tags/loading/LoadingStyled';
import InfiniteScrollPosts from '@utils/components/infinite-scroll-posts/InfiniteScrollPosts';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
interface ICategoryContentProps {
}

const CategoryContent: React.FunctionComponent<ICategoryContentProps> = (props) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const [hasMore, setHasMore] = React.useState<boolean>(true);
	const {t} = useTranslation('routes')

	const { query, blogs, loadBlogs, total, category } = useSelector((state: RootState) => state.category);
	const { newsList } = useSelector((state: RootState) => state.news);

	React.useEffect(() => {
		dispatch(getListNews());
	}, []);

	const fetchMoreData = () => {
		if (blogs.length + (loadBlogs?.length ? loadBlogs.length : 0) >= total) {
			setHasMore(false);
			return
		}
		const newQuery: CategoryRequest = {
			...query,
			cate_id: category?.link ? category.link : '',
			page: query?.page ? query.page + 1 : 1,
			language: router.locale
		}
		if (newQuery.page === Math.ceil(total / 9)) {
			newQuery.limit = total % 9
		}
		dispatch(update_query(newQuery));
		dispatch(loadMoreBlogs());
	};
	return (
		<BlogContentContainer>
			{blogs.length > 0 ? (<React.Fragment>
				<Row gutter={60}>
					<Col span={16}>
						<BlogContentHeader>
							<BigImageContainer>
								<Link href={`/${t('blogs', {ns: 'routes'})}/` + blogs[0].link}>
									<a>
										<GeneralImageWrapper>
											<RenderSmoothNextImage layout='fill' objectFit='cover' width='500' height='500' src={blogs[0].banner} alt={blogs[0].title} />
										</GeneralImageWrapper>
									</a>
								</Link>

							</BigImageContainer>
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
						</SingleContentWrapper>
						<BlogGridContainer>
							<Row gutter={[40, 40]}>
								{blogs.slice(5, 9).map(blog => {
									return (
										<Col key={blog.id} sm={24} md={12}>
											<GridImageContainer>
												<RenderSmoothNextImage layout='fill' objectFit='cover' src={blog.thumbnail ? blog.thumbnail : ''} alt={blog.title} />
											</GridImageContainer>
											<BlogGridContent>
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
						<CategoriesAndTags type="news" tags={blogs[0].tags} latestPosts={newsList.slice(0, 3)} hasCategory={true} hasInvestorBtn={false} />
					</Col>
				</Row></React.Fragment>) : (
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
			)}
		</BlogContentContainer>
	);
};

export default CategoryContent;
