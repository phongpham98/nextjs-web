import FeedMobile from '@components/mobile/story-feed/FeedMobile';
import { PostRequest } from '@interfaces/posts';
import { loadMoreBlogs, update_query } from '@redux/slices/blog';
import { RootState } from '@redux/store';
import HrLine from '@utils/components/HrLine';
import { Space } from 'antd';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface IMoreBlogsMobileProps {
}

const MoreBlogsMobile: React.FunctionComponent<IMoreBlogsMobileProps> = (props) => {
	const dispatch = useDispatch();
	const { query, loadBlogs } = useSelector((state: RootState) => state.blog);
	React.useEffect(() => {
		fetchMoreData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const {t} = useTranslation('routes')
	const fetchMoreData = () => {
		const newQuery: PostRequest = {
			limit: 9,
			page: query?.page ? query.page + 1 : 1,
		}
		dispatch(update_query(newQuery));
		dispatch(loadMoreBlogs());
	};

	return (
		<React.Fragment>
			<Space style={{ width: "100%" }} size={20} direction="vertical">
				{loadBlogs?.map(blog => {
					return (
						<React.Fragment key={blog.id}>
							<FeedMobile 
							url={`/${t('blogs', {ns: 'routes'})}/` + blog.link}
							 blog={blog} />
							<HrLine margin="0" />
						</React.Fragment>
					)
				})}
			</Space>
		</React.Fragment>
	);
};

export default MoreBlogsMobile;
