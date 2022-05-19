import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import { PostModel } from '@interfaces/posts';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { CeoBlogContentContainer, CeoBlogTitleH3, CeoContentP, PathDateWrapper, ReadMoreText } from './CeoBlogContentStyled';
import ShareContent from '@utils/components/share/ShareContent';
import { colors } from '@configs/globalStyles';
interface ICeoBlogContentProps {
	blog: PostModel;
}

const CeoBlogContent: React.FunctionComponent<ICeoBlogContentProps> = ({ blog }) => {
	const { t } = useTranslation(['button', 'routes']);
	return (
		<CeoBlogContentContainer>
			<PathDateWrapper >
				{blog.category ?
					<Link href={`/${t('category', { ns: 'routes' })}/` + blog.category.link}>
						<a>
							<div style={{ color: colors.grey }}> {blog.category.name}</div>
						</a>
					</Link>
					: null}
				<span>{renderDateFollowLanguage(blog.created_at)}</span>
			</PathDateWrapper>
			<Link aria-label={blog.title} href={`/${t('blogs', {ns: 'routes'})}/` + blog.link}>
				<a>
					<CeoBlogTitleH3>
						{blog.title}
					</CeoBlogTitleH3>
				</a>
			</Link>
			<CeoContentP>
				{blog.short_description}
			</CeoContentP>
			<Link href={`/${t('blogs', {ns: 'routes'})}/` + blog.category.link}>
				<a>
					<ReadMoreText>
						{"<"}<span style={{ textDecoration: "underline" }}> {t('read_more')} </span>{">"}
					</ReadMoreText>
				</a>
			</Link>
			<ShareContent banner={blog.banner} thumbnail={blog.thumbnail} url={`/${t('blogs', {ns: 'routes'})}/` + blog.link} story={blog} />
		</CeoBlogContentContainer >
	);
};

export default CeoBlogContent;
