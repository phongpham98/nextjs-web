import NewsContent from '@components/pages/news/new-content/NewsContent';
import NewsHeader from '@components/pages/news/NewsHeader/NewsHeader';
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled';
import * as React from 'react';
;

interface INewsPageDesktopProps {
}

const NewsPageDesktop: React.FunctionComponent<INewsPageDesktopProps> = (props) => {
	return (
		<GeneralContentWrapper>
			<NewsHeader />
			<NewsContent />
		</GeneralContentWrapper>
	);
};

export default NewsPageDesktop;
