import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 50px 450px;

  @media ${device.tablet768} {
    padding: 50px 50px;
  }

  @media ${device.laptop1024} {
    padding: 40px 150px;
  }

  @media ${device.laptop1440} {
    padding: 50px 350px;
  }

  @media ${device.laptop1600} {
    padding: 50px 450px;
  }
`;

export const HelpCenterContainer = styled.div`
  text-align: center;
`;

export const ContactIconArea = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.mobileS} {
    padding: 20px 2rem;
    flex-direction: column;
    gap: 1rem;
  }
  @media ${device.tablet768} {
    flex-direction: row;
    padding: 40px 20px;
  }
`;

export const HereLink = styled.div`
  margin-top: 20px;

  text-align: center;
  @media ${device.tablet768} {
    margin-bottom: 40px;
  }
`;
