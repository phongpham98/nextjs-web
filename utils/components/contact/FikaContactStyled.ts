import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const FikaContactContainer = styled.div`
  border: 2px solid #babac0;
  padding: 40px;
  @media ${device.tablet768} {
    padding: 15px;
  }

  @media ${device.laptop1024} {
    padding: 30px;
  }

  @media ${device.laptop1440} {
    padding: 30px;
  }

  @media ${device.laptop1600} {
    padding: 40px;
  }
`;

export const ContactDetailContainer = styled.div`
  padding: 80px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  @media ${device.tablet768} {
    padding: 0px 20px;
  }

  @media ${device.laptop1024} {
    padding: 0px 40px;
  }

  @media ${device.laptop1440} {
    padding: 40px 100px;
  }

  @media ${device.laptop1600} {
    padding: 40px 100px;
  }
`;

export const ContactTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const Title = styled.div`
  font-family: "Playfair Display";
  text-transform: uppercase;
  font-weight: 500;

  @media ${device.mobileS} {
    font-size: 1.7rem;
    line-height: 2.2rem;
    padding-right: 2rem;
    position: relative;
    & span {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 2rem;
    }
  }
  @media ${device.tablet768} {
    font-size: 23px;
    line-height: 27px;
    padding-right: 0;
  }

  @media ${device.laptop1024} {
    font-size: 25px;
  }

  @media ${device.laptop1440} {
    font-size: 35px;
    line-height: 45px;
  }

  @media ${device.laptop1600} {
    font-size: 45px;
    line-height: 60px;
  }
`;

export const ContactSubTitle = styled.div`
  @media ${device.tablet768} {
    font-size: 10px;
  }

  @media ${device.laptop1024} {
    font-size: 12px;
  }

  @media ${device.laptop1440} {
    font-size: 13px;
  }

  @media ${device.laptop1600} {
    font-size: 14px;
  }
`;

export const ContactInforContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

export const IconContainer = styled.div`
  border-radius: 50px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media ${device.mobileS} {
    padding: 0.7rem;
    margin-top: 0.5rem;
  }
  @media ${device.tablet768} {
    font-size: 0.8rem;
    padding: 0.5rem;
  }

  @media ${device.laptop1024} {
    font-size: 0.9rem;
    padding: 0.7rem;
  }
  @media ${device.laptop1440} {
    font-size: 1.4rem;
    padding: 0.8rem;
  }

  @media ${device.laptop1600} {
    font-size: 1.6rem;
    padding: 0.6rem;
  }
`;

export const ContactArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  /* padding-top: 5px; */
`;

export const ContactInfor = styled.div``;

export const ActionTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 10px;
  cursor: pointer;
  @media ${device.tablet768} {
    margin-bottom: 0px;
  }

  @media ${device.laptop1440} {
    margin-bottom: 5px;
  }
`;

export const ContactInforDetail = styled.div`
  color: #61666d;
  font-size: 13px;
  width: 100%;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  & a {
    color:  #61666d;
  }
  @media ${device.tablet768} {
    font-size: 10px;
  }

  @media ${device.laptop1440} {
    font-size: 13px;
  }
`;
