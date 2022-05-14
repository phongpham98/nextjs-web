import { colors } from '@configs/globalStyles';
import FikaButton from '@utils/components/FikaButton';
import { Col, Row } from 'antd';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { CriteriaContainer, CriteriaItemContainer, CriteriaItemTitle, CriterialItemSubTile, CriteriaTitle, DoTestBtnContainer, QuestionSubTitle, QuestionTitle } from './PersonalityBodyStyled';
const color = colors.primary;
interface ICriteriaProps {
}

const Criteria: React.FunctionComponent<ICriteriaProps> = (props) => {
	const { t } = useTranslation(['personality-home', 'button', 'routes']);
	const router = useRouter();
	return (
		<CriteriaContainer>
			<QuestionTitle>
				{t('question')}
			</QuestionTitle>
			<QuestionSubTitle>
				{t('each_letter')}
			</QuestionSubTitle>
			<CriteriaTitle>
				{parse(t('criteria'))}
			</CriteriaTitle>
			<Row>
				<Col span={12}>
					<CriteriaItemContainer style={{ borderRight: "1px solid #898A90" }}>
						<CriteriaItemTitle >
							<span style={{ color: color }}>E</span>xtraversion/<br />
							<span style={{ color: color }}>I</span>ntroversion
						</CriteriaItemTitle>
						<CriterialItemSubTile>
							{router.locale === "en" ? null : <>Hướng ngoại/ Hướng nội<br /></>}
							{t('criteria_detail.one')}
						</CriterialItemSubTile>
					</CriteriaItemContainer>
				</Col>
				<Col span={12}>
					<CriteriaItemContainer>
						<CriteriaItemTitle >
							<span style={{ color: color }}>S</span>ensing/<br />
							i<span style={{ color: color }}>N</span>tuition
						</CriteriaItemTitle>
						<CriterialItemSubTile>
							{router.locale === "en" ? null : <>Thực tế/ Trực quan<br /></>}
							{t('criteria_detail.two')}
						</CriterialItemSubTile>
					</CriteriaItemContainer>
				</Col>
				<Col span={12}>
					<CriteriaItemContainer style={{ borderRight: "1px solid #898A90", borderTop: "1px solid #898A90" }}>
						<CriteriaItemTitle >
							<span style={{ color: color }}>T</span>hinking/<br />
							<span style={{ color: color }}>F</span>eeling
						</CriteriaItemTitle>
						<CriterialItemSubTile>
							{router.locale === "en" ? null : <>Suy tính/ Cảm tính<br /></>}
							{t('criteria_detail.three')}
						</CriterialItemSubTile>
					</CriteriaItemContainer>
				</Col>
				<Col span={12}>
					<CriteriaItemContainer style={{ borderTop: "1px solid #898A90" }}>
						<CriteriaItemTitle >
							<span style={{ color: color }}>J</span>udging/<br />
							<span style={{ color: color }}>P</span>erceiving
						</CriteriaItemTitle>
						<CriterialItemSubTile>
							{router.locale ? null : <>Theo quy tắc/ Linh hoạt<br /></>}
							{t('criteria_detail.four')}
						</CriterialItemSubTile>
					</CriteriaItemContainer>
				</Col>
			</Row>
			<DoTestBtnContainer>
				<Link href={`/${t('personality', { ns: 'routes' })}/quiz/free-personality-test`} >
					<a>
						<FikaButton name={t("do_quiz", { ns: 'button' })} />
					</a>
				</Link>
			</DoTestBtnContainer>
		</CriteriaContainer>
	);
};

export default Criteria;
