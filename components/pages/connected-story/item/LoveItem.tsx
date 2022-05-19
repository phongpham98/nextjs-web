import { StoryModel } from '@interfaces/model';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { ImageContainer, LoveItemContainer, LoveItemContent, LoveItemImage, LoveTitleH2, OpactityImage, QuoteDiv } from './LoveItemStyled';
interface LoveItemProps {
	story?: StoryModel;
}

const LoveItem = ({ story }: LoveItemProps) => {
	const { t } = useTranslation('routes');
	return (
		<LoveItemContainer>
			{story ? <React.Fragment>
				<Link href={`/${t('connected_story')}/` + story.link}>
					<a>
						<ImageContainer>
							<GeneralImageWrapper>
								<RenderSmoothImage src={story.thumbnail} alt={story.title} />
							</GeneralImageWrapper>
							<OpactityImage />
						</ImageContainer>
					</a>
				</Link>

				<LoveItemContent>
					<Link href={`/${t('connected_story')}/` + story.link}>
						<a>
							<LoveTitleH2>
								{story.title}
							</LoveTitleH2>
						</a>
					</Link>

					<QuoteDiv>
						{story.slogan}
					</QuoteDiv>
				</LoveItemContent>
			</React.Fragment> : null}

		</LoveItemContainer>
	);
};

export default LoveItem;