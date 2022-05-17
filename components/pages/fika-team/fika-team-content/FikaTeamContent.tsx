/* eslint-disable react-hooks/exhaustive-deps */
import { getMembers } from '@redux/slices/team';
import { RootState } from '@redux/store';
import SvgPeople from '@svgs/People';
import SectionTitle from '@utils/components/SectionTitle';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import React, { useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import FikaMember from '../fika-member/FikaMember';
import { AboutFikaSubTitle } from './FikaTeamContentStyled';

const FikaTeamContent = () => {
	const dispatch = useDispatch();
	const { t } = useTranslation('fika-team');
	const { members, ceo, cto } = useSelector((state: RootState) => state.team);
	useEffect(() => {
		dispatch(getMembers());
	}, []);

	return (
		<div>
			<Row justify="center" gutter={[40, 80]}>
				<Col span={16}>
					<SectionTitle marginBottom="20" title={t("our_excecutive_team")} icon={<SvgPeople />} />
					<AboutFikaSubTitle>{t("our_executive_team_desc")}
					</AboutFikaSubTitle>
					<Row gutter={60}>
						<Col span={12}>
							{ceo && <FikaMember name={ceo?.name} image={ceo?.avatar} position={ceo?.position} />}
						</Col>
						<Col span={12}>
							{cto && <FikaMember name={cto?.name} image={cto?.avatar} position={cto?.position} />}
						</Col>
					</Row>
				</Col>
				{members &&
					<Row style={{ width: "100%" }} gutter={[60, 80]}>
						{members.map(m => {
							return (
								<Col key={m.id} span={8}>
									<LazyLoad height={100} offset={400} once>
										<FikaMember name={m.name} image={m?.avatar} position={m.position} />
									</LazyLoad>
								</Col>
							)
						})}
					</Row>
				}
			</Row>
		</div>
	);
};

export default FikaTeamContent;