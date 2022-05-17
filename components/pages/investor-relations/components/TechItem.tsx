import * as React from 'react';
import { CenterIcon, TextItemContentContainer, Description, EqualDiv, Header, IconContainer, TechItemContainer } from './Styled';
import parse from 'html-react-parser';
import LazyLoad from 'react-lazyload';
import { GeneralImage } from '@utils/styled-components/GeneralStyled';
interface ITextItemProps {
	icon: any;
	title: string;
	description: string;
	image: string;
}

const TextItem: React.FunctionComponent<ITextItemProps> = ({ icon, title, description, image }) => {
	return (
		<TechItemContainer>
			<EqualDiv>
				<LazyLoad throttle={100} height={100} once>
					<GeneralImage src={image} alt="fika investor" />
				</LazyLoad>
				<CenterIcon>
					<IconContainer>
						{icon}
					</IconContainer>
				</CenterIcon>
			</EqualDiv>

			<TextItemContentContainer>
				<Header>
					{title}
				</Header>
				<Description>
					{parse(description)}
				</Description>
			</TextItemContentContainer>
		</TechItemContainer>
	);
};

export default TextItem;
