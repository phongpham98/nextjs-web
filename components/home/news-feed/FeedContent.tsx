import { clickCategoryEvent } from '@helpers/customGTM';
import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { DateDiv, FeedContentDiv, FeedContentWrapper, FeedTitleDiv, PathDateWrapper, PathDiv, ReadMoreDiv } from './FeedContentStyled';
import ReadMore from '@utils/components/ReadMore';
import ShareContent from '@utils/components/share/ShareContent';

interface FeedContentProps {
	showDate?: boolean;
	story: any;
	small?: boolean;
	bigTitle?: boolean;
	onClick?: () => void;
}

interface ShareContentProps {
	hasComment?: boolean;
	story?: any;
	url: string;
	banner?: string;
	thumbnail?: string;
}

const FeedContent = ({ small, story, hasComment, bigTitle = false, onClick, showDate = true, url }: FeedContentProps & ShareContentProps) => {
	const router = useRouter()

	return (
		<FeedContentWrapper className={showDate ? "" : "gap"}>
			<PathDateWrapper style={small ? { marginBottom: "5px" } : {}}>
				{story.category ? <PathDiv className='categories' onClick={() => {
					if (story.category.id === "61ad91d5e4547b9970a74aa9" || story.category.id === "61ada1afe4547b9970a74acf") {
						router.push('/news')
					} else {
						clickCategoryEvent(story.category.name);
						router.push(`category/` + story.category.link);
					}
				}}>{story.category.name}</PathDiv> : <PathDiv>connected story</PathDiv>}
				{showDate && <DateDiv>{renderDateFollowLanguage(story.public_date)}</DateDiv>}
			</PathDateWrapper>
			<Link href={url}>
				<a>
					<FeedTitleDiv
						bigTitle={bigTitle}
					>
						{story.title ? story.title : story.name}
					</FeedTitleDiv>
				</a>
			</Link>
			<div style={{ flex: 1 }}>
				<FeedContentDiv>
					{story.short_description}
				</FeedContentDiv>
			</div>
			<ReadMoreDiv onClick={onClick}>
				<ReadMore />
			</ReadMoreDiv>
			<ShareContent url={url} story={story} hasComment={false} />
		</FeedContentWrapper>
	);
};

export default FeedContent;