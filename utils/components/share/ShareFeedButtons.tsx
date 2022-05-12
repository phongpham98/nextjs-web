import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { message } from 'antd';
import { IShareButtonProps } from './ShareButton';
import { HrLineSpan, ShareIconWrapper } from './ShareButtonStyled';

const ShareFeedButtons: React.FunctionComponent<IShareButtonProps> = ({ title, url }) => {
	return (
		<ShareIconWrapper>
			<FacebookShareButton style={{ display: "grid" }} quote={title} url={url}>
				<FontAwesomeIcon style={{ cursor: "pointer" }} icon={faFacebook} />
			</FacebookShareButton>

			<HrLineSpan />
			<TwitterShareButton style={{ display: "grid" }} title={title} url={url}>
				<FontAwesomeIcon style={{ cursor: "pointer" }} icon={faTwitter} />
			</TwitterShareButton>

			<HrLineSpan />
			<CopyToClipboard text={url}
				onCopy={() => {
					message.success('Link copied');
					setTimeout(() => {
						window.open("https://www.instagram.com/")
					}, 1000)
				}}>
				<FontAwesomeIcon style={{ cursor: "pointer" }} icon={faInstagram} />
			</CopyToClipboard>

			<HrLineSpan />
			<LinkedinShareButton style={{ display: "grid" }} title={title} url={url}>
				<FontAwesomeIcon style={{ cursor: "pointer" }} icon={faLinkedinIn} />
			</LinkedinShareButton>

		</ShareIconWrapper >
	);
};

export default ShareFeedButtons;
