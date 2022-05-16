import SvgFacebookRound from '@svgs/FacebookRound';
import SvgInstagram from '@svgs/Instagram';
import SvgLinkedinIn from '@svgs/LinkedinIn';
import SvgTwitter from '@svgs/Twitter';
import { message } from 'antd';
import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { IShareButtonProps } from './ShareButton';
import { HrLineSpan, ShareIconWrapper } from './ShareButtonStyled';

const ShareFeedButtons: React.FunctionComponent<IShareButtonProps> = ({ title, url }) => {
	return (
		<ShareIconWrapper>
			<FacebookShareButton style={{ display: "grid" }} quote={title} url={url}>
				<SvgFacebookRound style={{ cursor: "pointer" }} />
			</FacebookShareButton>

			<HrLineSpan />
			<TwitterShareButton style={{ display: "grid" }} title={title} url={url}>
				<SvgTwitter style={{ cursor: "pointer" }} />
			</TwitterShareButton>

			<HrLineSpan />
			<CopyToClipboard text={url}
				onCopy={() => {
					message.success('Link copied');
					setTimeout(() => {
						window.open("https://www.instagram.com/")
					}, 1000)
				}}>
				<SvgInstagram style={{ cursor: "pointer" }} />
			</CopyToClipboard>

			<HrLineSpan />
			<LinkedinShareButton style={{ display: "grid" }} title={title} url={url}>
				<SvgLinkedinIn style={{ cursor: "pointer" }} />
			</LinkedinShareButton>

		</ShareIconWrapper >
	);
};

export default ShareFeedButtons;
