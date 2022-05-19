import { Col, Row } from 'antd';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import LoadingMoto from './LoadingMoto';
import { FakeImage, LoadingStoriesContainer } from './LoadingStyled';

interface ILoadingLoveStoriesProps {
}

const LoadingLoveStories: React.FunctionComponent<ILoadingLoveStoriesProps> = (props) => {
	return (
		<LoadingStoriesContainer>
			<Row gutter={[{ xs: 50, md: 80, xl: 150, xxl: 200 }, 55]}>
				{[1, 2, 3].map(l => {
					return (
						<Col key={l} span={8}>
							<FakeImage>
								<div className='fake-image'></div>
								<LoadingMoto />
							</FakeImage>
						</Col>
					)
				})}
				{[1, 2, 3].map(l => {
					return (
						<Col key={l} span={8}>
							<FakeImage>
								<div className='fake-image'></div>
							</FakeImage>
						</Col>
					)
				})}
			</Row>
		</LoadingStoriesContainer >
	);
};

export default LoadingLoveStories;
