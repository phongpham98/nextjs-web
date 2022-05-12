import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const ConnectionIconContainer = styled.div`
  display: inline-flex;
  gap: 10px;
`;

export interface IconContainerProps {
  backgroundColor?: string;
}

export const IconContainer = styled.a<IconContainerProps>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "black"};
  border-radius: 50px;
  cursor: pointer;
  color: white;
  .icon {
    font-size: 18px;
    color: white;
    @media ${device.tablet768} {
      font-size: 0.7rem;
    }

    @media ${device.laptop1024} {
      font-size: 16px;
    }

    @media ${device.laptop1024} {
      font-size: 17px;
    }

    @media ${device.laptop1440} {
      font-size: 18px;
    }

    @media ${device.laptop1600} {
      font-size: 22px;
    }
  }

  @media ${device.tablet768} {
    width: 25px;
    height: 25px;
  }

  @media ${device.laptop1024} {
    width: 30px;
    height: 30px;
  }

  @media ${device.laptop1280} {
    width: 35px;
    height: 35px;
  }

  @media ${device.laptop1440} {
    width: 40px;
    height: 40px;
  }

  @media ${device.laptop1600} {
    width: 50px;
    height: 50px;
  }
`;
