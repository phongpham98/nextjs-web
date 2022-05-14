import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const ComparisionContainer = styled.div`
  text-align: center;
`;

export const TraitCaption = styled.h3`
  color: ${(props) => props.color};
  font-size: 0.9rem;
  @media ${device.tablet768} {
    font-size: 0.9rem;
  }
  @media ${device.laptop1024} {
    font-size: 1rem;
  }
  
  @media ${device.laptop1280} {
    font-size: 1.2rem;
  }
  @media ${device.laptop1440} {
    font-size: 1.5rem;
  }
`;

export const TagLine = styled.div`
  color: #61666d;
  font-size: 0.8rem;
  @media ${device.tablet768} {
    font-size: 0.8rem;
  }
  @media ${device.laptop1024} {
    font-size: 0.9rem;
  }
  
  @media ${device.laptop1280} {
    font-size: 1rem;
  }
  @media ${device.laptop1440} {
    font-size: 1.2rem;
  }
`;

export const Explaination = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  text-align: center;
  margin-top: 20px;
  gap: 0.5rem;
`;

export const Percentage = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;

export const PercentageLeft = styled(Percentage)`
  align-items: flex-start;
`;

export const PercentageRight = styled(Percentage)`
  align-items: flex-end;
`;

interface PercentageNumberProps {
  color?: string;
}

export const PercentageNumber = styled.div<PercentageNumberProps>`
  color: ${(props) => props.color};
  width: 100%;
  text-align: center;
  font-size: 0.7rem;
  @media ${device.tablet768} {
    font-size: 0.8rem;
  }
  @media ${device.laptop1024} {
    font-size: 0.9rem;
  }
  
  @media ${device.laptop1280} {
    font-size: 1rem;
  }
  @media ${device.laptop1440} {
    font-size: 1.2rem;
  }
`;

export const TraitTitle = styled.h3`
  font-size: 0.75rem;
  @media ${device.tablet768} {
    font-size: 0.8rem;
  }
  @media ${device.laptop1024} {
    font-size: 0.9rem;
  }
  
  @media ${device.laptop1280} {
    font-size: 1rem;
  }
  @media ${device.laptop1440} {
    font-size: 1.2rem;
  }
`;

export const BarContainer = styled.div`
  width: 60%;

  margin-bottom: 5px;
  @media ${device.tablet768} {
    margin-bottom: 5px;
  }
`;
