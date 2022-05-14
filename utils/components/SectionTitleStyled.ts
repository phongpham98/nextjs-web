import { device } from "@configs/screensSizes";
import { TitleH2 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

interface TitleProps {
  border?: boolean;
  marginBottom?: string;
}

export const SectionTitleContainer = styled.div<TitleProps>`
  display: ${(props) => (props.border ? "inline-flex" : "flex")};
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 20px;
  margin-bottom: ${(props) => props.marginBottom}px;
  padding: ${(props) => (props.border ? "20px 40px" : "0")};
  border: ${(props) => (props.border ? "1px dashed" : "none")};
  border-radius: 100%;
  @media ${device.mobileS} {
    gap: 0.6rem;
    padding: ${(props) => (props.border ? "0.5rem 1rem" : "0")};
  }
  @media ${device.tablet768} {
    gap: 20px;
  }
`;

export const TitleText = styled(TitleH2)`
  color: black;
  display: inline-flex;
  white-space: pre-wrap;
  @media ${device.mobileS} {
    font-size: 1.3rem;
    text-align: center;
  }

  @media ${device.tablet768} {
    font-size: 30px;
  }

  @media ${device.laptop1024} {
    font-size: 30px;
  }

  @media ${device.laptop1440} {
    font-size: 33px;
  }

  @media ${device.laptop1600} {
    font-size: 36px;
  }
`;
