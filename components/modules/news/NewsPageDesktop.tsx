import NewsContent from '@components/pages/news/new-content/NewsContent';
import NewsHeader from '@components/pages/news/NewsHeader/NewsHeader';
import * as React from 'react';;
import { NewsContainer } from './NewsPageStyled';

interface INewsPageDesktopProps {
}

const NewsPageDesktop: React.FunctionComponent<INewsPageDesktopProps> = (props) => {
	return (
		<NewsContainer>
			<NewsHeader />
			<NewsContent />
		</NewsContainer>
	);
};

export default NewsPageDesktop;
