import FeedContent from '@components/home/news-feed/FeedContent';
import { getBlogs } from '@redux/slices/blog';
import { RootState } from '@redux/store';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { CommentTextH3, ImageMoreBlogContainer } from '@utils/styled-components/GeneralContentStyled';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { Col, Row, Space } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import { FeedContentWrapper, MoreStoriesContainer } from './MoreBlogsStyled';
const MoreBlogs = () => {
	const dispatch = useDispatch();
	const { blogs, blogDetail } = useSelector((state: RootState) => state.blog);
	useEffect(() => {
		if (blogDetail) {
			dispatch(getBlogs([], [blogDetail.id]))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [blogDetail]);

	const { t } = useTranslation('common')

	return (
		<MoreStoriesContainer>
			{blogs && blogs.length > 0 ?
				<Space style={{ width: "100%" }} size={40} direction="vertical">
					<CommentTextH3>{t('more_blogs')}</CommentTextH3>
					<Row gutter={[40, 40]}>
						{blogs?.slice(0, 6).map(blog => {
							return (
								<Col key={blog.id} sm={24} md={8}>
									<Link href={`/blog/` + blog.link}>
										<a>
											<ImageMoreBlogContainer>
												<LazyLoad throttle={100} height={100} once>
													<GeneralImageWrapper>
														<RenderSmoothImage width='500' height='500' src={blog.thumbnail} alt={blog.title} />
													</GeneralImageWrapper>
												</LazyLoad>
											</ImageMoreBlogContainer>
										</a>
									</Link>
									<FeedContentWrapper>
										<FeedContent
											small={true}
											headingTag="h4"
											url={`/blog/` + blog.link}
											story={blog} />
									</FeedContentWrapper>
								</Col>
							)
						})}
					</Row>
				</Space> : null}
		</MoreStoriesContainer>
	);
};

export default MoreBlogs;