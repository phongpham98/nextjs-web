import FeedMobile from '@components/mobile/story-feed/FeedMobile';
import { MoreBlogsContainer } from '@components/modules/blog-detail/BlogSingleContentStyled';
import { getBlogs } from '@redux/slices/blog';
import { RootState } from '@redux/store';
import { CommentText } from '@utils/components/comment/BlogCommentStyled';
import HrLine from '@utils/components/HrLine';
import { Space } from 'antd';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
interface IMoreBlogsProps {
}

const MoreBlogs: React.FunctionComponent<IMoreBlogsProps> = () => {
	const { blogs, blogDetail } = useSelector((state: RootState) => state.blog);
	const dispatch = useDispatch();
	React.useEffect(() => {
		if (blogDetail) {
			dispatch(getBlogs([], [blogDetail.id]))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [blogDetail]);

	return (
		<MoreBlogsContainer>
			{blogs.length > 0 ?
				<Space style={{ width: "100%" }} size={20} direction="vertical">
					<CommentText >more blogs</CommentText>
					{blogs.map(blog => {
						return (
							<React.Fragment key={blog.id}>
								<FeedMobile
									url={`/blog/` + blog.link}
									blog={blog} />
								<HrLine margin="0" />
							</React.Fragment>
						)
					})}
				</Space> : null}
		</MoreBlogsContainer>
	);
};

export default MoreBlogs;
