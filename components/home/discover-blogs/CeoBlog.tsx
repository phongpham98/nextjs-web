import { PostModel } from '@interfaces/posts';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import CeoBlogContent from './CeoBlogContent';
import { BlogContentContainer, CeoBlogContainer, CeoImage, CeoImageContainer, ImageWrapper } from './CeoBlogStyled';

interface SingleBlogProps {
	blog: PostModel;
}


const CeoBlog = ({ blog }: SingleBlogProps) => {
	const {t} = useTranslation('routes')
	return (
		<CeoBlogContainer >
			<ImageWrapper>
				<Link href={`/${t('blogs', {ns: 'routes'})}/` + blog.link}>
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