import styled from "styled-components";

export const SearchResultsContainer = styled.div`
  padding: 1rem;
  background-color: white;
  box-shadow: 0px 0px 16px -3px #ffdaec;
  max-width: 400px;
  max-height: 450px;
  overflow-y: auto;
  padding-right: 0;
`;

export const ResultItemContainer = styled.div`
  cursor: pointer;
  padding-right: 1rem;

  &:hover {
    background-color: #4343434d;
  }
`;

export const LoadingContainer = styled.div`
  padding: 2rem;
  display: grid;
  place-items: center;
`;
