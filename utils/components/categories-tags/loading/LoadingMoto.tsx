import * as React from 'react';
import { LoadingMotoContainer } from './LoadingStyled';
import { ILoadingTitleProps } from './LoadingTitle';

const LoadingMoto: React.FunctionComponent<ILoadingTitleProps> = ({width}) => {
  return (
	  <LoadingMotoContainer width={width}>
		  Moto
	  </LoadingMotoContainer>
  );
};

export default LoadingMoto;
