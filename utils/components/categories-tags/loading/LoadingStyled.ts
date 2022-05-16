import styled from "styled-components";
import { ILoadingTitleProps } from "./LoadingTitle";

const GeneralLoadingWrapper = styled.div<ILoadingTitleProps>`
  background-color: #f2f3f5;
  padding: 0 1rem;
  border-radius: 1rem;
  color: #f2f3f5;
  width: ${(props) => (props ? props.width + "%" : "100%")};
`;

export const LoadingTitleContainer = styled(GeneralLoadingWrapper)`
  text-transform: capitalize;
  font-size: 2rem;
  margin-bottom: 1rem;
  line-height: 2.5rem;
`;

export const LoadingMotoContainer = styled(GeneralLoadingWrapper)`
  font-style: italic;
  margin-top: 2%;
  font-size: 0.9rem;
`;

export const LoadingContentContainer = styled(GeneralLoadingWrapper)`
  font-style: italic;
  margin-top: 2%;
  font-size: 0.9rem;
`;

export const LoadingContentWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LoadingStoriesContainer = styled.div``;

export const FakeImage = styled.image`
  width: 100%;
  & .fake-image {
    width: 100%;
    background-color: #f2f3f5;
    padding-top: 100%;
  }
`;

export const BlogLoadingContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 50%;
  margin-bottom: 0.5rem;
  background-color: #f2f3f5;
`;
