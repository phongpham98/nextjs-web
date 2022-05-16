import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const BlogContentContainer = styled.div`
  margin-top: 20px;
`;

export const SingleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet768} {
    gap: 20px;
    margin-top: 20px;
  }

  @media ${device.laptop1440} {
    gap: 40px;
    margin-top: 40px;
  }
`;

export const BlogContentHeader = styled.div`
  margin-bottom: 2rem;
`;

export const BigImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 50%;
  margin-bottom: 0.5rem;
`;

export const BigImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: top;
`;
