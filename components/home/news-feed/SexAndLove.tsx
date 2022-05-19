import { getSexAndLoveHighlight } from '@redux/slices/home';
import { RootState } from '@redux/store';
import { useTranslation } from 'next-i18next';
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
	const dispatch = useDispatch();
	const {t} = useTranslation('routes')

	React.useEffect(() => {
		dispatch(getSexAndLoveHighlight())
	}, []);
	return (
		<React.Fragment>
			{highlightBlog ?
				<>
					<MobileView>
						<FeedMobile
							url={`/${t('blogs', {ns: 'routes'})}/` + highlightBlog.link}
							showDate={false} blog={highlightBlog} />
					</MobileView>
					<BrowserView>
						<Feed
							url={`/${t('blogs', {ns: 'routes'})}/` + highlightBlog.link}
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
