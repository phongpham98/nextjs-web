import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const HeaderContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const NewsTitleDiv = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 100px 0;

  /* padding-left: 160px; */

  @media ${device.tablet768} {
    padding: 50px 10%;
    /* padding-left: 70px; */
  }

  @media ${device.laptop1024} {
    padding: 60px 10%;
    /* padding-left: 6rem; */
  }

  @media ${device.laptop1280} {
    padding: 70px 10%;
    /* padding-left: 9rem; */
  }

  @media ${device.laptop1440} {
    padding: 7rem 10%;
    /* padding-left: 10rem; */
  }

  @media ${device.laptop1600} {
    padding: 8rem 10%;
    /* padding-left: 12rem; */
  }
  /* padding-right: 10%; */
`;

export const NewsTitleH1 = styled.h1`
  /* position: absolute; */
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
  z-index: 1;
  margin: 0;

  @media ${device.tablet768} {
    /* margin-bottom: 0.7rem; */
    font-size: 2.5rem;
	line-height: 2.5rem;
    font-weight: 500;
    /* right: -3rem; */
  }

  @media ${device.laptop1024} {
    /* margin-bottom: 0.7rem; */
    font-size: 3rem;
	line-height: 3rem;
    /* right: -3rem; */
  }

  @media ${device.laptop1280} {
    /* margin-bottom: 1.5rem; */
    font-size: 3.5rem;
	line-height: 3.5rem;
    /* right: -3.5rem; */
  }

  @media ${device.laptop1440} {
    /* margin-bottom: 1.4rem; */
    font-size: 4.5rem;
	line-height: 4.5rem;
    /* right: -4.7rem; */
  }

  @media ${device.laptop1600} {
    /* margin-bottom: 1rem; */
    font-size: 5.5rem;
	line-height: 5.5rem;
    /* right: -5.7rem; */
  }
`;

export const NewsSubTitleP = styled.p`
  color: #61666d;
  width: 100%;
  /* padding: 0 10%; */
  text-align: right;
  @media ${device.tablet768} {
    margin-bottom: 0px;
    font-size: 9px;
  }

  @media ${device.laptop1024} {
    margin-bottom: 0px;
    font-size: 0.9rem;
  }

  @media ${device.laptop1280} {
    margin-bottom: 0px;
    font-size: 0.9rem;
  }

  @media ${device.laptop1440} {
    font-size: 1rem;
  }

  @media ${device.laptop1600} {
    margin-bottom: 0px;
    font-size: 1rem;
  }
`;

export const ImageContainer = styled.div`
  padding: 120px 0px 80px 0;
  @media ${device.tablet768} {
    padding: 50px 0px 30px 0;
  }

  @media ${device.laptop1024} {
    padding: 60px 0px 40px 0;
  }

  @media ${device.laptop1440} {
    padding: 80px 0px 80px 0;
  }

  @media ${device.laptop1600} {
    padding: 100px 0px 80px 0;
  }
`;

export const NewsImage = styled.img`
  width: 65%;
  box-shadow: 40px -40px 0px 0px #898a90;
  @media ${device.tablet768} {
    box-shadow: 30px -30px 0px 0px #898a90;
  }

  @media ${device.laptop1024} {
    box-shadow: 40px -40px 0px 0px #898a90;
  }

  @media ${device.laptop1440} {
    box-shadow: 40px -40px 0px 0px #898a90;
  }

  @media ${device.laptop1600} {
    box-shadow: 40px -40px 0px 0px #898a90;
  }

  @media ${device.desktop} {
    box-shadow: 40px -40px 0px 0px #898a90;
  }
`;
