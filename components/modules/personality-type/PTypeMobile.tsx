/* eslint-disable react-hooks/exhaustive-deps */
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import ExplainPersonalityType from '@components/pages/personality-result/content/ExplainPersonalityType';
import CircleType from '@components/pages/personality-type/circle-type/CircleType';
import TraitCard from '@components/pages/personality-type/explaination-card/TraitCard';
import MorePersonalities from '@components/pages/personality-type/more-personality/MorePersonalities';
import { getPersonalityContent } from '@redux/slices/personalityTypeSlice';
import { RootState } from '@redux/store';
import FikaButton from '@utils/components/FikaButton';
import HrLine from '@utils/components/HrLine';
import { GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import { Space } from 'antd';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TakeTestContainer, TakeTestDescription, TakeTestTitle, TypeContainer, TypeDescription, TypeImage, TypeImageContainer, TypeName } from './PersonalityTypeStyled';
interface IPTypeMobileProps {
}

const PTypeMobile: React.FunctionComponent<IPTypeMobileProps> = (props) => {
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
		<React.Fragment>
			<NavMobile hasSearchFirst={true} />
			{content ? (
				<GeneralPaddingMobile>
					<Space style={{ width: "100%" }} size={20} direction="vertical">
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
						<HrLine margin="0" />
						<TakeTestContainer>
							<TakeTestTitle>
								{parse(t('title'))}
							</TakeTestTitle>
							<TakeTestDescription>
								{parse(t('sub_title'))}
							</TakeTestDescription>
							<Link href={`/${t('personality', { ns: 'routes' })}/quiz/${t('free_personality_test', { ns: 'routes' })}`}>
								<a>
									<FikaButton name={t('discover', { ns: 'button' })} />
								</a>
							</Link>
						</TakeTestContainer>
						<MorePersonalities />
					</Space>
				</GeneralPaddingMobile>) : null}
		</React.Fragment>
	)
};

export default PTypeMobile;
