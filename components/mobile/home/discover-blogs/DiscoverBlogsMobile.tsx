/* eslint-disable react-hooks/exhaustive-deps */
import FeedMobile from '@components/mobile/story-feed/FeedMobile';
import { getCeoBlogs, getCTOBlogs } from '@redux/slices/discoverBlogs';
import { RootState } from '@redux/store';
import SvgStar from '@svgs/Star';
import FikaButton from '@utils/components/FikaButton';
import SectionTitle from '@utils/components/SectionTitle';
import { GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import { Space } from 'antd';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
interface IDiscoverBlogsMobileProps {
}

const DiscoverBlogsMobile: React.FunctionComponent<IDiscoverBlogsMobileProps> = (props) => {
	const { t } = useTranslation('button');
	const { blogs, ctoBlogs } = useSelector((state: RootState) => state.discover);
	const router = useRouter();
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(getCeoBlogs());
		dispatch(getCTOBlogs())
	}, []);

	return <GeneralPaddingMobile>
		{blogs && ctoBlogs ? (
			<React.Fragment>
				<SectionTitle marginBottom="20" icon={<SvgStar />} title={"Discover blogs"} />
				<Space style={{ width: "100%" }} size={30} direction="vertical">
					{blogs.length > 0 ? <FeedMobile
						onClick={() => router.push(`/blog/` + blogs[0].link)}
						url={`/blog/` + blogs[0].link}
						showDate={true} blog={blogs[0]} /> : null}
					<FeedMobile
						onClick={() => router.push(`/blog/` + ctoBlogs.link)}
						url={`/blog/` + ctoBlogs.link}
						showDate={true} blog={ctoBlogs} />
					{blogs.length > 1 ? <FeedMobile
						onClick={() => router.push(`/blog/` + blogs[1].link)}
						url={`/blog/` + blogs[1].link}
						showDate={true} blog={blogs[1]} /> : null}
					<div style={{ textAlign: "center" }}>
						<FikaButton onClick={() => router.push(`/blog`)} name={(t('explore_all'))} />
					</div>
				</Space>
			</React.Fragment>) : null}
	</GeneralPaddingMobile>;
};

export default DiscoverBlogsMobile;
