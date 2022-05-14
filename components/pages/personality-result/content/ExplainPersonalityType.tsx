import { ExplainationContainer, PTypeContentP, PTypeTitleH3 } from '@components/modules/personality-type/PersonalityTypeStyled';
import currentLocale from '@helpers/getCurrentLocale';
import { InsightsModel } from '@interfaces/model';
import { Space } from 'antd';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { PTypeCaptionH2 } from './ResultBodyStyled';

interface IExplainPersonalityTypeProps {
	insights: InsightsModel;
	code: string
}

const ExplainPersonalityType: React.FunctionComponent<IExplainPersonalityTypeProps> = ({ insights, code }) => {
	const { t } = useTranslation('personality-type');
	return (
		<React.Fragment>
			<ExplainationContainer>
				<Space style={{ width: "100%" }} size={30} direction="vertical">
					<div>
						<PTypeCaptionH2 color="#6666FF">
							{t('explain_title.strength_weakness')} {code}
						</PTypeCaptionH2>
						<PTypeTitleH3>
							{insights.strength.title[currentLocale()]}
						</PTypeTitleH3>
						<PTypeContentP>
							{parse(insights.strength.description[currentLocale()].replaceAll("\n", "<br/>"))}
						</PTypeContentP>
						<br />
						<PTypeTitleH3>
							{insights.weakness.title[currentLocale()]}
						</PTypeTitleH3>
						<PTypeContentP>
							{parse(insights.weakness.description[currentLocale()].replaceAll("\n", "<br/>"))}
						</PTypeContentP>
					</div>
					<div>
						<PTypeCaptionH2 color="#188BFF">
							{t('explain_title.career')} {code}
						</PTypeCaptionH2>
						<PTypeTitleH3>
							{insights.career.title[currentLocale()]}
						</PTypeTitleH3>
						<PTypeContentP>
							{parse(insights.career.description[currentLocale()].replaceAll("\n", "<br/>"))}
						</PTypeContentP>
					</div>
					<div>
						<PTypeCaptionH2 color="#EB539F">
							{t('explain_title.relationship')} {code}
						</PTypeCaptionH2>
						<PTypeTitleH3>
							{insights.relationship.title[currentLocale()]}
						</PTypeTitleH3>
						<PTypeContentP>
							{parse(insights.relationship.description[currentLocale()].replaceAll("\n", "<br/>"))}
						</PTypeContentP>
					</div>
					<div>
						<PTypeCaptionH2 color="#9D75EF">
							{t('explain_title.friendship')} {code}
						</PTypeCaptionH2>
						<PTypeTitleH3>
							{insights.friendship.title[currentLocale()]}
						</PTypeTitleH3>
						<PTypeContentP>
							{parse(insights.friendship.description[currentLocale()].replaceAll("\n", "<br/>"))}
						</PTypeContentP>
					</div>
				</Space>
			</ExplainationContainer>
		</React.Fragment>
	);
};

export default ExplainPersonalityType;
