import { colors } from "@configs/globalStyles";
import { device } from "@configs/screensSizes";
import { CommonTitleH2 } from "@utils/styled-components/GeneralTitleStyled";
import styled, { keyframes } from "styled-components";

export const CountDownContainer = styled.div`
  text-align: center;
  padding-top: 2rem;
  @media ${device.tablet768} {
    padding: 80px;
    margin: 0 auto;
  }
`;

export const StayTundText = styled.div`
  color: #c30564;
  letter-spacing: 3px;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 20px;
  @media ${device.tablet768} {
    font-size: 16px;
  }
`;

export const LauchingText = styled(CommonTitleH2)`
  font-size: 2rem;
  @media ${device.tablet768} {
    font-size: 60px;
    line-height: 70px;
  }

  @media ${device.laptop1024} {
    font-size: 60px;
    line-height: 70px;
  }

  @media ${device.laptop1440} {
    font-size: 75px;
    line-height: 80px;
  }

  @media ${device.laptop1600} {
    font-size: 80px;
    line-height: 80px;
  }
`;

export const CountDownDescription = styled.div`
  color: #61666d;
  font-size: 0.8rem;
  @media ${device.laptop1440} {
    font-size: 14px;
  }
  @media ${device.laptop1440} {
    width: 75%;
    margin: 0 auto;
  }
`;

export const NotifyButton = styled.div`
  cursor: pointer;
  padding: 13px 35px;
  border: 2px solid #6666ff;
  border-radius: 50px;
  color: #6666ff;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  gap: 20px;
  font-size: 17px;
  transition: all 0.5s;
`;

export const OrText = styled.div`
  font-style: italic;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: black;
`;
export const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	100% {
		background-position: 100% 50%;
	}
`;

export const DownloadButton = styled.a`
  cursor: pointer;
  padding: 13px 35px;
  border-radius: 50px;
  text-transform: uppercase;
  color: white;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  background-color: red;
  display: inline-flex;
  background-color: ${colors.primary};
  background-size: 200% 200%;
  background-position: left;
  transition: all 0.5s;
  margin-top: 20px;
  &:hover {
    background-position: right;
    transform: scale(1.05);
    color: white;
  }
`;
