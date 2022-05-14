import isMobileDevice from '@helpers/isMobile';
import $ from 'jquery';
import React, { useState } from 'react';
import { Chosen, CircleRound, LevelContainer, TooltipContainer } from './AnswerBarStyled';
interface LevelItemProps {
	item: number;
	itemChosen: number;
	onClick: () => void;
	disabled: boolean;
}

const LevelItem = ({ item, itemChosen, onClick, disabled }: LevelItemProps) => {
	const mobile = isMobileDevice();
	const [showTooltip, setShowTooltip] = useState<boolean>(false);
	const divRef = React.useRef<HTMLSpanElement>(null);
	function onClickItem(e: any) {
		const nextQuestion = divRef.current?.closest('.question')?.nextSibling;
		if (nextQuestion) {
			let offset = $(nextQuestion).offset()?.top;
			let space = mobile ? 70 : 100
			if (offset)
				$('html, body').animate({
					scrollTop: offset - space
				}, 500);
		}
		onClick();
	}

	return (
		<LevelContainer
			onMouseEnter={() => setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}
			onClick={(e: any) => {
				if (!disabled)
					onClickItem(e)
			}}
			className={'choice' + (item === 0 ? '1' : '') + (disabled ? ' disabled' : "")}
			ref={divRef}
		>

			{itemChosen === item && <CircleRound>
				<Chosen>
				</Chosen>
			</CircleRound>}
			{!mobile ? (showTooltip && <TooltipContainer>
				{item !== 0 ? Math.abs(item * 100) + '%' : '0'}
			</TooltipContainer>) : null}
		</LevelContainer>
	);
};

export default LevelItem;