import { useTranslation } from 'next-i18next';
import React from 'react';
import Development from './Development';
import { GrowthContainer, GrowthItem } from './GrowthAreaStyled';

const GrowthArea = () => {
	const { t } = useTranslation('about-fika');

	return (
		<GrowthContainer>
			<GrowthItem alignItems="flex-end">
				<Development number={1.2} unit="M" typeText={t('rank.download')} />
			</GrowthItem>
			<GrowthItem alignItems="flex-start">
				<Development number={700} unit="k" typeText={t('rank.matches')} />
			</GrowthItem>
			<GrowthItem alignItems="flex-end">
				<Development number={100} unit="%" typeText={t('rank.verified_users')} />
			</GrowthItem>
			<GrowthItem alignItems="flex-start">
				<Development number={40} unit="%" typeText={t('rank.female_users')} />
			</GrowthItem>
			<GrowthItem alignItems="flex-end">
				<Development number={1} unit="#" typeText={t('rank.ranking')} />
			</GrowthItem>

		</GrowthContainer>
	);
};

export default GrowthArea;