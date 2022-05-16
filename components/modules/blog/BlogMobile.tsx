import BlogMobileContent from '@components/pages/blog/content/BlogMobileContent';
import { GeneralHeaderMobileContainer } from '@utils/styled-components/GeneralStyled';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { HeaderContent, Image, ImageContainer, SubHeader, Title } from './BlogMobileStyled';

interface IBlogMobileProps {
}

const BlogMobile: React.FunctionComponent<IBlogMobileProps> = (props) => {
	const { t } = useTranslation(['title', 'blog']);
	return (
		<React.Fragment>
			<GeneralHeaderMobileContainer>
				<HeaderContent>
					<Title>
						Fika {t('blogs')}
					</Title>
					<SubHeader>
						{t('blog.header_desc')}
					</SubHeader>
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
