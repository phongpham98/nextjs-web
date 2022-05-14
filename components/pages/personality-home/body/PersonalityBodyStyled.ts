import { colors } from "@configs/globalStyles";
import { device } from "@configs/screensSizes";
import { TitleH1, TitleH2 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const PersonalityBodyContainer = styled.div`
  position: relative;
  padding: 100px 0;
`;

export const QuestionTitle = styled(TitleH1)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: ${colors.primary};
  font-weight: bold;
  @media ${device.tablet768} {
    font-size: 30px;
  }

  @media ${device.laptop1024} {
    font-size: 30px;
  }

  @media ${device.laptop1440} {
    font-size: 30px;
  }

  @media ${device.laptop1600} {
    font-size: 2.4rem;
  }
`;

export const CriteriaContainer = styled.div`
  text-align: center;
`;

export const QuestionSubTitle = styled.p`
  margin-bottom: 0;
  color: #61666d;
  padding: 20px 0;
  font-size: 0.8rem;
  @media ${device.tablet768} {
    font-size: 0.8rem;
  }

  @media ${device.laptop1024} {
    font-size: 0.9rem;
  }

  @media ${device.laptop1440} {
    font-size: 1.2rem;
  }

  @media ${device.laptop1600} {
    font-size: 1.2rem;
  }
`;

export const CriteriaTitle = styled.h2`
  font-weight: 700;
  font-size: 0.8rem;
  color: ${colors.primary};
  margin-bottom: 20px;
  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tablet768} {
    font-size: 26px;
  }

  @media ${device.laptop1024} {
    font-size: 1.8rem;
  }

  @media ${device.laptop1440} {
    font-size: 30px;
  }

  @media ${device.laptop1600} {
    font-size: 2.1rem;
  }
`;

export const CriteriaItemContainer = styled.div`
  padding: 40px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const CriteriaItemTitle = styled.h6`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.4rem;
  @media ${device.tablet768} {
    font-size: 25px;
    line-height: 30px;
  }
  color: #6666ff;
`;

export const CriterialItemSubTile = styled.p`
  color: black;
  font-size: 0.8rem;
  font-weight: 600;
  @media ${device.tablet768} {
    font-size: 1rem;
  }
`;

export const DoTestBtnContainer = styled.div`
  margin-top: 1rem;
  @media ${device.tablet768} {
    margin-top: 60px;
  }
`;

export const TheDefferentText = styled.h2`
  color: black;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9rem;
  text-align: center;
  @media ${device.tablet768} {
    font-size: 25px;
    font-weight: 500;
  }
`;
