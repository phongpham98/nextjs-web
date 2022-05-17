import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const FikaMemberContainer = styled.div`
  text-align: center;
`;

export const MemberImage =  styled.div`
	width: 100%;
	padding-top: 100%;
	position: relative;
`;

export const MemberInforContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  /* gap: 5px; */
`;

export const MemberName = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 20px;
  font-family: "Playfair Display";
  cursor: pointer;
  @media ${device.tablet768} {
    font-size: 20px;
  }

  @media ${device.laptop1024} {
    font-size: 25px;
  }

  @media ${device.laptop1440} {
    font-size: 30px;
  }

  @media ${device.laptop1600} {
    font-size: 30px;
  }
`;

export const MemberPosition = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  @media ${device.tablet768} {
    font-size: 11px;
  }

  @media ${device.laptop1024} {
    font-size: 11px;
  }

  @media ${device.laptop1440} {
    font-size: 12px;
  }
`;

export const ContactIconContainer = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
`;
