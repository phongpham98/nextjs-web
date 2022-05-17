import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const TeamMoibleTitleH1 = styled.h1`
  font-family: 'Playfair Display', serif;
  text-transform: uppercase;
  @media ${device.mobileS} {
    font-size: 2.5rem;
    text-align: center;
    line-height: 2.5rem;
    margin-top: 2rem;
  }
`;

export const TeamSubHeader = styled.p`
	text-align: center;
	color: black;
	font-weight: 400;
	font-size: 0.9rem;
	margin-top: 0.5rem;
`;


