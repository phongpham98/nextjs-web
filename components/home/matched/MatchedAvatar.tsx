/* eslint-disable react-hooks/exhaustive-deps */
import useWindowDimensions from '@hooks/useWindowDemension';
import animationData from '@public/assets/animation/animation.json';
import { RootState } from '@redux/store';
import 'animate.css';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import AvatarRound from './AvatarRound';
import { AnimationArea, AvatarContainer, MatchedAvatarContainer, MatchedText } from './MatchedAvatarStyled';

const MatchedAvatar = () => {
	const { width } = useWindowDimensions();
	const desktop = width > 2560;
	const laptop1600 =  width > 1556
	const laptop1440 =  width > 1440
	const laptop1024 =  width > 1024
	const [showAnimation, setShowAnimation] = useState<boolean>(false);
	const [currentIdx, setCurrentIdx] = useState<number>(0);
	const { matches } = useSelector((state: RootState) => state.matched);
	const [time, setTime] = useState<number>(2980);
	const [timeAnimate, setTimeAnimate] = useState<number>(1477);
	const { t } = useTranslation('home');

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowAnimation(!showAnimation);
		}, timeAnimate);
		return () => clearTimeout(timeout)

	}, [showAnimation])

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (currentIdx === matches.length - 1) {
				setCurrentIdx(0);
				setTime(time + 10);
				setTimeAnimate(timeAnimate + 2);
			} else {
				setCurrentIdx(currentIdx + 1);
			}
		}, time);
		return () => clearTimeout(timeout)
	}, [currentIdx])

	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	return (
		<MatchedAvatarContainer>
			{(currentIdx !== -1) && (
				<AnimationArea>
					<React.Fragment>
						<AvatarContainer type="female">
							<AvatarRound image={matches[currentIdx].first.image} type={matches[currentIdx].first.gender} personality={matches[currentIdx].first.personalityType} />
						</AvatarContainer>
						<AvatarContainer type="male">
							<AvatarRound image={matches[currentIdx].second.image} type={matches[currentIdx].second.gender} personality={matches[currentIdx].second.personalityType} />
						</AvatarContainer>
					</React.Fragment>

					{showAnimation && <MatchedText className="animate__animated animate__bounceIn animate__faster">{t('matched.matched_title')}</MatchedText>}
					{showAnimation && <Lottie
						options={defaultOptions}
						height={desktop ? 400 : laptop1600 ? 400 : laptop1440 ? 400 : laptop1024 ? 290 : 200}
						width={desktop ? 400 : laptop1600 ? 400 : laptop1440 ? 400 : laptop1024 ? 290 : 200}
					/>}
				</AnimationArea>
			)}

		</MatchedAvatarContainer>
	);
};

export default MatchedAvatar;