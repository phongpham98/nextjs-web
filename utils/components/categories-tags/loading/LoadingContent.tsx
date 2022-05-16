import * as React from 'react';
import { LoadingContentContainer } from './LoadingStyled';

interface ILoadingContentProps {
}

const LoadingContent: React.FunctionComponent<ILoadingContentProps> = (props) => {
  return (
	  <LoadingContentContainer>
		  content
	  </LoadingContentContainer>
  );
};

export default LoadingContent;
