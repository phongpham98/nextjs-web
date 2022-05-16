import { clickCategoryEvent } from '@helpers/customGTM';
import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { DateDiv, FeedContentP, FeedContentWrapper, FeedTitleDiv, PathDateWrapper, PathDiv, ReadMoreDiv } from './FeedContentStyled';
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
	story?: any;
	url: string;
	banner?: string;
	thumbnail?: string;
}

const FeedContent = ({ small, story, bigTitle = false, showDate = true, url }: FeedContentProps & ShareContentProps) => {
	const { t } = useTranslation('routes');
	return (
		<FeedContentWrapper className={showDate ? "" : "gap"}>
			<PathDateWrapper style={small ? { marginBottom: "5px" } : {}}>
				{story.category ?
					<Link href={'/' + story.category.id === "61ad91d5e4547b9970a74aa9" || story.category.id === "61ada1afe4547b9970a74acf" ? t('news') : `${t('category')}/${story.category.link}`}>
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
					<FeedTitleDiv
						bigTitle={bigTitle}
					>
						{story.title ? story.title : story.name}
					</FeedTitleDiv>
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