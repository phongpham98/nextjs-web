import { getHighlightNews } from '@redux/slices/home';
import { RootState } from '@redux/store';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import * as React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
interface INewsHighLightProps {
}

const FeedMobile = dynamic(() => import('@components/mobile/story-feed/FeedMobile'))
const Feed = dynamic(() => import('./Feed'))

const NewsHighLight: React.FunctionComponent<INewsHighLightProps> = (props) => {
	const { highlightNews } = useSelector((state: RootState) => state.home);
	const router = useRouter();
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(getHighlightNews())
	}, [dispatch]);
	return (
		<React.Fragment>
			{highlightNews ? (
				<>
					<MobileView>
					<FeedMobile
							onClick={() => router.push(`news/detail/` + highlightNews.link)}
							url={`news/detail/` + highlightNews.link}
							showDate={false}
							 blog={highlightNews} />
					</MobileView>
					<BrowserView>
						<Feed
							onClick={() => router.push({
								pathname: 'news/detail/` + highlightNews.link',
							})}
							url={`news/detail/` + highlightNews.link}
							showDate={false}
							story={highlightNews}
						/>
					</BrowserView>
				</>
			) : null}

		</React.Fragment>
	);
};

export default NewsHighLight;
//  (mobile ? <FeedMobile
			// 	url={`${tail}news/detail/` + highlightNews.link}
			// 	showDate={false} blog={highlightNews} /> :
			// 	<Feed
			// 		onClick={() => history.push(`${tail}news/detail/` + highlightNews.link, { id: highlightNews.id, tags: highlightNews.tags })}
			// 		url={`${tail}news/detail/` + highlightNews.link}
			// 		showDate={false}
			// 		story={highlightNews}
			// 	/>)}