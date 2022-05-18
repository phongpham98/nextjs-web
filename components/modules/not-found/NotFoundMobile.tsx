import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import FikaButton from '@utils/components/FikaButton';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import { ExplainText, NotFoundContainer, NotFoundText } from './NotFoundStyled';

interface INotFoundMobileProps {
}

const NotFoundMobile: React.FunctionComponent<INotFoundMobileProps> = (props) => {
	const { t } = useTranslation('common');
	const router = useRouter();
	return (
		<React.Fragment>
			<NavMobile hasSearchFirst />
			<NotFoundContainer>
				<NotFoundText>404</NotFoundText>
				<ExplainText>{parse(t('not_found'))}</ExplainText>
				<div onClick={() => router.back()} style={{ marginTop: "40px" }}>
					<FikaButton name="Go back" />
				</div>
			</NotFoundContainer>
		</React.Fragment>
	);
};

export default NotFoundMobile;
