import LoveItem from '@components/pages/connected-story/item/LoveItem';
import { getConnectedStories } from '@redux/slices/connectedStoriesSlice';
import { RootState } from '@redux/store';
import SectionTitle from '@utils/components/SectionTitle';
import { Col, Row, Space } from 'antd';
import { useTranslation } from 'next-i18next';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoreStoryContainer } from './MoreStoryStyled';

const MoreStories = () => {
	const dispatch = useDispatch();
	const { t } = useTranslation('common');
	const { storyDetail, stories } = useSelector((state: RootState) => state.loveStory);
	useEffect(() => {
		if (storyDetail) {
			dispatch(getConnectedStories([storyDetail.id], storyDetail.tags))
		} else {
			dispatch(getConnectedStories())
		}
	}, [storyDetail, dispatch]);


	return (
		<MoreStoryContainer>
			<Space style={{ width: "100%" }} size={40} direction="vertical">
				<SectionTitle title={t('more_stories')} marginBottom="0" />
				<Row justify='center' gutter={[{ xs: 0, sm: 100, lg: 150, xl: 200 }, { xs: 20, sm: 55 }]}>
					{stories.slice(0, 3)?.map((item, idx) => {
						return (
							<Col key={item.id} xs={24} sm={24} md={8}>
								<LoveItem story={item} />
							</Col>
						)
					})}
				</Row>
			</Space>
		</MoreStoryContainer>
	);
};

export default MoreStories;