import { CircleTypeContainer } from '@components/modules/personality-type/PersonalityTypeStyled';
import currentLocale from '@helpers/getCurrentLocale';
import SvgEnergy from '@svgs/Energy';
import SvgMind from '@svgs/Mind';
import SvgNature from '@svgs/Nature';
import SvgTatics from '@svgs/Tatics';
import { Col, Row } from 'antd';
import * as React from 'react';
import { getTrailColor } from '../type-detail/TypeDetail';
import { TraitContainer, TraitName, TraitType } from '../type-detail/TypeDetailStyled';
import { CircleContainer, CircleContent } from './CircleTypeStyled';

interface ICircleTypeProps {
}

const exampleResult = [
	{
		type: "Mind",
		type_name: {
			en: "Mind",
			vi: "Tinh thần"
		},
		type_key: {
			en: "Extrovert",
			vi: "Hướng ngoại"
		},
		icon: <SvgMind />
	},
	{
		type: "Energy",
		type_name: {
			en: "Energy",
			vi: "Năng lượng",
		},
		type_key: {
			en: "Intuitive",
			vi: "Trực giác"
		},
		icon: <SvgEnergy />
	},
	{
		type: "Nature",
		type_name: {
			en: "Nature",
			vi: "Bản chất"
		},
		type_key: {
			en: "Feeling",
			vi: "Cảm giác"
		},
		icon: <SvgNature />
	},
	{
		type: "Tactics",
		type_name: {
			en: "Tactics",
			vi: "Chiến thuật"
		},
		type_key: {
			en: "Judging",
			vi: "Đánh giá"
		},
		icon: <SvgTatics />
	}
];

const CircleType: React.FunctionComponent<ICircleTypeProps> = (props) => {
	return (
		<CircleTypeContainer>
			<Row justify="space-between" align="middle">
				{exampleResult.map((result, idx) => {
					return (
						<Col xs={5} sm={4} key={idx}>
							<TraitContainer>
								<CircleContainer color={getTrailColor(result.type)}>
									<CircleContent color={getTrailColor(result.type)}>
										{result.icon}
									</CircleContent>
								</CircleContainer>
								<TraitName color={getTrailColor(result.type)}>
									{result.type_name[currentLocale()]}
								</TraitName>
								<TraitType>
									{result.type_key[currentLocale()]}
								</TraitType>
							</TraitContainer>
						</Col>
					)
				})}
			</Row>
		</CircleTypeContainer>
	);
};

export default CircleType;
