import { getSexAndLoveHighlight } from '@redux/slices/home';
import { RootState } from '@redux/store';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import * as React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
interface IDatingAdviceHighLightProps {
}

const FeedMobile = dynamic(() => import('@components/mobile/story-feed/FeedMobile'))
const Feed = dynamic(() => import('./Feed'))

const SexAndLoveHighlight: React.FunctionComponent<IDatingAdviceHighLightProps> = (props) => {
	const { sexAndLoveHighlight: highlightBlog } = useSelector((state: RootState) => state.home);
	const router = useRouter();
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(getSexAndLoveHighlight())
	}, []);
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
							url={`/blog/` + highlightBlog.link}
							showDate={false}
							story={highlightBlog}
						/>
					</BrowserView>
				</> : null
			}
		</React.Fragment>
	);
};

export default SexAndLoveHighlight;
