import * as React from 'react';
import { EmptySearchContainer, EmptySearchText } from './SearchPageStyled';

interface IEmptySearchResultProps {
}

const EmptySearchResult: React.FunctionComponent<IEmptySearchResultProps> = (props) => {
	return (
		<EmptySearchContainer>
			<div style={{ display: "inline-flex" }}>
				<img style={{ margin: '0 auto' }} src={'/empty_search.png'} width={'40%'} alt='empty search' />
			</div>
			<EmptySearchText>
				opps! empty search result
			</EmptySearchText>
		</EmptySearchContainer>
	);
};

export default EmptySearchResult;
