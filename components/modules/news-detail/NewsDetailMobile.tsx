/* eslint-disable react-hooks/exhaustive-deps */
import { NewsApi } from '@api';
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import LatestPosts from '@components/pages/blog/content/LatestPosts';
import MoreNews from '@components/pages/news-detail/more-news/MoreNews';
import { domain } from '@configs/api';
import { clickDownloadEvent } from '@helpers/customGTM';
import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import { PostModel } from '@interfaces/posts';
import { getLatestBlogs } from '@redux/slices/blog';
import { trackViews } from '@redux/slices/comment';
import { update_news_detail } from '@redux/slices/news';
import { RootState } from '@redux/store';
import LoadingMoto from '@utils/components/categories-tags/loading/LoadingMoto';
import LoadingTitle from '@utils/components/categories-tags/loading/LoadingTitle';
import BlogComment from '@utils/components/comment/BlogComment';
import DownloadFika from '@utils/components/DownloadFika';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import ShareButton from '@utils/components/share/ShareButton';
import { ContentMobileContainer, GeneralTitlePostDetailH1, MotoP, ShareAndLikeContainer, TimeAndAuthor } from '@utils/styled-components/GeneralContentStyled';
import { GeneralHeaderMobileContainer, GeneralImageWrapper, GeneralPaddingMobile, MarginBottonDiv } from '@utils/styled-components/GeneralStyled';
import { Space } from 'antd';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

interface INewsDetailMobileProps {
}

const NewsDetailMobile: React.FunctionComponent<INewsDetailMobileProps> = (props) => {
	const { newsDetail } = useSelector((state: RootState) => state.news);
	const { latestBlogs } = useSelector((state: RootState) => state.blog);
	const [loading, setLoading] = React.useState<boolean>(false)

	const router = useRouter();
	const { link } = router.query;
	const dispatch = useDispatch();

	const fetchBlogDetail = async () => {
		setLoading(true)
		try {
			let response: PostModel | undefined
			if (typeof link === 'string') {
				if (link.includes('&&')) {
					response = await NewsApi.fetchNewsByLinkOrId(undefined, link.split('&&')[1], router.locale);
				} else
					response = await NewsApi.fetchNewsByLinkOrId(link, undefined, router.locale);
			}
			if (response) {
				setLoading(false)
				dispatch(update_news_detail(response));
			}
		} catch (error: any) {
			setLoading(false)
			console.log('error', error)
		}
	}

	React.useEffect(() => {
		dispatch(getLatestBlogs());
		fetchBlogDetail()
	}, [link]);

	React.useEffect(() => {
		if (newsDetail) {
			dispatch(trackViews(newsDetail.id));
		}
	}, [newsDetail])
	return (
		<React.Fragment>
			<GeneralHeaderMobileContainer>
				{newsDetail && !loading ? (<GeneralImageWrapper>
					<RenderSmoothImage width='500' height='500' alt={newsDetail.title} src={newsDetail.thumbnail} />
				</GeneralImageWrapper>) : <GeneralImageWrapper>
					<RenderSmoothImage width='500' height='500' alt={''} src={''} />
				</GeneralImageWrapper>}
			</GeneralHeaderMobileContainer>
			<NavMobile tags={newsDetail ? newsDetail.tags : []} isLoading={!newsDetail} />
			<GeneralPaddingMobile>
				<MarginBottonDiv>
					{!newsDetail || loading ?
						<React.Fragment>
							<GeneralTitlePostDetailH1>
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
								{newsDetail.title}
							</GeneralTitlePostDetailH1>
							<MotoP>{newsDetail.short_description}</MotoP>
							<TimeAndAuthor>{renderDateFollowLanguage(newsDetail.public_date ? newsDetail.public_date : newsDetail.created_at)} / BY {newsDetail.author.name}</TimeAndAuthor>
							<ShareAndLikeContainer>
								<ShareButton title={newsDetail.title} url={`${domain}${router.pathname}&&${newsDetail.id}#${newsDetail.id}`} />

							</ShareAndLikeContainer>
						</React.Fragment>}

				</MarginBottonDiv>
				{newsDetail ? <Space style={{ width: "100%" }} size={20} direction="vertical">
					<ContentMobileContainer>
						{parse(newsDetail.contents.replaceAll('<a', "<a aria-label={'fikaconnects'}  target='_blank '"))}
					</ContentMobileContainer>
					<DownloadFika onClick={() => clickDownloadEvent('Fika News Detail - Mobile')} />
					<BlogComment author={newsDetail.author} postId={newsDetail.id} />
					<LatestPosts type="blog" posts={latestBlogs ? latestBlogs.slice(0, 3) : []} />
					<MoreNews tags={newsDetail.tags ? newsDetail.tags : []} />
				</Space> : null}

			</GeneralPaddingMobile>
		</React.Fragment>
	);
};

export default NewsDetailMobile;