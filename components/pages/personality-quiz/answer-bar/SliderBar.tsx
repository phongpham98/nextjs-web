import isMobileDevice from '@helpers/isMobile';
import { sendAnswer } from '@redux/slices/quiz';
import $ from 'jquery';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { SliderBarContainer, SliderInput } from './SliderBarStyled';
interface ISliderBarProps {
	nextQuestion: () => void;
	question_id: string;
	disabled: boolean;
}

const SliderBar: React.FunctionComponent<ISliderBarProps> = ({ nextQuestion, question_id, disabled }) => {
	const [value, setValue] = React.useState<number>(0);
	const divRef = React.useRef<HTMLInputElement>(null);
	const mobile = isMobileDevice();
	const handleChangeValue = (e: any) => {
		setValue(e.target.value)
	}

	const dispatch = useDispatch();
	function onChooseAnswer() {
		const nextQ = divRef.current?.closest('.question')?.nextSibling;
		if (nextQ) {
			let offset = $(nextQ).offset()?.top;
			let space = mobile ? 70 : 100
			if (offset)
				$('html, body').animate({
					scrollTop: offset - space
				}, 500);
		}
		dispatch(sendAnswer(value, question_id))
		nextQuestion();
	}


	return (
		<SliderBarContainer>
			<label style={{ display: 'none' }} htmlFor="slider-bar">aaa</label>
			<SliderInput
				disabled={disabled}
				type="range"
				aria-label='input'
				min="-1"
				aria-labelledby='slider-bar'
				max="1"
				step={0.01}
				value={value}
				ref={divRef}
				onChange={handleChangeValue}
				onMouseUp={onChooseAnswer}
				onTouchEnd={onChooseAnswer}
			// onCompositionEnd={onChooseAnswer}
			/>
		</SliderBarContainer>
	);
};

export default SliderBar;
