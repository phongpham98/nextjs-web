import LoveStoryContentMobile from '@components/pages/connected-story/content/ConnectedStoryContentMobile';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import parse from 'html-react-parser';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderTitle, StoryHeaderContent, StoryHeaderMobile, SubTitle } from './ConnectedStoryMobileStyled';

interface ILoveStoryMobileProps {
}

const LoveStoryMobile: React.FunctionComponent<ILoveStoryMobileProps> = (props) => {
	const { t } = useTranslation(['title', 'story']);
	return (
		<React.Fragment>
			<StoryHeaderMobile>
				<GeneralImageWrapper>
					<RenderSmoothImage width='500' height='500' alt="fika love stories" src={'/story_mobile_banner.png'} />
				</GeneralImageWrapper>
				<StoryHeaderContent>
					<HeaderTitle>
						{t('connected_story')}
					</HeaderTitle>
					<SubTitle>
						{parse(t('header_description', { ns: 'story' }))}
					</SubTitle>
				</StoryHeaderContent>
			</StoryHeaderMobile>
			<LoveStoryContentMobile />
		</React.Fragment>
	);
};

export default LoveStoryMobile;
