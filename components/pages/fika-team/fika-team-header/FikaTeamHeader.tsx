import { useTranslation } from 'next-i18next';
import React from 'react';
import CountUp from 'react-countup';
import { AboutFikaSubTitle } from '../fika-team-content/FikaTeamContentStyled';
import { CharacterContainer, CharacterItem, CharacterPercent, CharacterTitle, HeaderContainer, FikaTeamTitleH1 } from './FikaTeamHeaderStyled';

const FikaTeamHeader = () => {
	const { t } = useTranslation('fika-team');
	return (
		<HeaderContainer>
			<FikaTeamTitleH1>{t("header_title")}</FikaTeamTitleH1>
			<AboutFikaSubTitle>{t("header_sub_title")}</AboutFikaSubTitle>
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
		</HeaderContainer>
	);
};

export default FikaTeamHeader;