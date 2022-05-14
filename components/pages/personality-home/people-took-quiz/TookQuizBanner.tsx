import FikaButton from '@utils/components/FikaButton';
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import CountUp from 'react-countup';
import Link from 'next/link';
import { TookQuizContainer, TookQuizNumber, TookQuizText, TookQuizTextContainer } from './TookQuizBannerStyled';
import LazyLoad from 'react-lazyload';
const TookQuizBanner = () => {
	const { t } = useTranslation(['button', 'personality-home']);
	return (
		<TookQuizContainer>
			<GeneralContentWrapper>
				<Row justify="center" gutter={[60, 40]}>
					<Col xs={24} sm={10}>
						<TookQuizTextContainer>
							<TookQuizNumber>
								<CountUp decimal="." decimals={3} end={700.000} duration={1.5} />+
							</TookQuizNumber>
							<TookQuizText>
								{t("took_quiz", { ns: 'personality-home' })}
							</TookQuizText>
							<div>
								<Link href={'/personality/quiz/free-personality-test'}>
									<a>
										<FikaButton name={t("do_quiz")} />
									</a>
								</Link>
							</div>
						</TookQuizTextContainer>
					</Col>
					<Col xs={24} sm={10}>
						<LazyLoad throttle={100} height={100} once>
							<img src={'/banner1.png'} alt="fika personality quiz" width="100%" />
						</LazyLoad>
					</Col>
				</Row>

			</GeneralContentWrapper>
		</TookQuizContainer>
	);
};

export default TookQuizBanner;