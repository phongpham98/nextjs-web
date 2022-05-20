/* eslint-disable react-hooks/exhaustive-deps */
import ExplainPersonalityType from '@components/pages/personality-result/content/ExplainPersonalityType';
import CircleType from '@components/pages/personality-type/circle-type/CircleType';
import TraitCard from '@components/pages/personality-type/explaination-card/TraitCard';
import MorePersonalities from '@components/pages/personality-type/more-personality/MorePersonalities';
import { getPersonalityContent } from '@redux/slices/personalityTypeSlice';
import { RootState } from '@redux/store';
import FikaButton from '@utils/components/FikaButton';
import HrLine from '@utils/components/HrLine';
import TranslatedLink from '@utils/components/next-link/TranslateLink';
import StickyDownload from '@utils/components/StickyDownload';
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StickyContainer, TakeTestContainer, TakeTestDescription, TakeTestTitle, TypeContainer, TypeDescription, TypeImage, TypeImageContainer, TypeName } from './PersonalityTypeStyled';
interface IPTypeDesktopProps {
}

const PTypeDesktop: React.FunctionComponent<IPTypeDesktopProps> = (props) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { type } = router.query;

	const { t } = useTranslation(['personality-type', 'routes', 'button']);
	React.useEffect(() => {
		if (typeof type === 'string')
			dispatch(getPersonalityContent(type));
	}, [type]);

	const { content } = useSelector((state: RootState) => state.personalityType);
	return (
		<GeneralContentWrapper>
			{content ? (
				<div style={{ position: 'relative', height: "100%" }}>
					<StickyContainer >
						<StickyDownload />
					</StickyContainer>
					<TypeContainer>
						<TypeImageContainer>
							<TypeImage src={content.image_url} alt={content.code} />
						</TypeImageContainer>
						<TypeName>
							{content.code} - {content.title}
						</TypeName>
						<TypeDescription>
							{content.description}
						</TypeDescription>
					</TypeContainer>
					<CircleType />
					<TraitCard content={content} />
					<ExplainPersonalityType insights={content.insights} code={content.code} />
					<HrLine margin="15" />

					<TakeTestContainer>
						<TakeTestTitle>
							{parse(t('title'))}
						</TakeTestTitle>
						<TakeTestDescription>
							{parse(t('sub_title'))}
						</TakeTestDescription>
						<Link hrefLang={router.locale} href={`/${t('personality', { ns: 'routes' })}/quiz/${t('free_personality_test', { ns: 'routes' })}`}>
							<a>
								<FikaButton name={t('discover', { ns: 'button' })} />
							</a>
						</Link>
					</TakeTestContainer>
					<HrLine margin="15" />
					<div>
						<MorePersonalities />
					</div>
				</div>) : null}
		</GeneralContentWrapper>
	);
};

export default PTypeDesktop;
