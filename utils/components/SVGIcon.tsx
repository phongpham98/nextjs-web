import React from 'react';
import styled, { keyframes } from 'styled-components';

interface SVGContainerProps {
	size?: number;
	hasRing?: boolean;
}

export const ring = keyframes`
	0% {
		transform: rotate(-30deg);
	}
	50% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(-30deg);
	}
`;

const SVGContainer = styled.span<SVGContainerProps>`
	width: ${props => props.size ? props.size : 20}px;
	height: ${props => props.size ? props.size : 20}px;
	display: inline-flex;
	/* animation: ${props => props.hasRing === true ? `ring 0.3s linear infinite` : false}; */
	& img{
		width: 100%;
		height: 100%;
	}
`;

interface SVGIconProps {
	size?: number;
	svgIcon: any;
	hasRing?: boolean;
}

const SVGIcon = ({ size, svgIcon, hasRing = false }: SVGIconProps) => {

	return (
		<SVGContainer hasRing={hasRing} size={size}>
			<img width='20' height='20' src={svgIcon} alt="" />
		</SVGContainer>
	)
}

export default SVGIcon;