import YoutubePlayer from '@components/home/youtube/YoutubePalyer';
import { clickVideoYoutube } from '@helpers/customGTM';
import currentLocale from '@helpers/getCurrentLocale';
import SvgEnvelop from '@svgs/Envelop';
import SvgInvestorBrandValue from '@svgs/InvestorBrandValue';
import SvgInvestorCoverable from '@svgs/InvestorCoverable';
import SvgInvestorNewCustomers from '@svgs/InvestorNewCustomers';
import SvgInvestorSearching from '@svgs/InvestorSearching';
import SvgInvestorSelfGrowth from '@svgs/InvestorSelfGrowth';
import SvgInvestorTrending from '@svgs/InvestorTrending';
import SvgPhone from '@svgs/Phone';
import ContactWithIcon from '@utils/components/contact/ContactWithIcon';
import HrLine from '@utils/components/HrLine';
import SectionTitle from '@utils/components/SectionTitle';
import { Col, Row, Space } from 'antd';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import InvestorValueItem from '../investor-value/InvestorValueItem';
import SeedFundingSlider from '../slider/SeedFundingSlider';
import { ContactIconArea, Cooperation, CoTitle, Description, DescriptionContainer, GrowthRateContainer, Header, InvestorDescription, InvestorVideoContainer, MapContainer, RelativeDiv, SeedFundingContainer, ValuesContainer } from './GrothRateStyled';
import LatestNews from './LatestNews';
interface IGrowthRateProps {
}

export const investorValues = [
	{
		icon: <SvgInvestorBrandValue />,
		name: {
			en: "Brand Value ",
			vi: "Tăng trưởng giá trị thương hiệu",
		}
	},
	{
		icon: <SvgInvestorCoverable />,
		name: {
			en: "Extended Coverage",
			vi: "Mở rộng độ phủ sóng",
		}
	},
	{
		icon: <SvgInvestorTrending />,
		name: {
			en: "Trending",
			vi: "Nắm bắt xu hướng thịnh hành",
		}
	},
	{
		icon: <SvgInvestorSelfGrowth />,
		name: {
			en: "Sales Growth",
			vi: "Tăng trưởng doanh số",
		}
	},
	{
		icon: <SvgInvestorNewCustomers />,
		name: {
			en: "Develop New Customers",
			vi: "Phát triển khách hàng mới",
		}
	},
	{
		icon: <SvgInvestorSearching />,
		name: {
			en: "Enhance Positioning Segment",
			vi: "Nâng tầm phân khúc định vị",
		}
	},
]


const GrowthRate: React.FunctionComponent<IGrowthRateProps> = (props) => {

	const { t } = useTranslation(['investor', 'common']);

	return (
		<GrowthRateContainer>
			<Space style={{ width: "100%" }} size={80} direction="vertical" >
				<Row justify="space-around" gutter={40}>
					<Col span={10}>
						<LazyLoad throttle={100} height={100} once>
							<img src={'/chart.png'} alt="fika growth chart" width="100%" />
						</LazyLoad>
					</Col>
					<Col span={10}>
						<DescriptionContainer>
							<Header>
								{t('grow_rate_title')}
							</Header>
							<Description>
								{parse(t('grow_rate_desc'))}
							</Description>
						</DescriptionContainer>
					</Col>
				</Row>
				<Row justify="space-around" gutter={20}>
					<Col span={9}>
						<DescriptionContainer>
							<Header>
								{t('seed_funding_title')}
							</Header>
							<Description>
								{parse(t('seed_funding_desc'))}
							</Description>
						</DescriptionContainer>
					</Col>
					<Col span={7}>
						<RelativeDiv>
							<SeedFundingContainer>
								<SeedFundingSlider />
							</SeedFundingContainer>
						</RelativeDiv>
					</Col>
				</Row>
				<Cooperation>
					<CoTitle>
						{t('cooperation_title')}
					</CoTitle>
					<Description>
						{parse(t('cooperation_desc'))}
					</Description>
				</Cooperation>
				<ValuesContainer>
					<Row justify="center" gutter={[30, 60]}>
						{investorValues.map((item, idx) => {
							return (
								<Col key={idx} xs={24} sm={8}>
									<InvestorValueItem icon={item.icon} text={item.name[currentLocale()]} />
								</Col>
							)
						})}
					</Row>
				</ValuesContainer>
				<HrLine margin="15" />
				<MapContainer>
					<CoTitle>
						{t('map_title')}
					</CoTitle>
					<InvestorVideoContainer>
						<YoutubePlayer onClick={() => {
							clickVideoYoutube('Investor Relations Video - Homepage')
						}} id="8aNrMxrVncQ"
							title="Investor Video" />
					</InvestorVideoContainer>
				</MapContainer>
				<HrLine margin="15" />
				<LatestNews />
				<HrLine margin="15" />
				<div style={{ textAlign: "center" }}>
					<SectionTitle marginBottom="20" title={t('contact.press.title', { ns: 'common' })} />
					<InvestorDescription>
						{t('contact.press.desc', { ns: 'common' })}
					</InvestorDescription>
					<ContactIconArea>
						<ContactWithIcon icon={<SvgEnvelop />} title="mail us" detail="info@fikaconnects.com" />
						<ContactWithIcon icon={<SvgPhone />} title="phone us" detail="+84944798739" />
					</ContactIconArea>
				</div>
			</Space>
		</GrowthRateContainer>
	);
};

export default GrowthRate;
