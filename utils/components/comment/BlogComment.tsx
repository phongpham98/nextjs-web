import isMobileDevice from '@helpers/isMobile';
import { Author, PostModel } from '@interfaces/posts';
import { getCommentsById } from '@redux/slices/comment';
import { RootState } from '@redux/store';
import SvgPenAlt from '@svgs/PenAlt';
import { Avatar, Col, Row } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import HrLine from '../HrLine';
import { AuthorInfor, AuthorJob, AuthorTitle, AuthorWrapper, BlogCommentContainer, CommentText, CommentWrapper, PagingWrapper, PostACommentTitleWrapper } from './BlogCommentStyled';
import Comment from './Comment';
import PagingCommentButton from './PagingCommentButton';
import ReaderComment from './ReaderComment';

interface Props {
	postId: string;
	author?: Author;
	type?: "blog" | "news";
	nextPost?: PostModel;
	prevPost?: PostModel;
}

const BlogComment = ({ postId, author, type, nextPost, prevPost }: Props) => {
	const mobile = isMobileDevice();
	const router = useRouter();
	const { comments } = useSelector((state: RootState) => state.comment);
	const { t } = useTranslation(['common', 'routes']);
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(getCommentsById(postId))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [postId])
	return (
		<BlogCommentContainer>
			<Row justify="center">
				<Col sm={24} md={16}>
					{author ? <React.Fragment>
						<HrLine margin="0" />
						<AuthorWrapper>
							<Avatar size={64} src={author.avatar ? author.avatar : '/avatar-author.png'} />
							<AuthorInfor>
								<AuthorTitle>{author.name}</AuthorTitle>
								<AuthorJob>{author.position}</AuthorJob>
							</AuthorInfor>
						</AuthorWrapper>
						<HrLine margin="0" />
						{!mobile ? <PagingWrapper>
							{prevPost && prevPost.id ?
								<Link href={`/${type === "news" ? `${t('news', { ns: 'routes' })}/${t('detail', { ns: 'routes' })}` : type}/${prevPost.link}`}>
									<a>
										<PagingCommentButton label={`< ${t("comment.prev")}`} />
									</a>
								</Link>
								: null}


							{nextPost && nextPost.id ? <Link href={`/${type === "news" ? `${t('news', { ns: 'routes' })}/${t('detail', { ns: 'routes' })}` : type}/${nextPost.link}`}>
								<a>
									<PagingCommentButton label={`< ${t("comment.next")}`} />
								</a>
							</Link> : null}

						</PagingWrapper> : null}
					</React.Fragment> : null}
					{comments.length > 0 ? (
						<React.Fragment>
							<CommentText>{t("comment.title")}</CommentText>
							<ReaderComment postId={postId} />
						</React.Fragment>
					) : null}


					<CommentWrapper>
						<PostACommentTitleWrapper>
							<CommentText>{t("comment.post_comment")}</CommentText>
							<SvgPenAlt />
						</PostACommentTitleWrapper>
						<Comment postId={postId} />
					</CommentWrapper>
				</Col>
			</Row>
		</BlogCommentContainer>
	);
};

export default BlogComment;