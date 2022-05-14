import isMobileDevice from '@helpers/isMobile';
import { AssignResult } from '@interfaces/model';
import { Col, Row } from 'antd';
import * as React from 'react';
import CareerCard from './CareerCard';
import { CardContainer } from './ExplainationCardStyled';
import FriendshipCard from './FriendshipCard';
import RelationshipCard from './RelationshipCard';
import StrengthAndWeaknessCard from './StrengthAndWeaknessCard';

interface ITraitCardProps {
	content: AssignResult
}

const TraitCard: React.FunctionComponent<ITraitCardProps> = ({ content }) => {
	const mobile = isMobileDevice();
	return (
		<CardContainer>
			<Row justify="center" gutter={[40, mobile ? 20 : 40]}>
				<Col xs={24} sm={12} md={12} xl={6}>
					<StrengthAndWeaknessCard text={content.strength_weakness} />
				</Col>
				<Col xs={24} sm={12} md={12} xl={6}>
					<CareerCard suitable_list={content.suitable_career_list} text={content.career} />
				</Col>
				<Col xs={24} sm={12} md={12} xl={6}>
					<RelationshipCard suitable_list={content.suitable_relationship_list} text={content.relationship} />
				</Col>
				<Col xs={24} sm={12} md={12} xl={6}>
					<FriendshipCard suitable_list={content.suitable_friendship_list} text={content.friendship} />
				</Col>
			</Row>
		</CardContainer>
	);
};

export default TraitCard;
