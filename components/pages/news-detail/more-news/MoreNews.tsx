import FeedContent from '@components/home/news-feed/FeedContent';
import { FeedContentWrapper, MoreStoriesContainer } from '@components/pages/blog-detail/more-blog/MoreBlogsStyled';
import { Tag } from '@interfaces/posts';
import { getListNews } from '@redux/slices/news';
import { RootState } from '@redux/store';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { CommentTextH3, ImageMoreBlogContainer } from '@utils/styled-components/GeneralContentStyled';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { Col, Row, Space } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
interface IMoreNewsProps {
	tags?: Tag[];
}


const MoreNews: React.FunctionComponent<IMoreNewsProps> = (tags) => {

	const dispatch = useDispatch();
	const { t } = useTranslation(['routes', 'common']);
	const { newsList, newsDetail } = useSelector((state: RootState) => state.news);

	React.useEffect(() => {
		if (newsDetail)
			dispatch(getListNews(newsDetail.id))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newsDetail]);


	return (
		<MoreStoriesContainer>
			{newsList && newsList.length > 0 ?
				<Space style={{ width: "100%" }} size={40} direction="vertical">
					<CommentTextH3>{t("more_news", { ns: 'common' })}</CommentTextH3>
					<Row gutter={[40, 40]}>
						{newsList?.slice(0, 6).map(news => {
							return (
								<Col key={news.id} sm={24} md={8}>
									<Link href={`/${t('news')}/${t('detail')}/` + news.link}>
										<a>
											<ImageMoreBlogContainer>
												<LazyLoad throttle={100} height={100} once>
													<GeneralImageWrapper>
														<RenderSmoothImage width='500' height='500' src={news.thumbnail} alt={news.title} />
													</GeneralImageWrapper>
												</LazyLoad>
											</ImageMoreBlogContainer>
										</a>
									</Link>
									<FeedContentWrapper>
										<FeedContent
											small={true}
											headingTag="h4"
											url={`/${t('news')}/${t('detail')}/` + news.link}
											story={news} />
									</FeedContentWrapper>
								</Col>
							)
						})}
					</Row>
				</Space> : null}
		</MoreStoriesContainer>
	);
};

export default MoreNews;
