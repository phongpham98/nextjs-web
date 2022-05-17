import { colors } from "@configs/globalStyles";
import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 30px 10%;
  margin-top: 2rem;
  background-color: ${colors.primary};
  color: white;
  max-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.tablet768} {
    padding: 30px 5%;
  }
  @media ${device.laptop1024} {
    padding: 30px 10%;
  }
`;

export const FooterContent = styled.div`
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
  gap: 3%;
  border-bottom: 1px solid #a19c9c;
`;

export const FooterAddress = styled.div`
  padding-top: 10px;
  flex: 1;
`;

export const ImageLogo = styled.div`
  margin-bottom: 20px;
  display: inline-flex;
  font-size: 11rem;
  cursor: pointer;
`;

export const FooterAddressDetail = styled.div`
  font-size: 14px;
`;

export const PhoneUs = styled.div`
  margin: 20px 0;
  & span {
    font-weight: 500;
  }
`;

export const CheckLocation = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  color: white;
  &:hover {
    color: white;
  }
`;

export const VrLine = styled.div`
  width: 1px;
  background-color: #898a90;
`;

export const LatestNew = styled.div`
  padding-top: 50px;
  flex: 1;
`;

export const PressTitle = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  color: white;
  letter-spacing: 0.3px;
  font-size: 15px;
  cursor: pointer;
`;

export const PressContent = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  gap: 20px;
`;

export const PressDetail = styled.a`
  font-size: 13px;
  color: white;
  &:hover {
    color: white;
  }
  cursor: pointer;
  & span {
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export const DownloadImage = styled.div`
  display: flex;
  gap: 1rem;
  @media ${device.tablet768} {
    flex-direction: column;
  }
  @media ${device.laptop1024} {
    flex-direction: row;
    gap: 2%;
  }
`;

export const FooterConnection = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ConnectionText = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.3px;
  font-size: 15px;
`;

export const CopyRight = styled.div`
  font-size: 12px;
  color: #fff;
  text-align: center;
  margin-top: 20px;
`;
