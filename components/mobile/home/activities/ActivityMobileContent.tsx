import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { Container } from './ActivityMobileContentStyled';
interface IActivityMobileContentProps {
}

const ActivityMobileContent: React.FunctionComponent<IActivityMobileContentProps> = (props) => {
	const { t } = useTranslation('home');
	return (
		<Container>
			<div>
				{parse(t('activity'))}
			</div>
		</Container>
	);
};

export default ActivityMobileContent;
