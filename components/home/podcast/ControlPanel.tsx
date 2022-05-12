import { faBackward, faForward, faPause, faPlay, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { AudioInfo, AudioTime, AudioTitle, ControlPanelContainer } from './ControlPanelStyled';
import Slider from './Slider';

function ControlPanel({ play, isPlaying, duration, currentTime, onChange, percentage, toggleMuteAudio, mute }: any) {
	const { t } = useTranslation('home');
	function secondsToHms(seconds: number) {
		if (!seconds) return '00:00'

		let duration: any = seconds
		let hours: any = duration / 3600
		duration = duration % 3600

		let min: any = parseInt(duration / 60 + "");
		duration = duration % 60

		let sec: any = parseInt(duration)

		if (sec < 10) {
			sec = `0${sec}`
		}
		if (min < 10) {
			min = `0${min}`
		}

		if (parseInt(hours, 10) > 0) {
			return `${parseInt(hours, 10)}h ${min}m ${sec}s`
		} else if (min === 0) {
			return `00:${sec}`
		} else {
			return `${min}:${sec}`
		}
	}

	return (
		<ControlPanelContainer>
			<AudioInfo>
				<AudioTitle>{t('podcast.title')}</AudioTitle>
				<AudioTime>{secondsToHms(currentTime)} <span className="total-time">/ {secondsToHms(duration)}</span></AudioTime>
			</AudioInfo>
			<div className="control">
				<div className="btn-control">
					<div>
						<FontAwesomeIcon color="#7e7676" icon={faBackward} />
					</div>
					<div onClick={play}>
						{!isPlaying ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
					</div>
					<div>
						<FontAwesomeIcon color="#7e7676" icon={faForward} />
					</div>
				</div>
				<div className="progress-bar">
					<Slider onChange={onChange} percentage={percentage} />
				</div>
				<div style={{ cursor: "pointer" }} onClick={toggleMuteAudio}>
					{mute ? <FontAwesomeIcon icon={faVolumeMute} /> : <FontAwesomeIcon icon={faVolumeUp} />}
				</div>
			</div>
		</ControlPanelContainer>
	)
}
export default ControlPanel