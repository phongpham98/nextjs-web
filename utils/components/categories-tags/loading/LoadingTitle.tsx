import * as React from 'react';
import { LoadingTitleContainer } from './LoadingStyled';

export interface ILoadingTitleProps {
	width?: number;
}

const LoadingTitle: React.FunctionComponent<ILoadingTitleProps> = ({width}) => {
	return (
		<LoadingTitleContainer width={width}>
			xin 
		</LoadingTitleContainer>
	);
};

export default LoadingTitle;
