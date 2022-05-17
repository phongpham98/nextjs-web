
import SvgFacebookF from '@svgs/FacebookF';
import SvgLinkedinIn from '@svgs/LinkedinIn';
import SvgTwitter from '@svgs/Twitter';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import React from 'react';
import { ContactIconContainer, FikaMemberContainer, MemberImage, MemberInforContainer, MemberName, MemberPosition } from './FikaMemberStyled';

interface FikaMemberProps {
	image: string;
	name?: string;
	position?: string;
}

const FikaMember = ({ image, name, position }: FikaMemberProps) => {
	return (
		<FikaMemberContainer>
			<MemberImage>
				<RenderSmoothNextImage
					priority
					quality={75}
					src={image}
					layout="fill"
					objectFit='contain'
					alt='a person' />
				{/* <GeneralImage width="100%" src={image} alt={name} /> */}
			</MemberImage>
			<MemberInforContainer>
				<MemberName>{name}</MemberName>
				<MemberPosition>{position}</MemberPosition>
				<ContactIconContainer>
					<SvgFacebookF />
					<SvgTwitter />
					<SvgLinkedinIn />
				</ContactIconContainer>
			</MemberInforContainer>
		</FikaMemberContainer>
	);
};

export default FikaMember;