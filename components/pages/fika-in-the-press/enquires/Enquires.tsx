import SvgMail from '@svgs/Mail';
import SvgPhone from '@svgs/Phone';
import ContactWithIcon from '@utils/components/contact/ContactWithIcon';
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled';
import React from 'react';
import { EnquireContactContainer, EnquiresContainer, EnquiresDescription, EnquiresTitle } from './EnquiresStyled';

const Enquires = () => {

	return (
		<GeneralContentWrapper>
			<EnquiresContainer>
				<EnquiresTitle>
					Press or sponsorship enquires
				</EnquiresTitle>
				<EnquiresDescription>
					If you have any idea of how we can work together, feel free to contact us via email or mobile. We’d love to talk to you!
				</EnquiresDescription>
				<EnquireContactContainer>
					<ContactWithIcon icon={<SvgMail />} title="message us" detail={<a aria-label={'contact us'} rel="noreferrer nofollow" target='_blank' href='https://www.facebook.com/messages/t/101187824833257'>m.me/fikaconnects</a>} />
					<ContactWithIcon icon={<SvgPhone />} title="phone us" detail="+84944798739" />
				</EnquireContactContainer>
			</EnquiresContainer>
		</GeneralContentWrapper>
	);
};

export default Enquires;