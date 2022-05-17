import NewsMobileContent from '@components/pages/news/new-content/NewsMobileContent';
import { GeneralHeaderMobileContainer } from '@utils/styled-components/GeneralStyled';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { BlogTitleH1, Image, SubHeaderP } from '../blog/BlogMobileStyled';
import { ImageContainer, NewsHeaderMobileContainer } from './NewsPageMobileStyled';

interface INewsPageMobileProps {
}

const NewsPageMobile: React.FunctionComponent<INewsPageMobileProps> = (props) => {
	const { t } = useTranslation(['news', 'title']);
	return (
		<React.Fragment>
			<GeneralHeaderMobileContainer>
				<NewsHeaderMobileContainer>
					<BlogTitleH1>
						{t('news', { ns: 'title' })}
					</BlogTitleH1>
					<SubHeaderP>
						{t('header_desc')}
					</SubHeaderP>
				</NewsHeaderMobileContainer>
				<ImageContainer>
					<Image src={'/news-banner.png'} alt="fika news" />
				</ImageContainer>

			</GeneralHeaderMobileContainer>
			<NewsMobileContent />
		</React.Fragment>
	);
};

export default NewsPageMobile;
