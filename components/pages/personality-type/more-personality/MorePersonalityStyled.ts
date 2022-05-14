import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const ChevronIconContainer = styled.div`
  display: none;
  @media ${device.tablet768} {
    color: white;

    background-color: rgba(36, 36, 36, 0.5);
    display: flex !important;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    font-size: 0.8rem;
    &.slick-prev:hover,
    &.slick-prev:focus,
    &.slick-next:hover,
    &.slick-next:focus {
      color: white;
      background-color: rgba(36, 36, 36, 0.5);
    }
    &::before {
      display: none;
    }
    font-size: 1rem;
  }
  @media ${device.laptop1440} {
    &.slick-next {
      right: -50px;
    }
    &.slick-prev {
      left: -50px;
    }
  }
`;

export const SliderMobileContainer = styled.div`
  /* padding: 0 10%; */
  @media ${device.tablet768} {
    padding: 0 10%;
  }
`;

export const MorePersonalitiesContainer = styled.div`
  /* padding: 0 1.5rem; */
  margin-bottom: 2rem;
  @media ${device.tablet768} {
    margin: 3rem 0;
  }
`;

export const SliderItem = styled.div`
  padding: 0 0.5rem;
  @media ${device.tablet768} {
    padding: 0 1.3rem;
  }
  @media ${device.laptop1024} {
    padding: 0 1.5rem;
  }
  @media ${device.laptop1280} {
    padding: 0 2rem;
  }
  @media ${device.laptop1440} {
    padding: 0 1.5rem;
  }
  @media ${device.laptop1600} {
    padding: 0 3rem;
  }
`;
