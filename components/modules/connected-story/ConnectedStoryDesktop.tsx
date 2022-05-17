import ConnectedStoryContent from '@components/pages/connected-story/content/ConnectedStoryContent';
import ConnectedStoryHeader from '@components/pages/connected-story/Header/ConnectedStoriesHeader';
import SendStoryModal from '@components/pages/connected-story/send_story_modal/SendStoryModal';
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled';
import * as React from 'react';

interface ILoveStoryDesktopProps {
}

const ConnectedStoryDesktop: React.FunctionComponent<ILoveStoryDesktopProps> = (props) => {
	return (
		<GeneralContentWrapper>
			<ConnectedStoryHeader />
			<ConnectedStoryContent />
			<SendStoryModal />
		</GeneralContentWrapper>
	);
};

export default ConnectedStoryDesktop;
