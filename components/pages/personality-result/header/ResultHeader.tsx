import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { useSelector } from 'react-redux';
import banner from '@public/result-banner.png';
import { CaptionText, CharacterType, HeaderContent, PResultDescription, ResultImage, YouAre } from './ResultHeaderStyled';
import { GeneralHeaderWrapper, GeneralImage } from '@utils/styled-components/GeneralStyled';
import { HeaderContainer } from '@components/modules/headers/HeaderStyled';
import { RootState } from '@redux/store';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
interface IResultHeaderProps {
}

const ResultHeader: React.FunctionComponent<IResultHeaderProps> = (props) => {

	const { assign_result } = useSelector((state: RootState) => state.quiz);
	const { t } = useTranslation('personality-type');
	return (
		<>
			<Head>
				<title>{assign_result[0].code} - {assign_result[0].title}</title>
			</Head>
			<GeneralHeaderWrapper>
				<LazyLoad throttle={100} height={100} once>
					<GeneralImage src={banner.src} alt="fika quiz" />
				</LazyLoad>
				{assign_result.length > 0 ? <HeaderContent>
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
				</HeaderContent> : null}
			</GeneralHeaderWrapper>
		</>
	);
};

export default ResultHeader;
