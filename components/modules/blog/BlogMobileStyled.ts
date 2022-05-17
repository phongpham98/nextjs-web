import { device } from "@configs/screensSizes";
import { GeneralPaddingMobile } from "@utils/styled-components/GeneralStyled";
import styled from "styled-components";

export const BlogTitleH1 = styled.h1`
  width: 60%;
  text-transform: uppercase;
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  line-height: 3rem;
  font-weight: 500;
  @media ${device.mobileM} {
    font-size: 3.3rem;
    line-height: 3.3rem;
  }
  @media ${device.mobileL} {
    font-size: 3.5rem;
    line-height: 3.5rem;
  }
`;

export const RelationShipTitle = styled.div`
  text-transform: uppercase;
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  line-height: 2.3rem;
  width: 70%;
  font-weight: 500;
  @media ${device.mobileM} {
    font-size: 2.3rem;
    line-height: 2.4rem;
  }
  @media ${device.mobileL} {
    font-size: 2.4rem;
    line-height: 2.5rem;
  }
`;

export const HeaderContent = styled(GeneralPaddingMobile)`
  position: absolute;
  width: 100%;
  height: 60%;
  bottom: 0;
  left: 0;
  padding: 0 1.5rem;
`;

export const SubHeaderP = styled.div`
  font-size: 0.7rem;
  color: #61666d;
  width: 90%;
  margin-top: 0.7rem;
  @media ${device.mobileM} {
    font-size: 0.7rem;
  }
  @media ${device.mobileL} {
    font-size: 0.8rem;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  padding: 3.5rem 3rem 0 0;
  @media ${device.mobileM} {
    width: 49%;
  }
  @media ${device.mobileL} {
    width: 48%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  box-shadow: 20px -20px 0px 0px #babac0;
`;
