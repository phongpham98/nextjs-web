import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const TypeDetailContainer = styled.div`
  padding: 2rem 0;
  @media ${device.tablet768} {
    padding: 40px 100px 4rem;
  }
  @media ${device.laptop1280} {
    padding: 4rem 16rem 4rem;
  }
  @media ${device.laptop1600} {
    padding: 4rem 20rem 4rem;
  }
`;

export const TraitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const TraitName = styled.h3`
  color: ${(props) => props.color};
  font-size: 0.7rem;
  white-space: nowrap;
  font-weight: 500;
  @media ${device.tablet768} {
    font-size: 14px;
    font-weight: bold;
  }
  @media ${device.laptop1280} {
    font-size: 1.3rem;
  }
  margin-top: 5px;
`;

export const TraitType = styled.h4`
  color: #61666d;
  white-space: nowrap;
  font-size: 0.7rem;
  @media ${device.tablet768} {
    font-size: 0.9rem;
  }
  @media ${device.laptop1280} {
    font-size: 1.1rem;
  }
`;

export const TraitExplaination = styled.div`
  /* margin-top: 40px; */
`;
