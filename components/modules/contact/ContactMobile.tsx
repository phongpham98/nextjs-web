import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import SvgCommentDots from '@svgs/CommentDots';
import SvgEnvelop from '@svgs/Envelop';
import SvgMap from '@svgs/Map';
import SvgPhone from '@svgs/Phone';
import ContactWithIcon from '@utils/components/contact/ContactWithIcon';
import HrLine from '@utils/components/HrLine';
import ReadMore from '@utils/components/ReadMore';
import SectionTitle from '@utils/components/SectionTitle';
import { Space } from 'antd';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import { ContactMobileContainer, SubContact } from './ContactMobileStyled.';
import { ContactIconArea, HereLink } from './ContactStyled';

interface IContactMobileProps {
}

const ContactMobile: React.FunctionComponent<IContactMobileProps> = (props) => {
	const { t } = useTranslation(['contact', 'routes', 'button']);
	const router = useRouter()
	return (
		<React.Fragment>
			<NavMobile hasSearchFirst={true} />
			<ContactMobileContainer>
				<SectionTitle marginBottom="10" title={t('help.title')} />
				<SubContact>
					{t('help.desc')}
				</SubContact>
				<Space style={{ width: "100%" }} size={30} direction="vertical">
					<ContactIconArea>
						<ContactWithIcon icon={<SvgEnvelop />} title="mail us" detail={`<a aria-label={'mail us'} rel='noreferrer' target='_blank' href='mailto:info@fikaconnects.com?subject=&body='>info@fikaconnects.com</a>`} />
						<ContactWithIcon icon={<SvgCommentDots />} title="message us" detail={`<a aria-label={'message us'} rel="noreferrer nofollow" target='_blank' href='https://www.facebook.com/messages/t/101187824833257'>m.me/fikaconnects</a>`} />
					</ContactIconArea>
					<HrLine margin="0" />
					<div>
						<SectionTitle marginBottom="10" title={t('press.title')} />
						<SubContact>
							{t('press.desc')}
						</SubContact>
						<ContactIconArea>
							<ContactWithIcon icon={<SvgEnvelop />} title="mail us" detail={`<a aria-label={'mail us'} rel='noreferrer' target='_blank' href='mailto:info@fikaconnects.com?subject=&body='>info@fikaconnects.com</a>`} />
							<ContactWithIcon icon={<SvgPhone />} title="phone us" detail="+84944798739" />
						</ContactIconArea>
					</div>
					<div>
						<SectionTitle marginBottom="20" title={t('ask.title')} />
						<SubContact>
							{t('ask.desc')}
						</SubContact>
						<HereLink>
							<ReadMore onClick={() => router.push(`/${t('faqs', { ns: 'routes' })}`)} text={t('here', { ns: 'button' })} />
						</HereLink>
					</div>
					<HrLine margin="0" />
					<SectionTitle marginBottom="20" title="location" icon={<SvgMap />} />
				</Space>
			</ContactMobileContainer>
		</React.Fragment >
	);
};

export default ContactMobile;
