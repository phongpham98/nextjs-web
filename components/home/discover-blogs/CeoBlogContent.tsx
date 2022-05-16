import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import { PostModel } from '@interfaces/posts';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { CeoBlogContentContainer, CeoBlogTitle, CeoContentDiv, PathDateWrapper, ReadMoreText } from './CeoBlogContentStyled';
import ShareContent from '@utils/components/share/ShareContent';
interface ICeoBlogContentProps {
	blog: PostModel;
}

const CeoBlogContent: React.FunctionComponent<ICeoBlogContentProps> = ({ blog }) => {
	const { t } = useTranslation('button');
	const router = useRouter();
	return (
		<CeoBlogContentContainer>
			<PathDateWrapper >
				{blog.category ? <div onClick={() => router.push(`/category/` + blog.category.link)}> {blog.category.name}</div> : "CEO's blogs"}
				<span>{renderDateFollowLanguage(blog.created_at)}</span>
			</PathDateWrapper>
			<Link aria-label={blog.title} href={`/blog/` + blog.link}>
				<a>
					<CeoBlogTitle>
						{blog.title}
					</CeoBlogTitle>
				</a>
			</Link>
			<CeoContentDiv>
				{blog.short_description}
			</CeoContentDiv>
			<ReadMoreText
				onClick={() => router.push(`/blog/` + blog.link)}
			>
				{"<"}<span style={{ textDecoration: "underline" }}> {t('read_more')} </span>{">"}
			</ReadMoreText>
			<ShareContent banner={blog.banner} thumbnail={blog.thumbnail} url={`/blog/` + blog.link} story={blog} />
		</CeoBlogContentContainer >
	);
};

export default CeoBlogContent;
