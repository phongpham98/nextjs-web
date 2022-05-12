import { homepage } from '@configs/general';
import SvgMusic from '@svgs/Music';
import HrLine from '@utils/components/HrLine';
import SectionTitle from '@utils/components/SectionTitle';
import React, { useRef, useState } from 'react';
import ControlPanel from './ControlPanel';
import { PodcastContainer } from './ControlPanelStyled';
import PodcastComment from './PodcastComment';
import { CommentContainer } from './PodcastStyled';

const Podcast = () => {
	const [percentage, setPercentage] = useState<number>(0);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [duration, setDuration] = useState<number>(0);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [mute, setMute] = useState<boolean>(false);

	const audioRef = useRef<any>()

	const onChange = (e: any) => {
		const audio = audioRef.current
		audio.currentTime = (audio.duration / 100) * e.target.value
		setPercentage(e.target.value)
	}

	const toggleMuteAudio = () => {
		const audio = audioRef.current;
		setMute(!mute);
		audio.muted = !mute;
	}

	const play = () => {
		const audio = audioRef.current;
		// audio.volume = 0.1;

		if (!isPlaying) {
			setIsPlaying(true)
			audio.play()
		}

		if (isPlaying) {
			setIsPlaying(false)
			audio.pause()
		}
	}

	const getCurrDuration = (e: any) => {
		const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
		const time = e.currentTarget.currentTime

		setPercentage(+percent)
		setCurrentTime(time.toFixed(2))
	}

	return (
		<div>
			<SectionTitle title='podcast' icon={<SvgMusic />} />
			<audio
				style={{ display: "none" }}
				ref={audioRef}
				src={homepage.podcast.link}
				onTimeUpdate={getCurrDuration}
				onLoadedData={(e: any) => {
					setDuration(e.currentTarget.duration.toFixed(2))
				}}
				controls>

			</audio>
			<PodcastContainer>
				<CommentContainer>
					<PodcastComment name="Jonathan" content="Interesting to hear the origin story of how Fika was created" position='left' />
				</CommentContainer>
				<ControlPanel
					onChange={onChange}
					percentage={percentage}
					play={play}
					isPlaying={isPlaying}
					duration={duration}
					currentTime={currentTime}
					toggleMuteAudio={toggleMuteAudio}
					mute={mute}
				/>
				<CommentContainer>
					<PodcastComment name="Sarah" content="Milestone achievements in such a short period of time, way to go Denise & Fika." position='right' />
				</CommentContainer>
			</PodcastContainer>
			<HrLine />
		</div>
	);
};

export default Podcast;