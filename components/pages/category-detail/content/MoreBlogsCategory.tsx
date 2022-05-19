import FeedMobile from '@components/mobile/story-feed/FeedMobile';
import { RootState } from '@redux/store';
import HrLine from '@utils/components/HrLine';
import { Space } from 'antd';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { useSelector } from 'react-redux';

interface IMoreBlogsCategoryProps {
}

const MoreBlogsCategory: React.FunctionComponent<IMoreBlogsCategoryProps> = (props) => {
	const { loadBlogs } = useSelector((state: RootState) => state.category);
	const {t} = useTranslation('routes')
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

export default MoreBlogsCategory;
