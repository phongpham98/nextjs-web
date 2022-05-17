import { device } from "@configs/screensSizes";
import { TitleH3 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const CareerPositionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #61666d;
  gap: 0.5rem;
  border-bottom: 1px solid #dedede;
  align-items: center;
  @media ${device.mobileS} {
    padding: 10px 0 10px 0;
  }
  @media ${device.tablet768} {
    padding: 20px 0 10px 0;
  }
`;

export const Name = styled(TitleH3)`
  color: #c30564;

  @media ${device.mobileS} {
    font-size: 1rem;
    -webkit-text-stroke-width: 0.3px;
    margin-bottom: 0.5rem;
  }
  @media ${device.tablet768} {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

export const AddressDate = styled.div`
  font-weight: 500;

  @media ${device.mobileS} {
    font-size: 0.7rem;
  }
  @media ${device.tablet768} {
    font-size: 15px;
  }

  text-transform: uppercase;
`;

export const DownloadContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const FileSize = styled.div`
  font-weight: 500;
  line-height: 30px;
`;

export const DownloadJdBtn = styled.a`
  background: linear-gradient(106.4deg, #676bfa 12.39%, #878aff 92.36%);
  color: white;
  text-transform: uppercase;
  font-size: 0.5rem;
  padding: 0.4rem 1rem;
  white-space: nowrap;
  border-radius: 50px;
  font-weight: 500;
  letter-spacing: 0.5px;
  &:hover {
    color: white;
  }
  @media ${device.tablet768} {
    font-size: 0.9rem;
    padding: 0.5rem 1.2rem;
    cursor: pointer;
  }
`;
