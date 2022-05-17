import * as React from 'react';
import { TeamMoibleTitleH1, TeamSubHeader } from './FikaTeamMobileStyled';
import CountUp from 'react-countup';
import { useTranslation } from 'next-i18next';
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import { GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import { CharacterContainer, CharacterItem, CharacterPercent, CharacterTitle } from '@components/pages/fika-team/fika-team-header/FikaTeamHeaderStyled';
import SectionTitle from '@utils/components/SectionTitle';
import FikaMembersMobile from '@components/pages/fika-team/fika-team-content/FikaMembersMobile';
import { Space } from 'antd';
import HrLine from '@utils/components/HrLine';
import JoinFika from '@components/pages/fika-team/join-fika/JoinFika';
import FikaContactMobile from '@components/pages/fika-team/contact/FikaContactMobile';

interface IFikaTeamMobileProps {
}

const FikaTeamMobile: React.FunctionComponent<IFikaTeamMobileProps> = (props) => {
	const { t } = useTranslation('fika-team');
	return (
		<React.Fragment>
			<NavMobile hasSearchFirst={true} />
			<GeneralPaddingMobile>
				<TeamMoibleTitleH1>{t("header_title")}</TeamMoibleTitleH1>
				<TeamSubHeader>{t("header_sub_title")}</TeamSubHeader>

				<CharacterContainer>
					<CharacterItem>
						<CharacterTitle>{t("hard_working")}</CharacterTitle>
						<CharacterPercent><CountUp end={100} duration={1.5} />%</CharacterPercent>
					</CharacterItem>
					<CharacterItem>
						<CharacterTitle>{t("ambitious")}</CharacterTitle>
						<CharacterPercent><CountUp end={100} duration={1.5} />%</CharacterPercent>
					</CharacterItem>
					<CharacterItem>
						<CharacterTitle>{t("innovative")}</CharacterTitle>
						<CharacterPercent><CountUp end={100} duration={1.5} />%</CharacterPercent>
					</CharacterItem>
				</CharacterContainer>
				<SectionTitle marginBottom="20" title={t("fika_team.our_excecutive_team")} />
				<TeamSubHeader>{t("our_executive_team_desc")}
				</TeamSubHeader>
				<FikaMembersMobile />
				<Space style={{ width: "100%" }} size={30} direction="vertical">
					<HrLine margin="0" />
					<JoinFika />
					<FikaContactMobile />
				</Space>
			</GeneralPaddingMobile>
		</React.Fragment>
	);
};

export default FikaTeamMobile;
