import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const ShareContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media ${device.mobileS} {
    font-size: 0.8rem;
    font-style: italic;
  }
  @media ${device.tablet768} {
    font-size: 0.8rem;
  }

  @media ${device.laptop1024} {
    /* font-size: 11px; */
  }

  @media ${device.laptop1440} {
    font-size: 1rem;
  }

  @media ${device.laptop1600} {
    /* font-size: 13px; */
  } ;
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

export const HrLineSpan = styled.div`
  height: 12px;
  width: 1px;
  background-color: #898a90;
`;

export const ShareComment = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 3px;
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
