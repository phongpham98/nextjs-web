import BlogContent from '@components/pages/blog/content/BlogContent';
import BlogHeader from '@components/pages/blog/header/BlogHeader';
import * as React from 'react';
import { BlogContainer } from './BlogStyled';

interface IBlogDesktopProps {
}

const BlogDesktop: React.FunctionComponent<IBlogDesktopProps> = (props) => {
	return (
		<BlogContainer >
			<BlogHeader />
			<BlogContent />
		</BlogContainer>
	);
};

export default BlogDesktop;
