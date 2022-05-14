import TraitCard from '@components/pages/personality-type/explaination-card/TraitCard';
import TypeDetail from '@components/pages/personality-type/type-detail/TypeDetail';
import { RootState } from '@redux/store';
import { GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import * as React from 'react';
import { useSelector } from 'react-redux';
import ExplainPersonalityType from './ExplainPersonalityType';

interface IResultBodyMobileProps {
}

const ResultBodyMobile: React.FunctionComponent<IResultBodyMobileProps> = (props) => {
	let { assign_result } = useSelector((state: RootState) => state.quiz);
	return (
		<React.Fragment>
			{assign_result && assign_result.length > 0 ?
				<GeneralPaddingMobile>
					<TypeDetail />
					<TraitCard content={assign_result[0]} />
					<ExplainPersonalityType insights={assign_result[0].insights} code={assign_result[0].code} />
				</GeneralPaddingMobile> : null}
		</React.Fragment>
	);
};

export default ResultBodyMobile;
