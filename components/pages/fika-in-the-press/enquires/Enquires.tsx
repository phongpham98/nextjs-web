import SvgMail from '@svgs/Mail';
import SvgPhone from '@svgs/Phone';
import ContactWithIcon from '@utils/components/contact/ContactWithIcon';
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { EnquireContactContainer, EnquiresContainer, EnquiresDescription, EnquiresTitle } from './EnquiresStyled';

const Enquires = () => {
	const { t } = useTranslation('common')
	return (
		<GeneralContentWrapper>
			<EnquiresContainer>
				<EnquiresTitle>
					{t('contact.press.title')}
				</EnquiresTitle>
				<EnquiresDescription>
					{t('contact.press.desc')}
				</EnquiresDescription>
				<EnquireContactContainer>
					<ContactWithIcon icon={<SvgMail />} title="message us" detail={`<a aria-label={'contact us'} rel="noreferrer nofollow" target='_blank' href='https://www.facebook.com/messages/t/101187824833257'>m.me/fikaconnects</a>`} />
					<ContactWithIcon icon={<SvgPhone />} title="phone us" detail="+84944798739" />
				</EnquireContactContainer>
			</EnquiresContainer>
		</GeneralContentWrapper>
	);
};

export default Enquires;