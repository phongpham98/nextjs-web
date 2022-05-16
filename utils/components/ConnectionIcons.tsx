import SvgFacebookF from '@svgs/FacebookF';
import SvgInstagram from '@svgs/Instagram';
import SvgLinkedinIn from '@svgs/LinkedinIn';
import SvgTiktok from '@svgs/Tiktok';
import SvgYoutube from '@svgs/Youtube';
import React from 'react';
import { ConnectionIconContainer, IconContainer, IconContainerProps } from './ConnectionIconStyled';



const ConnectionIcons = ({ backgroundColor }: IconContainerProps) => {

	return (
		<ConnectionIconContainer>
			<IconContainer aria-label='facebook fika' backgroundColor={backgroundColor} rel="noreferrer nofollow" href="https://www.facebook.com/fikaconnects" target="_blank" >
				<SvgFacebookF className='icon' />
			</IconContainer>
			<IconContainer aria-label='instagram fika' backgroundColor={backgroundColor} rel="noreferrer nofollow" href="https://instagram.com/fikaconnects?utm_medium=copy_link" target="_blank" >
				<SvgInstagram color='white' className="icon" />
			</IconContainer>
			<IconContainer aria-label='linkedin fika' backgroundColor={backgroundColor} rel="noreferrer nofollow" href="https://www.linkedin.com/company/keepfika/mycompany/" target="_blank" >
				<SvgLinkedinIn className="icon" />
			</IconContainer>
			<IconContainer aria-label='youtube fika' backgroundColor={backgroundColor} rel="noreferrer nofollow" href="https://www.youtube.com/channel/UCtmcZ0-sPoePSt74hWP2Jtg" target="_blank" >
				<SvgYoutube className="icon" />
			</IconContainer>
			<IconContainer aria-label='tiktok fika' backgroundColor={backgroundColor} rel="noreferrer nofollow" href="https://www.tiktok.com/@fikaconnects?" target="_blank" >
				<SvgTiktok className="icon" />
			</IconContainer>
		</ConnectionIconContainer>
	);
};

export default ConnectionIcons;