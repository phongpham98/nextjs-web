import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { MediaDescription, MediaTitle, SubScription } from './MediaStyled';
import YoutubePlayer from './YoutubePalyer';
import parse from 'html-react-parser';
import { homepage } from '@configs/general';
import { clickVideoYoutube } from '@helpers/customGTM';
import FikaButton from '@utils/components/FikaButton';

const Media = () => {
	const { t } = useTranslation(['home', 'button']);

	return (
		<Row gutter={[40, 60]}>
			<Col sm={24} md={12}>
				<YoutubePlayer onClick={() => {
					clickVideoYoutube('TVC video - Homepage')
				}} id={homepage.youtube.id} title="Fika TVC video" />
			</Col>
			<Col sm={24} md={12}>
				<MediaDescription>
					<MediaTitle onClick={() => window.open(homepage.youtube.link)}>
						{t("youtube.title")}
					</MediaTitle>
					<SubScription>
						{parse(t("youtube.description"))}
					</SubScription>
					<div style={{ marginBottom: "5px" }}>
						<FikaButton onClick={() => window.open(homepage.youtube.link)} name={t("view_youtube", {ns: 'button'})} />
					</div>
				</MediaDescription>
			</Col>
		</Row>
	);
};

export default Media;