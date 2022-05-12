import styled from "styled-components";

export const NavMobileContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  position: sticky;
  top: -1px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: ${(props) => props.color};
  z-index: 60;
  padding-left: 1rem;
  &.mb {
    margin-bottom: 1rem;
  }
`;

export const MenuIcon = styled.div`
  font-size: 2rem;
  display: inline-flex;
  color: ${(props) => props.color};
  transition: all 0.1s ease-in-out;
`;

export const InputContainer = styled.div`
  flex: 1;
  & .ant-input {
    border-bottom: 1px solid #babac0;
    font-size: 0.8rem;
    border-radius: 0;
    text-align: end;
    color: white;
    margin-bottom: 5px;
    margin-left: 5px;
    &:focus {
      border-bottom: 1px solid #6666ff;
    }
  }
  & .ant-select {
    width: 100%;
    border-bottom: 1px solid #babac0;
	margin-bottom: 0.3rem;
    &:focus {
      border-bottom: 1px solid #6666ff;
    }
  }
`;

export const SearchIcon = styled.div`
  font-size: 1.3rem;
  margin-right: 1rem;
`;

export const ContentNav = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const TagMobileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  margin-right: 2.5rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TagCaption = styled.div`
  color: black;
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  display: inline;
  line-height: 0.7rem;
  font-size: 1.2rem;
  margin-right: 0.3rem;
`;
