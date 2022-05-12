import ControlPanel from '@components/home/podcast/ControlPanel';
import { homepage } from '@configs/general';
import SvgMusic from '@svgs/Music';
import SectionTitle from '@utils/components/SectionTitle';
import { GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import React, { useRef, useState } from 'react';

interface IPodCastMobileProps {
}

const PodCastMobile: React.FunctionComponent<IPodCastMobileProps> = (props) => {
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
		<GeneralPaddingMobile>
			<SectionTitle marginBottom="20" title='podcast' icon={<SvgMusic />} />
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
		</GeneralPaddingMobile>
	);
};

export default PodCastMobile;
