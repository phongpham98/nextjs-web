import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { ButtonInsContainer, ButtonInstagram, InstagramPostContainer, OpacityBackground } from './InstagramStyled';

interface InstagramPostProps {
	img?: string;
	link?: string;
}

const InstagramPost = ({ img, link }: InstagramPostProps) => {

	return (
		<InstagramPostContainer>
			<GeneralImageWrapper>
				<RenderSmoothImage width='200' height='200' src={img ? img : ''} alt="fikaconnects" />
			</GeneralImageWrapper>
			{!isMobile && (
				<React.Fragment>
					<OpacityBackground></OpacityBackground>
					<ButtonInsContainer>
						<a aria-label={'instagram fika'} rel="noreferrer nofollow" target={'_blank'} href={link}>
							<ButtonInstagram onClick={() => window.open(link)}>instagram</ButtonInstagram>
						</a>
					</ButtonInsContainer>
				</React.Fragment>
			)}
		</InstagramPostContainer>
	);
};

export default InstagramPost;