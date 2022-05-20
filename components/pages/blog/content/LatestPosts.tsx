import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import { PostType } from '@utils/components/categories-tags/CategoriesAndTags';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { LastPostContainer, LatestPostTitleH3, PostContent, PostDate, PostImageContainer, PostItemDiv, PostItemTitle } from './LatestPostsStyled';
export interface LatestPostsProps {
	posts: any[];
	type?: PostType;
}

const LatestPosts = ({ posts, type }: LatestPostsProps) => {
	const { t } = useTranslation(['routes', 'title']);

	const postType = (type: any) => {
		switch (type) {
			case "blog":
				return t('blog', { ns: 'title' });
			case "news":
				return "news";
			case "connected-stories":
				return "love stories";
			case "cau-chuyen-ket-noi":
				return "Câu Chuyện kết nối";
			case "q&a":
				return "q&a";
			default:
				return "Posts"
		}
	}

	return (
		<LastPostContainer >
			{posts && posts.length > 0 ? <LatestPostTitleH3>latest {postType(type)}</LatestPostTitleH3> : null}
			{posts?.map(item => {
				return (
					<PostItemDiv key={item.id}>
						<Row gutter={{ xs: 10, xl: 20 }}>
							<Col style={{ display: "flex", alignItems: "center" }} span={6}>
								<Link aria-label={item.title} href={`/${type === "news" ? `${t('news')}/${t('detail')}` : t(`${type}`)}/${item.link}`} >
									<a style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
										<PostImageContainer>
											<GeneralImageWrapper>
												<RenderSmoothNextImage src={item.thumbnail} alt={item.title} />
											</GeneralImageWrapper>
										</PostImageContainer>
									</a>
								</Link>
							</Col>
							<Col span={18}>
								<PostContent>
									<Link aria-label={item.title} href={`/${type === "news" ? `${t('news')}/${t('detail')}` : t(`${type}`)}/${item.link}`} >
										<a>
											<PostItemTitle>
												{item.title ? item.title : item.question}
											</PostItemTitle>
										</a>
									</Link>
									<PostDate>{renderDateFollowLanguage(item.public_date)}</PostDate>
								</PostContent>
							</Col>
						</Row>
					</PostItemDiv >
				)
			})}
		</LastPostContainer >
	);
};

export default LatestPosts;