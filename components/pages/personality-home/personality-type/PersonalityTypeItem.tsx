import { PersonalityTypeItemModel } from '@interfaces/model';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AspectRatio, HighLightCharacters, PersonalityImage, PersonalityName, TypeItemContainer } from './PersonalityTypeItemStyled';
interface PersonalityTypeItemProps {
	item: PersonalityTypeItemModel;
	isSlider?: boolean;
}

const PersonalityTypeItem = ({ item, isSlider = false }: PersonalityTypeItemProps) => {
	const { t } = useTranslation('routes')
	return (
		<Link href={`${t('personality')}/${item.name}`}>
			<a>
				<TypeItemContainer>
					<AspectRatio>
						<PersonalityImage>
							<img width='100%' src={item.image_src} alt={item.name} />
						</PersonalityImage>
						<PersonalityName isSlider={isSlider}>
							{item.name}
						</PersonalityName>
						{!isSlider ? <HighLightCharacters>
							{item.characters.map((c, idx) => {
								return (
									<span key={idx}>{c}{idx !== item.characters.length - 1 && ','}</span>
								)
							})}
						</HighLightCharacters> : null}

					</AspectRatio>
				</TypeItemContainer>
			</a>
		</Link>
	);
};

export default PersonalityTypeItem;