import { PostModel } from '@interfaces/posts';
import React from 'react';
import CeoBlogContent from './CeoBlogContent';
import { BlogContentContainer, CeoBlogContainer, CeoImage, CeoImageContainer, ImageWrapper } from './CeoBlogStyled';

interface SingleBlogProps {
	blog: PostModel;
}


const CeoBlog = ({ blog }: SingleBlogProps) => {

	return (
		<CeoBlogContainer >
			<ImageWrapper>
				<CeoImageContainer>
					<CeoImage src={blog.thumbnail} alt={blog.title} />
				</CeoImageContainer>
			</ImageWrapper>
			<BlogContentContainer >
				<CeoBlogContent blog={blog} />
			</BlogContentContainer>
		</CeoBlogContainer>
	);
};

export default CeoBlog;