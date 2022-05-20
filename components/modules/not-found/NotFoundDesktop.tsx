import React from 'react';
import { ExplainText, NotFoundContainer, NotFoundText } from './NotFoundStyled';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import FikaButton from '@utils/components/FikaButton';

interface INotFoundDesktopProps {
}

const NotFoundDesktop: React.FunctionComponent<INotFoundDesktopProps> = (props) => {
	const { t } = useTranslation(['common', 'button']);
	const router = useRouter();
	return (
		<NotFoundContainer>
			<NotFoundText>404</NotFoundText>
			<ExplainText>{parse(t('not_found'))}</ExplainText>
			<div onClick={() => router.back()} style={{ marginTop: "40px" }}>
				<FikaButton name={t('go_back', {ns: 'button'})} />
			</div>
		</NotFoundContainer>
	);
};

export default NotFoundDesktop;
