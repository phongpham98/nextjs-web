import FeedContent from '@components/home/news-feed/FeedContent';
import { FeedContentWrapper } from '@components/pages/blog-detail/more-blog/MoreBlogsStyled';
import isMobileDevice from '@helpers/isMobile';
import { getListNews } from '@redux/slices/news';
import { RootState } from '@redux/store';
import { CommentText } from '@utils/components/comment/BlogCommentStyled';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { ImageMoreBlogContainer } from '@utils/styled-components/GeneralContentStyled';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { Col, Row, Space } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import { LatestNewsContainer } from './LatestNewsStyled';
interface ILatestNewsProps {
}


const LatestNews: React.FunctionComponent<ILatestNewsProps> = () => {
	const mobile = isMobileDevice();
	const dispatch = useDispatch();
	const {t} = useTranslation('routes')

	React.useEffect(() => {
		dispatch(getListNews())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { newsList } = useSelector((state: RootState) => state.news);

	return (
		<LatestNewsContainer>
			<Space style={{ width: "100%" }} size={40} direction="vertical">
				<CommentText>Latest news</CommentText>
				<Row gutter={[40, mobile ? 20 : 0]}>
					{newsList?.slice(0, 3).map(news => {
						return (
							<Col key={news.id} xs={24} sm={24} md={8}>
								<ImageMoreBlogContainer>
									<LazyLoad throttle={100} height={100} once>
									<Link href={`/${t('news')}/${t('detail')}/${news.link}`}>
										<a>
											<GeneralImageWrapper>
											<RenderSmoothImage width='500' height='500' src={news.thumbnail} alt={news.title} />
										</GeneralImageWrapper>
											</a>
										</Link>
										
									</LazyLoad>
								</ImageMoreBlogContainer>
								<FeedContentWrapper>
									<FeedContent
										url={`/${t('news')}/${t('detail')}/${news.link}`}
										small={true}
										story={news} />
								</FeedContentWrapper>
							</Col>
						)
					})}
				</Row>
			</Space>
		</LatestNewsContainer>
	);
};

export default LatestNews;
