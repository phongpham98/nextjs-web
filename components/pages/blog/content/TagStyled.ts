import styled from "styled-components";

export const TagContainer = styled.div``;

export const TagTitleH3 = styled.h3`
  font-family: "Playfair Display", serif;
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const TagContent = styled.div`
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
`;

export const LoadingTag = styled.div`
  padding: 5px 15px;
  color: #f2f3f5;
  cursor: pointer;
  background-color: #f2f3f5;
  border-radius: 20px;
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 11px;
  transition: all 0.3s;
`;

export const TagItem = styled.div`
  padding: 5px 15px;
  color: black;
  cursor: pointer;
  background-color: #f2f3f5;
  border-radius: 20px;
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 11px;
  transition: all 0.3s;
  &:hover {
    color: #6666ff;
    background-color: white;
    box-shadow: 0px 6px 13px 0px rgb(145 145 145 / 30%);
  }
`;
