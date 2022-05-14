import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const SliderBarContainer = styled.div``;

export const SliderInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  border-radius: 20px;
  background: linear-gradient(273.69deg, #7878ff 4.08%, #ff91cf 100%);
  outline: none;
  height: 20px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid #6666ff;
    width: 28px;
    height: 28px;
    border-radius: 50px;
    background: white;
    outline : none;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 28px;
    height: 28px;
    border-radius: 50px;
    border: 1px solid #6666ff;
    background: white;
    outline: none;
    cursor: pointer;
  }
  @media ${device.tablet768} {
    height: 25px;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      border: 1px solid #6666ff;
      width: 33px;
      height: 33px;
      border-radius: 50px;
      background: white;
      outline-color: #ffdfdf;
      outline-style: double;
      outline-width: 1px;
      outline-offset: 8px;
      cursor: pointer;
    }
    &::-moz-range-thumb {
      width: 33px;
      height: 33px;
      border-radius: 50px;
      border: 1px solid #6666ff;
      background: white;
      outline-color: #ffdfdf;
      outline-style: double;
      outline-width: 1px;
      outline-offset: 8px;
      border-radius: 50px;
      cursor: pointer;
    }
  }
`;
