import { RootState } from '@redux/store';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { useSelector } from 'react-redux';
import { CategoryTitleH1, HeaderContainer, HeaderTitleContainer, ImageContainer, TopicHeaderWrapper, TopicImageHeader } from './CategoryHeaderStyled';
interface ICategoryHeaderProps {
}

const CategoryHeader: React.FunctionComponent<ICategoryHeaderProps> = (props) => {
	const { category } = useSelector((state: RootState) => state.category);
	return (
		<TopicHeaderWrapper>
			<HeaderContainer>
				<Row style={{ height: "100%" }} gutter={10}>
					<Col span={12}>
						<HeaderTitleContainer>
							<CategoryTitleH1>
								{category?.name}
							</CategoryTitleH1>
							{/* <CategorySubTitle>
							</CategorySubTitle> */}
						</HeaderTitleContainer>
					</Col>
					<Col span={12}>
						<ImageContainer>
							<TopicImageHeader>
								<LazyLoad throttle={100} height={100} once>
									<GeneralImageWrapper>
										<RenderSmoothNextImage
											src={category?.thumbnail ? category.thumbnail : ''} alt={category?.name} />
									</GeneralImageWrapper>
								</LazyLoad>
							</TopicImageHeader>
						</ImageContainer>
					</Col>
				</Row>
			</HeaderContainer>
		</TopicHeaderWrapper>
	);
};

export default CategoryHeader;
