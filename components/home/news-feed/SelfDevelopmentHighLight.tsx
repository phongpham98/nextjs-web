import { getSelfDevelopmentHighlight } from '@redux/slices/home';
import { RootState } from '@redux/store';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import * as React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
interface ISelfDevelopmentHighLightProps {
}
const FeedMobile = dynamic(() => import('@components/mobile/story-feed/FeedMobile'))
const Feed = dynamic(() => import('./Feed'))
const SelfDevelopmentHighLight: React.FunctionComponent<ISelfDevelopmentHighLightProps> = (props) => {
	const { selfDevelopmentHighlight: highlightBlog } = useSelector((state: RootState) => state.home);
	const dispatch = useDispatch();
	const router = useRouter()

	React.useEffect(() => {
		dispatch(getSelfDevelopmentHighlight())
	}, [dispatch]);
	return (
		<React.Fragment>
			{highlightBlog ?
				<>
					<MobileView>
						<FeedMobile
							onClick={() => router.push(`/blog/` + highlightBlog.link)}
							url={`/blog/` + highlightBlog.link}
							showDate={false} blog={highlightBlog} />
					</MobileView>
					<BrowserView>
						<Feed
							onClick={() => router.push({
								pathname: `/blog/${highlightBlog.link}`,
							})}
							url={`news/detail/` + highlightBlog.link}
							showDate={false}
							story={highlightBlog}
						/>
					</BrowserView>
				</> : null
			}
		</React.Fragment>
	);
};

export default SelfDevelopmentHighLight;
