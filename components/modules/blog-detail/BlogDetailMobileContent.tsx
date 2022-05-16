import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import MoreBlogs from '@components/pages/blog-detail/more-blogs-mobile/MoreBlogs';
import LatestPosts from '@components/pages/blog/content/LatestPosts';
import { domain } from '@configs/api';
import { clickDownloadEvent } from '@helpers/customGTM';
import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import { getListNews } from '@redux/slices/news';
import { RootState } from '@redux/store';
import LoadingMoto from '@utils/components/categories-tags/loading/LoadingMoto';
import LoadingTitle from '@utils/components/categories-tags/loading/LoadingTitle';
import BlogComment from '@utils/components/comment/BlogComment';
import DownloadFika from '@utils/components/DownloadFika';
import ShareButton from '@utils/components/share/ShareButton';
import { ContentMobileContainer, GeneralTitlePostDetailH1, MotoP, ShareAndLikeContainer, TimeAndAuthor } from '@utils/styled-components/GeneralContentStyled';
import { GeneralPaddingMobile, MarginBottonDiv } from '@utils/styled-components/GeneralStyled';
import { Space } from 'antd';
import parse from 'html-react-parser';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface IBlogDetailMobileContentProps {
	loading: boolean
}

const BlogDetailMobileContent: React.FunctionComponent<IBlogDetailMobileContentProps> = ({ loading }) => {
	const dispatch = useDispatch();
	const { blogDetail } = useSelector((state: RootState) => state.blog);

	React.useEffect(() => {
		dispatch(getListNews());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const { newsList } = useSelector((state: RootState) => state.news);

	return (
		<React.Fragment>
			<NavMobile tags={blogDetail ? blogDetail.tags : []} isLoading={!blogDetail} />
			<GeneralPaddingMobile>
				<MarginBottonDiv>
					{!blogDetail || loading ?
						<React.Fragment><GeneralTitlePostDetailH1>
							<LoadingTitle />
							<LoadingTitle width={80} />
						</GeneralTitlePostDetailH1>
							<MotoP>
								<LoadingMoto />
								<LoadingMoto />
								<LoadingMoto width={20} />
							</MotoP>
						</React.Fragment> : <React.Fragment>
							<GeneralTitlePostDetailH1>
								{blogDetail.title}
							</GeneralTitlePostDetailH1>
							<MotoP>{blogDetail.short_description}</MotoP>
							<TimeAndAuthor>{renderDateFollowLanguage(blogDetail.public_date ? blogDetail.public_date : blogDetail.created_at)} / BY {blogDetail.author.name}</TimeAndAuthor>
							<ShareAndLikeContainer>
								<ShareButton title={blogDetail.title} url={`${domain}${location.pathname}&&${blogDetail.id}#${blogDetail.id}`} />
							</ShareAndLikeContainer>
						</React.Fragment>}

				</MarginBottonDiv>
				{blogDetail ? (
					<React.Fragment>
						<Space style={{ width: "100%" }} size={20} direction="vertical">
							<ContentMobileContainer>
								{parse(blogDetail.contents.replaceAll('<a', "<a aria-label={''} target='_blank '"))}
							</ContentMobileContainer>
							<DownloadFika onClick={() => clickDownloadEvent('Fika Blog - Mobile')} />
							<BlogComment author={blogDetail.author} postId={blogDetail.id} />
							<LatestPosts type="news" posts={newsList.slice(0, 3)} />
							<MoreBlogs />
						</Space>
					</React.Fragment>) : null}
			</GeneralPaddingMobile>
		</React.Fragment>
	);
};

export default BlogDetailMobileContent;
