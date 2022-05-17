import { device } from "@configs/screensSizes";
import { TitleH2 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const MagazineContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MagImage = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
`;

export const MagazineColumnContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0;
  @media ${device.tablet768} {
    justify-content: space-between;
  }

  @media ${device.laptop1024} {
  }

  @media ${device.laptop1440} {
    gap: 15px;
    justify-content: center;
  }

  @media ${device.laptop1600} {
    gap: 15px;
  }
`;

export const MagColumnBrand = styled(TitleH2)`
  color: black;
  font-size: 1rem;
  @media ${device.tablet768} {
    font-size: 15px;
  }

  @media ${device.laptop1024} {
    font-size: 15px;
  }

  @media ${device.laptop1440} {
    font-size: 20px;
  }

  @media ${device.laptop1600} {
    font-size: 20px;
  }
`;

export const MagColumnTilte = styled.a`
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  color: black;
  &:hover {
    color: black;
  }
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.7rem;
  @media ${device.tablet768} {
    font-size: 12px;
  }

  @media ${device.laptop1024} {
    font-size: 12px;
  }

  @media ${device.laptop1440} {
    font-size: 14px;
  }

  @media ${device.laptop1600} {
    font-size: 14px;
  }
`;

export const MagColumnDate = styled.div`
  color: #898a90;
  text-transform: uppercase;
  font-size: 0.7rem;
  @media ${device.tablet768} {
    font-size: 13px;
  }
`;
