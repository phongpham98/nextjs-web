import { clickCategoryEvent } from '@helpers/customGTM';
import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { DateDiv, FeedContentP, FeedContentWrapper, FeedTitleH2, FeedTitleH3, FeedTitleH4, PathDateWrapper, PathDiv, ReadMoreDiv } from './FeedContentStyled';
import ReadMore from '@utils/components/ReadMore';
import ShareContent from '@utils/components/share/ShareContent';
export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
interface FeedContentProps {
	showDate?: boolean;
	story: any;
	small?: boolean;
	bigTitle?: boolean;
	headingTag?: HeadingTag
}

interface ShareContentProps {
	story?: any;
	url: string;
	banner?: string;
	thumbnail?: string;
}

const FeedContent = ({ small, story, bigTitle = false, showDate = true, url, headingTag = "h2" }: FeedContentProps & ShareContentProps) => {
	const { t } = useTranslation('routes');
	return (
		<FeedContentWrapper className={showDate ? "" : "gap"}>
			<PathDateWrapper style={small ? { marginBottom: "5px" } : {}}>
				{story.category ?
					<Link href={'/' + story.category.id === "61ad91d5e4547b9970a74aa9" || story.category.id === "61ada1afe4547b9970a74acf" ? t('news') : `/${t('category')}/${story.category.link}`}>
						<a>
							<PathDiv className='categories' onClick={() => {
								clickCategoryEvent(story.category.name);
							}}>{story.category.name}</PathDiv>
						</a>
					</Link>
					: <PathDiv>connected story</PathDiv>}
				{showDate && <DateDiv>{renderDateFollowLanguage(story.public_date)}</DateDiv>}
			</PathDateWrapper>
			<Link href={url}>
				<a>
					{headingTag === "h3" ? <FeedTitleH3
						bigTitle={bigTitle}
					>
						{story.title ? story.title : story.name}
					</FeedTitleH3> : headingTag === "h4" ? <FeedTitleH4
						bigTitle={bigTitle}
					>
						{story.title ? story.title : story.name}
					</FeedTitleH4> : <FeedTitleH2
						bigTitle={bigTitle}
					>
						{story.title ? story.title : story.name}
					</FeedTitleH2>}
				</a>
			</Link>
			<div style={{ flex: 1 }}>
				<FeedContentP>
					{story.short_description}
				</FeedContentP>
			</div>
			<Link href={url}>
				<a>
					<ReadMoreDiv>
						<ReadMore />
					</ReadMoreDiv>
				</a>
			</Link>
			<ShareContent url={url} story={story} />
		</FeedContentWrapper>
	);
};

export default FeedContent;