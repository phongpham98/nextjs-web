import SvgDoubleQuote from '@svgs/DoubleQuote';
import SvgMail from '@svgs/Mail';
import SvgMap from '@svgs/Map';
import ContactWithIcon from '@utils/components/contact/ContactWithIcon';
import { Space } from 'antd';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import FikaContactSlider from './FikaContactSlider';
import { ContactTitleContainer, Title } from './FikaContactStyled';

interface IFikaContactMobileProps {
}

const FikaContactMobile: React.FunctionComponent<IFikaContactMobileProps> = (props) => {
	const { t } = useTranslation(['career', 'footer']);
	return (
		<React.Fragment>
			<Space style={{ width: "100%" }} size={30} direction="vertical">
				<FikaContactSlider />
				<ContactTitleContainer>
					<Title>
						{t('work_at_fika')}
						<br />
						{t('are_u_interested')}
						<span><SvgDoubleQuote color='#000' /></span>
					</Title>
				</ContactTitleContainer>
				<ContactWithIcon icon={<SvgMap />} title={t('visit_us')} detail={`${t("holding", { ns: 'footer' })}
										<br />
										${t("address", { ns: 'footer' })}`} />
				<ContactWithIcon icon={<SvgMail />} title={t('mail_us')} detail="info@fikaconnects.com" />
			</Space>
		</React.Fragment>
	);
};

export default FikaContactMobile;
