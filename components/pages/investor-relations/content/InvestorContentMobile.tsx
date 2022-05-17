import YoutubePlayer from '@components/home/youtube/YoutubePalyer';
import { clickVideoYoutube } from '@helpers/customGTM';
import currentLocale from '@helpers/getCurrentLocale';
import SvgEnvelop from '@svgs/Envelop';
import SvgPersonCheck from '@svgs/PersonCheck';
import SvgPhone from '@svgs/Phone';
import SvgPhoneVibrate from '@svgs/PhoneVibrate';
import ContactWithIcon from '@utils/components/contact/ContactWithIcon';
import HrLine from '@utils/components/HrLine';
import SectionTitle from '@utils/components/SectionTitle';
import { Col, Row, Space } from 'antd';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { ContactIconArea, Cooperation, CoTitle, Description, DescriptionContainer, Header, InvestorVideoContainer, RelativeDiv, SeedFundingContainer } from '../components/GrothRateStyled';
import { investorValues } from '../components/GrowthRate';
import LatestNews from '../components/LatestNews';
import TextItem from '../components/TechItem';
import InvestorValueItem from '../investor-value/InvestorValueItem';
import SeedFundingSlider from '../slider/SeedFundingSlider';
import { InvestorContentContainer, SubContact } from './InvestorContentMobileStyled';
import { IntroductionTitle } from './InvestorContentStyled';
interface IInvestorContentMobileProps {
}

const InvestorContentMobile: React.FunctionComponent<IInvestorContentMobileProps> = (props) => {
	const { t } = useTranslation(['investor', 'common']);
	return (
		<InvestorContentContainer>
			<Space style={{ width: "100%" }} size={20} direction="vertical">
				<IntroductionTitle>
					{t('header')}
				</IntroductionTitle>
				<TextItem icon={<SvgPersonCheck />} title={t('focus_on_female_title')} description={t('focus_on_female')} image={'/focus.png'} />
				<TextItem icon={<SvgPhoneVibrate />} title={t('ai_tech_title')} description={t('ai_tech')} image={'/tech.png'} />
				<LazyLoad throttle={100} height={100} once>
					<img src={'/chart.png'} alt="fika growth chart" width="100%" />
				</LazyLoad>
				<DescriptionContainer>
					<Header>
						{t('grow_rate_title')}
					</Header>
					<Description>
						{parse(t('grow_rate_desc'))}

					</Description>
				</DescriptionContainer>
				<RelativeDiv>
					<SeedFundingContainer>
						<SeedFundingSlider />
					</SeedFundingContainer>
				</RelativeDiv>
				<DescriptionContainer>
					<Header>
						{t('seed_funding_title')}
					</Header>
					<Description>
						{parse(t('seed_funding_desc'))}

					</Description>
				</DescriptionContainer>
				<HrLine margin="0" />
				<Cooperation>
					<CoTitle>
						{t('cooperation_title')}
					</CoTitle>
					<Description>
						{parse(t('cooperation_desc'))}
					</Description>
				</Cooperation>
				<Row justify="center" gutter={[0, 20]}>
					{investorValues.map((item, idx) => {
						return (
							<Col key={idx} span={24}>
								<InvestorValueItem icon={item.icon} text={item.name[currentLocale()]} />
							</Col>
						)
					})}
				</Row>
				<CoTitle>
					{t('map_title')}
				</CoTitle>
				<InvestorVideoContainer>
					<YoutubePlayer onClick={() => {
						clickVideoYoutube('Investor Relations Video - Homepage')
					}} id="8aNrMxrVncQ"
						title="Investor Video" />
				</InvestorVideoContainer>
				<HrLine margin="0" />
				<LatestNews />
				<HrLine margin="0" />
				<div>
					<SectionTitle marginBottom="10" title={t('contact.press.title', { ns: 'common' })} />
					<SubContact>
						{t('contact.press.desc', { ns: 'common' })}
					</SubContact>
					<ContactIconArea>
						<ContactWithIcon icon={<SvgEnvelop />} title="mail us" detail="info@fikaconnects.com" />
						<ContactWithIcon icon={<SvgPhone />} title="phone us" detail="+84944798739" />
					</ContactIconArea>
				</div>
			</Space>
		</InvestorContentContainer>
	);
};

export default InvestorContentMobile;
