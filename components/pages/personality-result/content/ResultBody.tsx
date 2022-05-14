import { CardContainer } from '@components/modules/personality-type/PersonalityTypeStyled';
import CareerCard from '@components/pages/personality-type/explaination-card/CareerCard';
import FriendshipCard from '@components/pages/personality-type/explaination-card/FriendshipCard';
import RelationshipCard from '@components/pages/personality-type/explaination-card/RelationshipCard';
import StrengthAndWeaknessCard from '@components/pages/personality-type/explaination-card/StrengthAndWeaknessCard';
import TypeDetail from '@components/pages/personality-type/type-detail/TypeDetail';
import { RootState } from '@redux/store';
import StickyDownload from '@utils/components/StickyDownload';
import { Col, Row } from 'antd';
import * as React from 'react';
import { useSelector } from 'react-redux';
import ExplainPersonalityType from './ExplainPersonalityType';
import { ResultContentContainer } from './ResultBodyStyled';
interface IResultBodyProps {
}

const ResultBody: React.FunctionComponent<IResultBodyProps> = (props) => {

	let { assign_result } = useSelector((state: RootState) => state.quiz);
	let { insights, code, suitable_career_list, career, suitable_friendship_list, friendship, suitable_relationship_list, relationship, strength_weakness } = assign_result[0];

	return (
		<ResultContentContainer>
			<div style={{ position: "absolute", height: "100%", top: "15px", left: "75px" }}>
				<StickyDownload />
			</div>
			<TypeDetail />
			<CardContainer>
				{assign_result.length > 0 ? <Row justify="center" gutter={[40, 40]}>
					<Col sm={12} md={12} xl={6}>
						<StrengthAndWeaknessCard text={strength_weakness} />
					</Col>
					<Col sm={12} md={12} xl={6}>
						<CareerCard suitable_list={suitable_career_list} text={career} />
					</Col>
					<Col sm={12} md={12} xl={6}>
						<RelationshipCard suitable_list={suitable_relationship_list} text={relationship} />
					</Col>
					<Col sm={12} md={12} xl={6}>
						<FriendshipCard suitable_list={suitable_friendship_list} text={friendship} />
					</Col>
				</Row> : null}
			</CardContainer>
			{assign_result.length > 0 ? <ExplainPersonalityType insights={insights} code={code} /> : null
			}
		</ResultContentContainer >
	);
};

export default ResultBody;
