import { PostModel } from '@interfaces/posts';
import Link from 'next/link';
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
				<Link href={`/blog/` + blog.link}>
					<a>
						<CeoImageContainer>
							<CeoImage src={blog.thumbnail} alt={blog.title} />
						</CeoImageContainer>
					</a>
				</Link>

			</ImageWrapper>
			<BlogContentContainer >
				<CeoBlogContent blog={blog} />
			</BlogContentContainer>
		</CeoBlogContainer>
	);
};

export default CeoBlog;