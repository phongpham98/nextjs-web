import FikaButton from "@utils/components/FikaButton";
import "animate.css";
import { Col, Row } from 'antd';
import Link from "next/link";
import React from 'react';
import { useTranslation } from 'next-i18next';
import MatchedAvatar from './MatchedAvatar';
import { DiscoverContainer, DiscoverTitle, MatchedContainer } from './MatchedStyled';

const Matched = () => {
	const { t } = useTranslation(['home', 'button', 'routes']);
	return (
		<MatchedContainer>
			<Row>
				<Col span={12}>
					<DiscoverContainer>
						<DiscoverTitle className="animate__animated animate__fadeIn">
							{t("matched.title")}
						</DiscoverTitle>
						<div>
							<Link href={`/${t('personality', { ns: 'routes' })}/quiz/${t('free_personality_test', { ns: 'routes' })}`} >
								<a>
									<FikaButton
										name={t('discover', { ns: "button" })} />
								</a>
							</Link>
						</div>
					</DiscoverContainer>
				</Col>
				<Col span={12}>
					<MatchedAvatar />
				</Col>
			</Row>
		</MatchedContainer>
	);
};

export default Matched;