import { LoadingOutlined } from '@ant-design/icons';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../ultils/store';
import { LoadingContainer, ResultItemContainer, SearchResultsContainer } from './SearchResultsStyled';

interface ISearchResultsProps {
}

const SearchResults: React.FunctionComponent<ISearchResultsProps> = (props) => {
	const { results, loading } = useSelector((state: RootState) => state.search);
	return (
		<SearchResultsContainer>
			{loading === true ?
				<LoadingContainer>
					<LoadingOutlined style={{ fontSize: 24 }} spin />
				</LoadingContainer> : results.map(item => (
					<ResultItemContainer key={item.id}>
						{item.title}
					</ResultItemContainer>
				))}
		</SearchResultsContainer>
	);
};

export default SearchResults;
