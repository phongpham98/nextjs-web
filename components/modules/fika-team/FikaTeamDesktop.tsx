import * as React from 'react';
import { Space } from 'antd';
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled';
import HrLine from '@utils/components/HrLine';
import FikaTeamHeader from '@components/pages/fika-team/fika-team-header/FikaTeamHeader';
import FikaTeamContent from '@components/pages/fika-team/fika-team-content/FikaTeamContent';
import JoinFika from '@components/pages/fika-team/join-fika/JoinFika';
import FikaContact from '@components/pages/fika-team/contact/FikaContact';

interface IFikaTeamDesktopProps {
}

const FikaTeamDesktop: React.FunctionComponent<IFikaTeamDesktopProps> = (props) => {
	return (
		<GeneralContentWrapper>
			<FikaTeamHeader />
			<Space style={{ width: "100%" }} size={60} direction="vertical">
				<FikaTeamContent />
				<HrLine margin="20" />
				<JoinFika />
				<FikaContact />
			</Space>
		</GeneralContentWrapper>
	);
};

export default FikaTeamDesktop;
