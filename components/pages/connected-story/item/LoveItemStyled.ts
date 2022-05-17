import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const LoveItemContainer = styled.div``;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  cursor: pointer;
`;

export const OpactityImage = styled.div`
	position: absolute;
	z-index: 1;
	opacity: 0.3;
	background-color: black;
	width: 100%;
	height: 100%;
	top: 0;
	transition: all 0.3s;
	&:hover{
		opacity: 0;
	}
`;

export const LoveItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  bottom: 0;
  object-position: top;
  right: 0;
`;

export const LoveItemContent = styled.div`
  width: 100%;
  text-align: center;
`;

export const RankContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.2rem;
`;

interface HasTagProps {
  color?: string;
}

export const HasTag = styled.div<HasTagProps>`
  font-size: 35px;
  font-weight: 100;
  color: ${(props) => (props.color ? props.color : "black")};
  @media ${device.tablet768} {
    font-size: 1.5rem
  }

  @media ${device.laptop1024} {
    font-size: 25px;
  }

  @media ${device.laptop1440} {
    font-size: 32px;
  }

  @media ${device.laptop1600} {
    font-size: 35px;
  }

  @media ${device.desktop} {
    font-size: 35px;
  }
`;

export const RankDiv = styled.div<HasTagProps>`
  font-size: 50px;
  font-family: "Playfair Display";
  text-transform: uppercase;
  font-weight: 500;
  color: ${(props) => (props.color ? props.color : "black")};
  @media ${device.mobileS} {
    font-size: 2.3rem;
	line-height: 3.5rem;;
  }
  @media ${device.tablet768} {
    font-size: 2rem;
	line-height: 2.5rem;;
  }

  @media ${device.laptop1024} {
    font-size: 30px;
    line-height: 34px;
  }

  @media ${device.laptop1440} {
    font-size: 45px;
    line-height: 50px;
  }

  @media ${device.laptop1600} {
    font-size: 50px;
    line-height: 50px;
  }

  @media ${device.desktop} {
    font-size: 50px;
  }
`;

export const LoveTitleH2 = styled.h2`
  text-transform: uppercase;
  margin: 0;
  font-family: "Playfair Display";
  font-size: 22px;
  cursor: pointer;
  @media ${device.mobileS} {
    font-size: 1.4rem;
  }
  @media ${device.mobileL} {
    font-size: 1.7rem;
  }
  @media ${device.tablet768} {
    font-size: 15px;
  }

  @media ${device.laptop1024} {
    font-size: 20px;
  }

  @media ${device.laptop1440} {
    font-size: 28px;
    font-weight: 500;
  }

  @media ${device.laptop1600} {
    font-size: 30px;
  }

  @media ${device.desktop} {
    font-size: 30px;
  }
`;

export const QuoteDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media ${device.mobileS} {
    font-size: 0.7rem;
  }
  @media ${device.tablet768} {
    font-size: 9px;
  }

  @media ${device.laptop1024} {
    font-size: 10.5px;
  }

  @media ${device.laptop1440} {
    font-size: 14px;
  }

  @media ${device.laptop1600} {
    font-size: 14px;
  }

  @media ${device.desktop} {
    font-size: 20px;
  }
`;
