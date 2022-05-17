import MapContainer from '@components/pages/contact/MapContainer';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import SvgCommentDots from '@svgs/CommentDots';
import SvgEnvelop from '@svgs/Envelop';
import SvgMap from '@svgs/Map';
import SvgPhone from '@svgs/Phone';
import ContactWithIcon from '@utils/components/contact/ContactWithIcon';
import HrLine from '@utils/components/HrLine';
import ReadMore from '@utils/components/ReadMore';
import SectionTitle from '@utils/components/SectionTitle';
import { GeneralContentWrapper, GeneralSubTitleHeaderText } from '@utils/styled-components/GeneralStyled';
import { Space } from 'antd';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import { ContactContainer, ContactIconArea, HelpCenterContainer, HereLink } from './ContactStyled';

const faMapMarkerAltProp = faMapMarkerAlt as IconProp;

interface IContactDesktopProps {
}

const ContactDesktop: React.FunctionComponent<IContactDesktopProps> = (props) => {
	const { t } = useTranslation(['contact', 'button', 'routes']);
	const router = useRouter();
	return (
		<GeneralContentWrapper>
			<ContactContainer>
				<Space style={{ width: "100%" }} size={60} direction="vertical">
					<HelpCenterContainer>
						<SectionTitle marginBottom="20" title={t('help.title')} />
						<GeneralSubTitleHeaderText>
							{t('help.desc')}
						</GeneralSubTitleHeaderText>
						<ContactIconArea>
							<ContactWithIcon icon={<SvgCommentDots />} title="message us" detail={`<a aria-label={'contact us'} rel="noreferrer nofollow" target='_blank' href='https://www.facebook.com/messages/t/101187824833257'>m.me/fikaconnects</a>`} />
							<ContactWithIcon icon={<SvgEnvelop />} title="mail us" detail={`<a aria-label={'contact us'} rel='noreferrer' target='_blank' href='mailto:info@fikaconnects.com?subject=&body='>info@fikaconnects.com</a>`} />
						</ContactIconArea>
						<HrLine margin="0" />
					</HelpCenterContainer>
					<HelpCenterContainer>
						<SectionTitle marginBottom="20" title={t('press.title')} />
						<GeneralSubTitleHeaderText>
							{t('press.desc')}
						</GeneralSubTitleHeaderText>
						<ContactIconArea>
							<ContactWithIcon icon={<SvgEnvelop />} title="mail us" detail={`<a aria-label={'contact us'} rel='noreferrer' target='_blank' href='mailto:info@fikaconnects.com?subject=&body='>info@fikaconnects.com</a>`} />
							<ContactWithIcon icon={<SvgPhone />} title="phone us" detail="+84944798739" />
						</ContactIconArea>
						<HrLine margin="0" />
					</HelpCenterContainer>
					<HelpCenterContainer>
						<SectionTitle marginBottom="20" title={t('ask.title')} />
						<GeneralSubTitleHeaderText>
							{t('ask.desc')}
						</GeneralSubTitleHeaderText>
						<HereLink>
							<ReadMore onClick={() => router.push(`/${t('faq', { ns: 'routes' })}`)} text={t('here', { ns: 'button' })} />
						</HereLink>
						<HrLine margin="0" />
					</HelpCenterContainer>
					<SectionTitle marginBottom="20" title="location" icon={<SvgMap />} />
				</Space>
			</ContactContainer>
			<MapContainer />
		</GeneralContentWrapper>
	);
};

export default ContactDesktop;
