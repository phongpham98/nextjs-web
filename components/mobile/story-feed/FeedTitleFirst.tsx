import { DateDiv, FeedTitleH2, PathDiv, ReadMoreDiv } from '@components/home/news-feed/FeedContentStyled';
import { domain } from '@configs/api';
import { clickCategoryEvent } from '@helpers/customGTM';
import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import SvgChatSquare from '@svgs/ChatSquare';
import SvgCircleSolid from '@svgs/CircleSolid';
import SvgShare from '@svgs/Share';
import ReadMore from '@utils/components/ReadMore';
import ShareFeedButtons from '@utils/components/share/ShareFeedButtons';
import { GeneralHeaderMobileContainer, GeneralImage } from '@utils/styled-components/GeneralStyled';
import { Col, Dropdown, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { Comment, CommentLikeContainer, FeedContent, FeedDate, FeedTitleFirstContainer, FeedTitleFirstContent, FeedTitleFistSub, Share, ShareContainer } from './FeedTitleFirstStyled';

interface IFeedTitleFirstProps {
	story: any;
	url: string;
}

const FeedTitleFirst: React.FunctionComponent<IFeedTitleFirstProps> = ({ story, url }) => {
	const router = useRouter();
	const { t } = useTranslation('title');
	return (
		<FeedTitleFirstContainer>
			<Link style={{ color: 'black' }} href={url} >
				<a>
					<FeedTitleH2
						bigTitle={true}
					>
						{story.title ? story.title : story.name}
					</FeedTitleH2>
				</a>
			</Link>
			<FeedTitleFirstContent>
				<Row gutter={10}>
					<Col span={10}>
						<Link aria-label={story.title ? story.title : story.name} style={{ color: 'black' }} href={url} >
							<a>
								<GeneralHeaderMobileContainer>
									<GeneralImage src={story.thumbnail} alt={story.title} />
								</GeneralHeaderMobileContainer>
							</a>
						</Link>
					</Col>
					<Col span={14}>
						<FeedContent>
							<PathDiv onClick={() => {
								clickCategoryEvent(story.category.name);
								router.push(`/category/` + story.category.link);
							}} >{story.category.name}</PathDiv>
							<FeedDate>
								<SvgCircleSolid fontSize={3} />
								<DateDiv>{renderDateFollowLanguage(story.public_date)}</DateDiv>
							</FeedDate>
							<div style={{
								flex: 1,
								display: "flex",
								alignItems: "start",
								justifyContent: "space-around",
								flexDirection: "column"
							}}>
								<FeedTitleFistSub>
									{story.short_description}
								</FeedTitleFistSub>
								<Link style={{ color: 'black' }} href={url} >
									<a>
										<ReadMoreDiv>
											<ReadMore />
										</ReadMoreDiv>
									</a>
								</Link>
							</div>
							<ShareContainer>
								<CommentLikeContainer>
									<Comment>
										<SvgChatSquare /> <span>{story.comments}</span>
									</Comment>
								</CommentLikeContainer>
								<Dropdown trigger={["click"]} overlay={<ShareFeedButtons url={`${domain}${url}`} title={story.title ? story.title : story.name} />} placement="topRight">
									<Share>
										<SvgShare /> <span>{t("share")}</span>

									</Share>
								</Dropdown>
							</ShareContainer>
						</FeedContent>
					</Col>
				</Row>
			</FeedTitleFirstContent>
		</FeedTitleFirstContainer>
	);
};

export default FeedTitleFirst;
