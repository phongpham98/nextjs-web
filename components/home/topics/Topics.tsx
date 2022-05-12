import CategoryItem from '@components/home/category/CategoryItem';
import { getCategories } from '@redux/slices/home';
import { RootState } from '@redux/store';
import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopicSlider from './TopicSlider';
import { CategoryContainer, MultiTopicContainer, MultiTopicContent, SingleTopicContainer, TopicContainer } from './TopicStyled';


const Topics = () => {
	const dispatch = useDispatch();

	const { categories } = useSelector((state: RootState) => state.home);

	useEffect(() => {
		dispatch(getCategories());
	}, []);
	
	return (
		<TopicContainer>
			<Row style={{ position: 'relative' }} gutter={[{ sm: 40, xl: 50 }, { sm: 40, xl: 60 }]}>
				<Col sm={24} md={12}>
					<MultiTopicContainer>
						<MultiTopicContent>
							<TopicSlider />
						</MultiTopicContent>
					</MultiTopicContainer>
				</Col>
				<Col sm={24} md={12}>
					<CategoryContainer>
						<Row gutter={[{ sm: 40, xl: 50 }, { sm: 40, xl: 60 }]} justify="space-around">
							{categories ? categories.slice(0, 4).map((item) => {
								return (
									<Col key={item.id} md={12}>
										<CategoryItem item={item} />
									</Col>
								)
							}) : [1, 2, 3, 4].map(item => {
								return (
									<Col key={item} md={12}>
										<SingleTopicContainer>

										</SingleTopicContainer>
									</Col>
								)
							})}
						</Row>
					</CategoryContainer>
				</Col>
			</Row>
		</TopicContainer>
	);
};

export default Topics;