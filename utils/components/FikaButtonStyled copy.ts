import { colors } from "@configs/globalStyles";
import { device } from "@configs/screensSizes";
import styled from "styled-components";

interface FikaButtonContainerProps {
  backgroundColor?: string;
}

export const FikaButtonContainer = styled.div<FikaButtonContainerProps>`
  display: inline-block;
  background-color: ${colors.primary};
  /* background-image: ${(props) =>
    props.backgroundColor
      ? "linear-gradient(90deg, #000, #000)"
      : "linear-gradient(90deg, #676bfa, #878aff)"}; */
  text-transform: uppercase;
  color: white;
  border-radius: 50px;
  font-weight: 500;
  letter-spacing: 0.4px;
  font-size: 0.7rem;
  cursor: pointer;
  padding: 0.4rem 1rem;
  &:hover {
    color: white;
  }
  @media ${device.tablet768} {
    font-size: 12px;
    padding: 10px 20px;
  }
`;

export const FikaButtonMobileContainer = styled.div`
  display: inline-block;
  padding: 0.5rem 2rem;
  background-color: ${colors.primary};
  text-transform: uppercase;
  color: white;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.4px;
  cursor: pointer;
`;
