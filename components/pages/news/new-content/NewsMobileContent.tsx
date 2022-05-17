import { ButtonDisContainer } from '@components/mobile/home/discover/DiscoverMobileStyled';
import FeedMobile from '@components/mobile/story-feed/FeedMobile';
import FeedTitleFirst from '@components/mobile/story-feed/FeedTitleFirst';
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import { BlogMobileContentContainer } from '@components/pages/blog/content/BlogMoibleContentStyled';
import LatestPosts from '@components/pages/blog/content/LatestPosts';
import { clickDownloadEvent } from '@helpers/customGTM';
import { PostRequest } from '@interfaces/posts';
import { getBlogs } from '@redux/slices/blog';
import { getListNews, getMoreNews, update_query } from '@redux/slices/news';
import { RootState } from '@redux/store';
import FeedMobileLoading from '@utils/components/categories-tags/loading/FeedMobileLoading';
import DownloadFika from '@utils/components/DownloadFika';
import FikaButtonMobile from '@utils/components/FikaButtonMobile';
import HrLine from '@utils/components/HrLine';
import { Space } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

interface INewsMobileContentProps {
}

const NewsMobileContent: React.FunctionComponent<INewsMobileContentProps> = (props) => {
	const dispatch = useDispatch();
	const { newsList, query, loadMoreNews, total } = useSelector((state: RootState) => state.news);
	const { blogs } = useSelector((state: RootState) => state.blog);
	const firstNews = newsList[0];
	const { t } = useTranslation(['routes', 'button']);

	React.useEffect(() => {
		// if (state)
		// 	dispatch(getListNews(undefined, state.tags ? state.tags : []));
		// else
		dispatch(getListNews());
		dispatch(getBlogs());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const fetchMoreData = () => {
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
		<React.Fragment>
			<NavMobile tags={firstNews ? firstNews.tags : []} isLoading={!firstNews} />
			<BlogMobileContentContainer>
				{newsList && newsList.length > 0 ? <Space style={{ width: "100%" }} size={20} direction="vertical">
					{firstNews ? (
						<FeedMobile
							url={`/${t('news')}/${t('detail')}/` + firstNews.link}
							blog={firstNews}
						/>
					) : null}
					<HrLine margin="0" />
					{newsList.slice(1, 4).map(news => {
						return (
							<React.Fragment key={news.id}>
								<FeedTitleFirst
									url={`/${t('news')}/${t('detail')}/` + news.link}
									key={news.id} story={news} />
								<HrLine margin="0" />
							</React.Fragment>
						)
					})}
					<DownloadFika onClick={() => clickDownloadEvent('Fika News - Mobile')} />
					{newsList.slice(5, 9).map(news => {
						return (
							<React.Fragment key={news.id}>
								<FeedMobile
									url={`/${t('news')}/${t('detail')}/` + news.link}
									blog={news} />
								<HrLine margin="0" />
							</React.Fragment>
						)
					})}
					<LatestPosts type="blog" posts={blogs.slice(0, 3)} />
					<HrLine margin="0" />
					{loadMoreNews?.map(news => {
						return (
							<React.Fragment key={news.id}>
								<FeedMobile
									url={`/${t('news')}/${t('detail')}/` + news.link}
									blog={news} />
								<HrLine margin="0" />
							</React.Fragment>
						)
					})}
				</Space> : <FeedMobileLoading />}
				{newsList.length + (loadMoreNews ? loadMoreNews.length : 0) < total ? <ButtonDisContainer>
					<FikaButtonMobile onClick={() => fetchMoreData()}>{t("view_more", { ns: 'button' })}</FikaButtonMobile>
				</ButtonDisContainer> : null}
			</BlogMobileContentContainer>
		</React.Fragment>
	);
};

export default NewsMobileContent;
