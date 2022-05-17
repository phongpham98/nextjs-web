import { device } from "@configs/screensSizes";
import { TitleH3 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const EnquiresContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  @media ${device.tablet768} {
    border-top: 1px solid #898a90;
    width: 70%;
    padding-top: 40px;
  }

  @media ${device.laptop1024} {
    width: 70%;
    padding-top: 40px;
  }

  @media ${device.laptop1440} {
    width: 50%;
    padding-top: 60px;
  }

  @media ${device.laptop1600} {
    width: 50%;
    padding-top: 60px;
  }
`;

export const EnquiresTitle = styled(TitleH3)`
  display: inline-flex;
  margin-bottom: 2rem;
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

export const EnquiresDescription = styled.div`
  font-size: 0.7rem;
  @media ${device.tablet768} {
    font-size: 1rem;
  }
`;

export const EnquireContactContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  @media ${device.tablet768} {
    font-size: 1rem;
	margin-top: 0;
    justify-content: space-between;
    padding: 40px 20px 0;
	flex-direction: row;
  }
`;
