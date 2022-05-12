// import Matched from '@components/matched/Matched';
import Activities from '@components/home/activities/Activities';
import DiscoverBlogs from '@components/home/discover-blogs/DiscoverBlogs';
import Instagram from '@components/home/instagram/Instagram';
import NewsFeed from '@components/home/news-feed/HighlightBlogs';
import Podcast from '@components/home/podcast/Podcast';
import Topics from '@components/home/topics/Topics';
import Media from '@components/home/youtube/Media';
import { clickDownloadEvent } from '@helpers/customGTM';
import useOnScreen from '@hooks/useOnScreen';
import DownloadFika from '@utils/components/DownloadFika';
import HrLine from '@utils/components/HrLine';
import StickyDownload from '@utils/components/StickyDownload';
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled';
import { Space } from 'antd';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';
import { HomeContainer, StickyHomeContainer } from './HomePageStyled';

const Matched = dynamic(() => import('@components/home/matched/Matched'),
	{ ssr: false })

interface IHomepageDesktopProps {
}

const HomepageDesktop: React.FunctionComponent<IHomepageDesktopProps> = (props) => {
	const matchRef = useRef<HTMLDivElement>(null);
	const matchRefValue = useOnScreen(matchRef);
	const [isChild3Ref, setIsChild3Ref] = useState(false);
	const highlightRef = useRef<HTMLDivElement>(null);
	const highlightRefValue = useOnScreen(matchRef);
	const [ishighlightRef, setisHighlightRef] = useState(false);

	const ceoRef = useRef<HTMLDivElement>(null);
	const ceoRefValue = useOnScreen(matchRef);
	const [isceoRef, setisCeoRef] = useState(false);

	useEffect(() => {
		if (!isChild3Ref)
			setIsChild3Ref(matchRefValue);

	}, [matchRefValue])
	useEffect(() => {
		if (!ishighlightRef)
			setisHighlightRef(highlightRefValue);

	}, [highlightRefValue])

	useEffect(() => {
		if (!isceoRef)
			setisCeoRef(ceoRefValue);

	}, [ceoRefValue])

	return (
		<GeneralContentWrapper>
			<HomeContainer>
				<StickyHomeContainer style={{ position: "absolute", height: "100%", top: "15px", left: "0" }}>
					<StickyDownload />
				</StickyHomeContainer>
				<Space style={{ width: "100%" }} size={60} direction="vertical">
					<Topics />
					<div ref={matchRef}>
						{isChild3Ref && <Matched />}
					</div>
					<Media />
					<HrLine />
					<div ref={highlightRef}>
						{ishighlightRef && <NewsFeed />}
					</div>
					<DownloadFika onClick={() => clickDownloadEvent('Home Page')} />
					<div ref={ceoRef}>
						{isceoRef && <DiscoverBlogs />}
					</div>
					<HrLine />
					<Activities />
					<Podcast />
					<Instagram />
				</Space>
			</HomeContainer>
		</GeneralContentWrapper>
	);
};

export default HomepageDesktop;
