import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import ResultBodyMobile from '@components/pages/personality-result/content/ResultBodyMobile';
import { CaptionText, CharacterType, PResultDescription, ResultImage, YouAre } from '@components/pages/personality-result/header/ResultHeaderStyled';
import { getResult } from '@redux/slices/quiz';
import { RootState } from '@redux/store';
import { GeneralHeaderMobileContainer, GeneralImage } from '@utils/styled-components/GeneralStyled';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResultHeaderContent } from './PersonalityResultStyled';

interface IPResultMobileProps {
}

const PResultMobile: React.FunctionComponent<IPResultMobileProps> = (props) => {
	const dispatch = useDispatch();
	const { t } = useTranslation('personality-type');
	const router = useRouter();
	const { id } = router.query;
	let { loading, assign_result } = useSelector((state: RootState) => state.quiz);
	React.useEffect(() => {
		if (typeof id === 'string')
			dispatch(getResult(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);
	return (
		<React.Fragment>
			<NavMobile hasSearchFirst={true} />
			{assign_result.length > 0 ?
				<React.Fragment>
					<GeneralHeaderMobileContainer>
						<GeneralImage src={'/banner-quiz-result-mobile.png'} alt="download fika" />
						<ResultHeaderContent>
							<CaptionText>
								{t('quiz_result.complete_text')}
							</CaptionText>
							<ResultImage src={assign_result[0].image_url} alt="personality" />
							<YouAre>
								{t('quiz_result.you_are')}
							</YouAre>
							<CharacterType>
								{assign_result[0].code} - {assign_result[0].title}
							</CharacterType>
							<PResultDescription>
								{assign_result[0].description}
							</PResultDescription>
						</ResultHeaderContent>
					</GeneralHeaderMobileContainer>
					<ResultBodyMobile />
				</React.Fragment> : null}
		</React.Fragment>
	)
};

export default PResultMobile;
