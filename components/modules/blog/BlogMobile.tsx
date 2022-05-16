import BlogMobileContent from '@components/pages/blog/content/BlogMobileContent';
import { GeneralHeaderMobileContainer } from '@utils/styled-components/GeneralStyled';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { HeaderContent, Image, ImageContainer, SubHeaderP, BlogTitleH1 } from './BlogMobileStyled';

interface IBlogMobileProps {
}

const BlogMobile: React.FunctionComponent<IBlogMobileProps> = (props) => {
	const { t } = useTranslation(['title', 'blog']);
	return (
		<React.Fragment>
			<GeneralHeaderMobileContainer>
				<HeaderContent>
					<BlogTitleH1>
						Fika {t('blogs')}
					</BlogTitleH1>
					<SubHeaderP>
						{t('header_desc', {ns: 'blog'})}
					</SubHeaderP>
				</HeaderContent>
				<ImageContainer>
					<Image src={'/header-blog.png'} alt="fika blog" />
				</ImageContainer>
			</GeneralHeaderMobileContainer>
			<BlogMobileContent />
		</React.Fragment>
	);
};

export default BlogMobile;
