import { ButtonDisContainer } from '@components/mobile/home/discover/DiscoverMobileStyled';
import FeedMobile from '@components/mobile/story-feed/FeedMobile';
import FeedTitleFirst from '@components/mobile/story-feed/FeedTitleFirst';
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import LatestPosts from '@components/pages/blog/content/LatestPosts';
import { clickDownloadEvent } from '@helpers/customGTM';
import { CategoryRequest } from '@interfaces/request';
import { loadMoreBlogs, update_query } from '@redux/slices/category';
import { getListNews } from '@redux/slices/news';
import { RootState } from '@redux/store';
import FeedMobileLoading from '@utils/components/categories-tags/loading/FeedMobileLoading';
import DownloadFika from '@utils/components/DownloadFika';
import FikaButtonMobile from '@utils/components/FikaButtonMobile';
import HrLine from '@utils/components/HrLine';
import { GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import { Space } from 'antd';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import MoreBlogsCategory from './MoreBlogsCategory';

interface ICategoryMobileContentProps {
}

const CategoryMobileContent: React.FunctionComponent<ICategoryMobileContentProps> = (props) => {
	const dispatch = useDispatch();
	const { t } = useTranslation(['button', 'routes']);

	const { query, blogs, loadBlogs, total, category } = useSelector((state: RootState) => state.category);
	const { newsList } = useSelector((state: RootState) => state.news);
	const firstBlog = blogs[0];

	React.useEffect(() => {
		dispatch(getListNews());
	}, []);

	const fetchMoreData = () => {
		const newQuery: CategoryRequest = {
			...query,
			cate_id: category?.link ? category.link : '',
			page: query?.page ? query.page + 1 : 1,
		}
		if (newQuery.page === Math.ceil(total / 9)) {
			newQuery.limit = total % 9
		}
		dispatch(update_query(newQuery));
		dispatch(loadMoreBlogs());
	};

	return (
		<React.Fragment>
			<NavMobile tags={firstBlog ? firstBlog.tags : []} isLoading={!firstBlog} />
			<GeneralPaddingMobile>
				<Space style={{ width: "100%" }} size={20} direction="vertical">
					{firstBlog ? (
						<FeedMobile
							url={`/${t('blogs', {ns: 'routes'})}/` + firstBlog.link}
							blog={firstBlog} />
					) : <FeedMobileLoading />}
					<HrLine margin="0" />

					{blogs.slice(1, 4).map(blog => {
						return (
							<React.Fragment key={blog.id}>
								<FeedTitleFirst
									url={`/${t('blogs', {ns: 'routes'})}/` + blog.link}
									key={blog.id}
									story={blog} />
								<HrLine margin="0" />
							</React.Fragment>
						)
					})}
					<DownloadFika onClick={() => clickDownloadEvent('Category - Mobile')} />
					{blogs.slice(5, 9).map(blog => {
						return (
							<React.Fragment key={blog.id}>
								<FeedMobile
									url={`/${t('blogs', {ns: 'routes'})}/` + blog.link}
									blog={blog} />
								<HrLine margin="0" />
							</React.Fragment>
						)
					})}
					<LatestPosts type="news" posts={newsList.slice(0, 3)} />
					<HrLine margin="0" />
					<LazyLoad height={200}>
						<MoreBlogsCategory />
					</LazyLoad>
				</Space>
				{blogs.length + (loadBlogs ? loadBlogs.length : 0) < total ? <ButtonDisContainer>
					<FikaButtonMobile onClick={() => fetchMoreData()}>{t("view_more")}</FikaButtonMobile>
				</ButtonDisContainer> : null}
			</GeneralPaddingMobile>
		</React.Fragment>
	);
};

export default CategoryMobileContent;
