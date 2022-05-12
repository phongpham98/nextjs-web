import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 5px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  border-radius: 50px;
  background-color: #6c6c6c;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  color: white;
  @media ${device.laptop1024} {
    font-size: 0.8rem;
  }
`;

export const HrLineSpan = styled.div`
  height: 12px;
  width: 1px;
  background-color: #898a90;
`;

export const ShareIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: black;
  background-color: white;
  @media ${device.mobileS} {
    gap: 0.5rem;
  }
  @media ${device.tablet768} {
    font-size: 13px;
  }

  @media ${device.laptop1024} {
    font-size: 0.9rem;
    gap: 7px;
  }

  @media ${device.laptop1280} {
    font-size: 1rem;
    gap: 10px;
  }

  @media ${device.laptop1440} {
    font-size: 1.1rem;
    gap: 10px;
  }

  @media ${device.laptop1600} {
	font-size: 1.1rem;
    gap: 10px;
  }

  @media ${device.desktop} {
    gap: 10px;
  } ;
`;