import { ButtonDisContainer } from '@components/mobile/home/discover/DiscoverMobileStyled';
import FeedMobile from '@components/mobile/story-feed/FeedMobile';
import FeedTitleFirst from '@components/mobile/story-feed/FeedTitleFirst';
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import { clickDownloadEvent } from '@helpers/customGTM';
import { PostRequest } from '@interfaces/posts';
import { clear, getBlogs, loadMoreBlogs, update_query } from '@redux/slices/blog';
import { getListNews } from '@redux/slices/news';
import { RootState } from '@redux/store';
import FeedMobileLoading from '@utils/components/categories-tags/loading/FeedMobileLoading';
import DownloadFika from '@utils/components/DownloadFika';
import FikaButtonMobile from '@utils/components/FikaButtonMobile';
import HrLine from '@utils/components/HrLine';
import { Space } from 'antd';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlogMobileContentContainer } from './BlogMoibleContentStyled';
import LatestPosts from './LatestPosts';
interface IBlogMobileContentProps {
}

const BlogMobileContent: React.FunctionComponent<IBlogMobileContentProps> = (props) => {
	const { blogs, query, loadBlogs, total } = useSelector((state: RootState) => state.blog);
	const { newsList } = useSelector((state: RootState) => state.news);
	const { t } = useTranslation('button');
	const firstBlog = blogs.length > 0 ? blogs[0] : undefined;
	const router = useRouter();
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(clear());
		// if (state)
		// 	dispatch(getBlogs(state.tags ? state.tags : []));
		// else
		dispatch(getBlogs());
		dispatch(getListNews());
		return () => {
			dispatch(clear());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const fetchMoreData = () => {
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

	return (
		<React.Fragment>
			<NavMobile tags={firstBlog ? firstBlog.tags : []} isLoading={!firstBlog} />
			<BlogMobileContentContainer>
				<Space style={{ width: "100%" }} size={20} direction="vertical">
					{firstBlog ? (
						<FeedMobile
							url={`/blog/` + firstBlog.link}
							 blog={firstBlog} />
					) : <FeedMobileLoading />}
					<HrLine margin="0" />

					{blogs.slice(1, 4).map(blog => {
						return (
							<React.Fragment key={blog.id}>
								<FeedTitleFirst
									onClick={() => router.push(`/blog/` + blog.link)}
									url={`/blog/` + blog.link}
									key={blog.id} story={blog} />
								<HrLine margin="0" />
							</React.Fragment>
						)
					})}
					<DownloadFika onClick={() => clickDownloadEvent('Fika Blog - Mobile')} />
					{blogs.slice(5, 9).map(blog => {
						return (
							<React.Fragment key={blog.id}>
								<FeedMobile
									url={`/blog/` + blog.link}
									 blog={blog} />
								<HrLine margin="0" />
							</React.Fragment>
						)
					})}
					<LatestPosts type="news" posts={newsList.slice(0, 3)} />
					<HrLine margin="0" />
					{loadBlogs?.map(blog => {
						return (
							<React.Fragment key={blog.id}>
								<FeedMobile
									url={`/blog/` + blog.link}
									blog={blog} />
								<HrLine margin="0" />
							</React.Fragment>
						)
					})}
				</Space>
				{blogs.length + (loadBlogs ? loadBlogs.length : 0) < total ? <ButtonDisContainer>
					<FikaButtonMobile onClick={() => fetchMoreData()}>{t("view_more")}</FikaButtonMobile>
				</ButtonDisContainer> : null}
			</BlogMobileContentContainer>
		</React.Fragment>
	);
};

export default BlogMobileContent;
