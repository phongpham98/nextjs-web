/* eslint-disable react-hooks/exhaustive-deps */
import { BlogApi } from '@api';
import { PostModel } from '@interfaces/posts';
import { update_blog_detail } from '@redux/slices/blog';
import { trackViews } from '@redux/slices/comment';
import { RootState } from '@redux/store';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { GeneralHeaderMobileContainer, GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogDetailMobileContent from './BlogDetailMobileContent';

interface IBlogDetailMobileProps {
}

const BlogDetailMobile: React.FunctionComponent<IBlogDetailMobileProps> = (props) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { link } = router.query;
	const { blogDetail } = useSelector((state: RootState) => state.blog);
	const [loading, setLoading] = React.useState<boolean>(false);
	const fetchBlogDetail = async () => {
		setLoading(true)
		try {
			let response: PostModel | undefined
			if (typeof link === 'string') {
				if (link.includes('&&')) {
					response = await BlogApi.fetchByLinkorId(undefined, link.split('&&')[1]);
				} else
					response = await BlogApi.fetchByLinkorId(link);
			}

			if (response) {
				setLoading(false)
				dispatch(update_blog_detail(response));
			}
		} catch (error: any) {
			setLoading(false)
			console.log('error', error)
		}
	}
	React.useEffect(() => {
		fetchBlogDetail()
	}, [link]);

	React.useEffect(() => {
		if (blogDetail) {
			dispatch(trackViews(blogDetail.id));
		}
	}, [blogDetail])

	return (
		<React.Fragment>
			{/* {blogDetail ? <SchemaBlog blogDetail={blogDetail} /> : null} */}
			<GeneralHeaderMobileContainer>
				{blogDetail && !loading ? (<GeneralImageWrapper>
					<RenderSmoothImage width='500' height='500' alt={blogDetail.title} src={blogDetail.thumbnail} />
				</GeneralImageWrapper>) : <GeneralImageWrapper>
					<RenderSmoothImage width='500' height='500' alt={''} src={''} />
				</GeneralImageWrapper>}
			</GeneralHeaderMobileContainer>
			<BlogDetailMobileContent loading={loading} />
		</React.Fragment>
	);
};

export default BlogDetailMobile;
