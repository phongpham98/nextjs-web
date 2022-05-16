import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 81.81%;
  position: relative;
`;

export const FeedImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;
