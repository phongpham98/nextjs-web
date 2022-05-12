import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const SliderItemContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
`;

export const SliderContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  top: 0;
  color: white;
  font-weight: 500;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(
    176.83deg,
    rgba(0, 0, 0, 0) 41.16%,
    #000000 97.38%
  );

  @media ${device.mobileS} {
    padding: 1rem 1rem;
  }

  @media ${device.laptop1024} {
    padding: 1.5rem 2rem;
  }
  @media ${device.laptop1280} {
    padding: 2.5rem;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  margin: 0;
  color: #fff;
  text-transform: uppercase;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media ${device.mobileS} {
    width: 100%;
    margin-bottom: 0.2rem;
    font-size: 0.8rem;
  }
  @media ${device.laptop1024} {
    width: 100%;
    margin-bottom: 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media ${device.laptop1280} {
    width: 100%;
    margin-bottom: 0.75rem;
    font-size: 1.5rem;
    letter-spacing: 1.5px;
    line-height: 1.8rem;
  }
`;

export const SubTitle = styled.div`
  font-weight: 300;
  font-size: 11px;
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media ${device.mobileS} {
    width: 90%;
    -webkit-line-clamp: 1;
  }
  @media ${device.laptop1024} {
    width: 100%;
    -webkit-line-clamp: 2;
    font-size: 0.9rem;
    line-height: 1.2rem;
  }
  @media ${device.laptop1440} {
    width: 100%;
    -webkit-line-clamp: 2;
    font-size: 1rem;
    line-height: 1.4rem;
  }
`;

export const DateTime = styled.div`
  color: #00d2eb;
  text-transform: capitalize;
  margin-top: 0.5rem;
  @media ${device.mobileS} {
    margin-top: 0.2rem;
    font-size: 0.7rem;
  }
  @media ${device.laptop1024} {
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const ImageSlider = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const SliderContainer = styled.div`
  height: 100%;
  .slick-slider,
  .slick-list,
  .slick-track {
    height: 100%;
  }

  .slick-track {
    display: flex;
    align-items: center;
	background-color: black;
  }
  .slick-slide > div,
  .slick-slide > div > div {
    height: 100%;
  }
`;

export const SliderLoadingContainer = styled.div`
	background-color:  #f2f3f5;
	width: 100%;
	padding-top: 100%;
`;
