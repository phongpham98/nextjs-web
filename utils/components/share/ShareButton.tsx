import SvgFacebookF from '@svgs/FacebookF';
import SvgLinkedinIn from '@svgs/LinkedinIn';
import SvgTwitter from '@svgs/Twitter';
import * as React from 'react';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { IconContainer, IconWrapper } from './ShareButtonStyled';

export interface IShareButtonProps {
	title?: string;
	url: string;
	banner?: string;
	thumbnail?: string;
}

const ShareButton: React.FunctionComponent<IShareButtonProps> = ({ title, url, thumbnail, banner }) => {

	return (
		<React.Fragment>

			<IconContainer>
				<FacebookShareButton quote={title} url={url}>
					<IconWrapper>
						<SvgFacebookF />
					</IconWrapper>
				</FacebookShareButton>
				<TwitterShareButton title={title} url={url}>
					<IconWrapper>
						<SvgTwitter />
					</IconWrapper>
				</TwitterShareButton>
				<LinkedinShareButton title={title} url={url}>
					<IconWrapper>
						<SvgLinkedinIn />
					</IconWrapper>
				</LinkedinShareButton>
			</IconContainer>

		</React.Fragment>
	);
};

export default ShareButton;
