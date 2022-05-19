import BlogContent from '@components/pages/blog/content/BlogContent';
import BlogHeader from '@components/pages/blog/header/BlogHeader';
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled';
import * as React from 'react';
import { BlogContainer } from './BlogStyled';

interface IBlogDesktopProps {
}

const BlogDesktop: React.FunctionComponent<IBlogDesktopProps> = (props) => {
	return (
		<GeneralContentWrapper >
			<BlogHeader />
			<BlogContent />
		</GeneralContentWrapper>
	);
};

export default BlogDesktop;
