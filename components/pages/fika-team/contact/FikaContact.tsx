import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SvgDoubleQuote from '@svgs/DoubleQuote';
import SvgMail from '@svgs/Mail';
import SvgMap from '@svgs/Map';
import ContactWithIcon from '@utils/components/contact/ContactWithIcon';
import { Col, message, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import FikaContactSlider from './FikaContactSlider';
import { ContactDetailContainer, ContactSubTitle, ContactTitleContainer, FikaContactContainer, ContactTitleH2 } from './FikaContactStyled';
const FikaContact = () => {


	const { t } = useTranslation(['footer', 'career']);

	return (
		<FikaContactContainer>
			<Row>
				<Col xs={24} sm={10}>
					<FikaContactSlider />
				</Col>
				<Col xs={24} sm={14}>
					<ContactDetailContainer>
						<ContactTitleContainer>
							<ContactTitleH2>
								{t('work_at_fika', { ns: 'career' })}
								<br />
								{t('are_u_interested', { ns: 'career' })}
							</ContactTitleH2>
							<div style={{ display: 'inline-flex', fontSize: '3rem' }}>
								<SvgDoubleQuote />
							</div>
						</ContactTitleContainer>
						<ContactSubTitle>
							{t("contact_desc", { ns: "career" })}
						</ContactSubTitle>
						<ContactWithIcon onClick={() => window.open(t("map_link"))} icon={<SvgMap />} title={t('visit_us', { ns: "career" })} detail={`${t("holding")}
										<br />
										${t("address")}`} />
						<CopyToClipboard text={"info@fikaconnects.com"}
							onCopy={() => {
								message.success('Email copied');
							}}>
							<ContactWithIcon onClick={() => { }} icon={<SvgMail />} title={t('mail_us', { ns: 'career' })} detail="info@fikaconnects.com" />
						</CopyToClipboard>
					</ContactDetailContainer>
				</Col>
			</Row>
		</FikaContactContainer>
	);
};

export default FikaContact;