import { emojiList } from '@helpers/getEmoji';
import React from 'react';
import { IconLeter, SuitableCardContainer } from './SuitableCardStyled';

interface Props {
	item?: any;
	type: "emoji" | "letter";
}

const getType = (type: string) => {
	if (type === "INTP" || type === "ENTP" || type === "ESTJ" || type === "ENTJ") {
		const firstLetter = type[0];
		return { color: "#6666FF", letter: firstLetter };
	} else if (type === "INTJ" || type === "INFP" || type === "ISFJ" || type === "INFJ") {
		const firstLetter = type[0];
		return { color: "#67D75B", letter: firstLetter };
	} else if (type === "ENFJ" || type === "ENFP" || type === "ISTJ" || type === "ESFJ") {
		const firstLetter = type[0];
		return { color: "#188BFF", letter: firstLetter };
	} else if (type === "ISTP" || type === "ISFP" || type === "ESTP" || type === "ESFP") {
		const firstLetter = type[0];
		return { color: "#FFC322", letter: firstLetter };
	}
	return { color: "red", letter: "I" };;
}



const SuitableCard = ({ item, type }: Props) => {

	return (
		<SuitableCardContainer>
			{type === "emoji" ? <div>{item.id > emojiList.length ? `👁️` : emojiList[item.id]} </div> :
				<IconLeter backgroundColor={getType(item.replace(",", "")).color}>{getType(item.replace(",", "")).letter}</IconLeter>}
			<div style={{ fontWeight: "bold" }}>{type === "emoji" ? item.name.replace(",", "") : item.replace(",", "")}</div>
		</SuitableCardContainer>
	);
};

export default SuitableCard;