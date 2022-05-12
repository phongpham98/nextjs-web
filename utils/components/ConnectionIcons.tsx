import { faFacebookF, faInstagram, faLinkedinIn, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ConnectionIconContainer, IconContainer, IconContainerProps } from './ConnectionIconStyled';



const ConnectionIcons = ({ backgroundColor }: IconContainerProps) => {

	return (
		<ConnectionIconContainer>
			<IconContainer aria-label='facebook fika' backgroundColor={backgroundColor} rel="noreferrer nofollow" href="https://www.facebook.com/fikaconnects" target="_blank" >
				<FontAwesomeIcon className="icon" icon={faFacebookF} />
			</IconContainer>
			<IconContainer aria-label='instagram fika' backgroundColor={backgroundColor} rel="noreferrer nofollow" href="https://instagram.com/fikaconnects?utm_medium=copy_link" target="_blank" >
				<FontAwesomeIcon className="icon" icon={faInstagram} />
			</IconContainer>
			<IconContainer aria-label='linkedin fika' backgroundColor={backgroundColor} rel="noreferrer nofollow" href="https://www.linkedin.com/company/keepfika/mycompany/" target="_blank" >
				<FontAwesomeIcon className="icon" icon={faLinkedinIn} />
			</IconContainer>
			<IconContainer aria-label='youtube fika' backgroundColor={backgroundColor} rel="noreferrer nofollow" href="https://www.youtube.com/channel/UCtmcZ0-sPoePSt74hWP2Jtg" target="_blank" >
				<FontAwesomeIcon className="icon" icon={faYoutube} />
			</IconContainer>
			<IconContainer aria-label='tiktok fika' backgroundColor={backgroundColor} rel="noreferrer nofollow" href="https://www.tiktok.com/@fikaconnects?" target="_blank" >
				<FontAwesomeIcon className="icon" icon={faTiktok} />
			</IconContainer>
		</ConnectionIconContainer>
	);
};

export default ConnectionIcons;