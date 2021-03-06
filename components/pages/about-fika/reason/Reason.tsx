import HrLine from '@utils/components/HrLine';
import { Col, Row } from 'antd';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import React from 'react';
import LazyLoad from 'react-lazyload';
import { Quote, ReasonContainer, ReasonContent, ReasonDetailContainer, ReasonTitleH2 } from './ReasonStyled';

const Reason = () => {
	const { t } = useTranslation('about-fika');

	return (
		<ReasonContainer>
			<Row justify="center" gutter={{ xs: 30, sm: 40, lg: 80 }}>
				<Col style={{ display: "flex" }} xs={24} sm={11} xl={10}>
					<LazyLoad offset={300} throttle={100} height={100} once>
						<img width="100%" src={'/about-fika1.png'} alt={t("reason.title")} />
					</LazyLoad>
				</Col>
				<Col xs={24} sm={11} xl={10}>
					<ReasonDetailContainer>
						<ReasonTitleH2>
							{parse(t("reason.title"))}
						</ReasonTitleH2>
						<ReasonContent>
							{parse(t("reason.description"))}
						</ReasonContent>
						<HrLine margin="0" />
						<Quote>
							{parse(t("reason.quote"))}
							<br />
							<br />
							Oscar Xing Luo, CTO
						</Quote>
					</ReasonDetailContainer>
				</Col>
			</Row>
		</ReasonContainer >
	);
};

export default Reason;