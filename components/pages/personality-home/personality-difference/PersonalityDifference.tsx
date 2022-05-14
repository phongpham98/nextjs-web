import isMobileDevice from '@helpers/isMobile';
import { PersonalityTypeItemModel } from '@interfaces/model';
import { Col, Row, Space } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import PersonalityTypeItem from '../personality-type/PersonalityTypeItem';
import { DifferenceTitle, PersonalityDifferenceContainer } from './PersonalityDifferenceStyled';

interface PersonalityType {
	name: string
	items: PersonalityTypeItemModel[]
}


const PersonalityDifference = () => {
	const isMobile = isMobileDevice();
	const { t } = useTranslation('personality-home');
	const types: PersonalityType[] = t('types', { returnObjects: true })
	return (
		<PersonalityDifferenceContainer>
			<Space style={{ width: "100%" }} size={isMobile ? 20 : 60} direction="vertical">
				{types.map((type, idx) => {
					return (
						<div key={idx} >
							<DifferenceTitle>
								{type.name}
							</DifferenceTitle>
							<Row gutter={[10, 20]} justify="space-between">
								{type.items.map((item, i) => {
									return (
										<Col xs={12} sm={5} key={i}>
											<PersonalityTypeItem item={item} />
										</Col>
									)
								})}
							</Row>
						</div>
					)
				})}
			</Space>
		</PersonalityDifferenceContainer>
	);
};

export default PersonalityDifference;