import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import { FaqGeneralContainer } from '../faq-popular-question/FaqPopularQuestionStyled';
import SupportCentreItem from './SupportCentreItem';
interface supportCentre {
	title: string;
	link: string;
}

const SupportCentre = () => {
	const { t } = useTranslation(['faq', 'button']);
	const router = useRouter();

	let spCentralList: supportCentre[] = t('support_centres', { returnObjects: true });
	return (
		<FaqGeneralContainer>
			<SupportCentreItem onClick={() => window.open("https://apps.apple.com/app/id1528449006?mt=8")} title={t('download')} />

			{spCentralList.map((s, idx) => {
				return (
					<SupportCentreItem onClick={() => { router.push(`/${s.link}`) }} key={idx} title={s.title} />
				);
			})}
		</FaqGeneralContainer>
	);
};

export default SupportCentre;

