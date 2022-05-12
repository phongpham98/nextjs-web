import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const CommentContainer = styled.div`
  flex: 1;
  display: inline-block;
  justify-content: center;
  @media ${device.laptop1440} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
