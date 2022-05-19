import FeedContent from '@components/home/news-feed/FeedContent';
import { PostModel } from '@interfaces/posts';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { BlogGridContainer, BlogGridContent, GridImage, GridImageContainer } from './BlogGridStyled';

interface BlogGridProps {
	blogs: PostModel[];
}

const BlogGrid = ({ blogs }: BlogGridProps) => {
	const {t} = useTranslation('routes')
	return (
		<BlogGridContainer>
			<Row gutter={[40, 40]}>
				{blogs.map(blog => {
					return (
						<Col key={blog.id} sm={24} md={12}>
							<GridImageContainer>
								<GridImage src={blog.thumbnail} alt={blog.title} />
							</GridImageContainer>
							<BlogGridContent >
								<FeedContent
									url={`/${t('blogs', {ns: 'routes'})}/` + blog.link}
									small={true} story={blog} />
							</BlogGridContent>
						</Col>
					)
				})}
			</Row>
		</BlogGridContainer>
	);
};

export default BlogGrid;