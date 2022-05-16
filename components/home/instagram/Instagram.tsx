import { RootState } from '@redux/store';
import SvgInstagram from '@svgs/Instagram';
import SectionTitle from '@utils/components/SectionTitle';
import { Col, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import InstagramPost from './InstagramPost';

const Instagram = () => {
	const { instagrams } = useSelector((state: RootState) => state.instagram);
	return (
		<div id="instagram" className="instagram-container">
			<SectionTitle title="Instagram" icon={<SvgInstagram color='#030303' />} />
			<Row gutter={12} justify="center">
				{instagrams.map((item, idx) => {
					if (idx === 1) {
						return (
							<Col md={4} key={item.link}>
								<div style={{
									alignItems: "flex-end"
								}} className="ins-post-container">
									<InstagramPost link={item.link} img={item.image} />
								</div>
							</Col>
						)

					} else if (idx === 3) {
						return (
							<Col md={4} key={item.link}>
								<div style={{
									alignItems: "flex-start"
								}} className="ins-post-container">
									<InstagramPost link={item.link} img={item.image} />
								</div>
							</Col>
						)
					} else {
						return (
							<Col md={4} key={item.link}>
								<div style={{
									alignItems: "center"
								}} className="ins-post-container">
									<InstagramPost link={item.link} img={item.image} />
								</div>
							</Col>
						)
					}
				})}
			</Row>
		</div>
	);
};

export default Instagram;