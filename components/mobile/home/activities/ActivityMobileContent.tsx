import parse from 'html-react-parser';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './ActivityMobileContentStyled';
interface IActivityMobileContentProps {
}

const ActivityMobileContent: React.FunctionComponent<IActivityMobileContentProps> = (props) => {
	const { t } = useTranslation();
	return (
		<Container>
			<div>
				{parse(t('homepage.activity'))}
			</div>
		</Container>
	);
};

export default ActivityMobileContent;
