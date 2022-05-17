import FikaButton from '@utils/components/FikaButton';
import SectionTitle from '@utils/components/SectionTitle';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import { JoinFikaContainer, JoinFikaSubTitle } from './JoinFikaStyled';
const JoinFika = () => {
	const { t } = useTranslation(['fika-team', 'button', 'routes']);
	const router = useRouter();
	return (
		<JoinFikaContainer>
			<SectionTitle marginBottom="0" title={t('join_fika_family')} />
			<JoinFikaSubTitle>
				{t('join_fika_family_desc')}
			</JoinFikaSubTitle>
			<div>
				<FikaButton onClick={() => router.push(`/${t('career', {ns: 'routes'})}`)} name={t("work_at_fika", { ns: 'button' })} />
			</div>
		</JoinFikaContainer>
	);
};

export default JoinFika;