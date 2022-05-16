import { colors } from "@configs/globalStyles";
import { device } from "@configs/screensSizes";
import styled, { keyframes } from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  text-transform: uppercase;
  font-weight: 500;
  color: #6666ff;
  position: relative;
`;

export const SearchWithIcon = styled.div`
  display: inline-flex;
  border: 1px solid;
  border-radius: 50px;
  /* padding: 0.2rem 0.5rem; */
  flex: 1;
  align-items: center;
  & .ant-select-dropdown {
    min-width: 400px !important;
  }
  & .ant-select-selection-search {
    color: black;
  }
  & .ant-select {
    flex: 1;
  }
  & .ant-select-clear {
    right: 2rem;
  }
  & .ant-input {
    @media ${device.laptop1024} {
      padding: 0;
      font-size: 0.9rem;
      padding-bottom: 0.1rem;
    }
  }
  @media ${device.laptop1024} {
    /* padding: 0.2rem 0.7rem; */
  }
  @media ${device.laptop1440} {
    /* padding: 0.3rem 0.7rem; */
    & .ant-input {
      padding: 0;
      font-size: 1rem;
      padding-bottom: 0.1rem;
    }
  }
`;

export const IconSearch = styled.span`
  font-size: 1.5rem;
  margin-bottom: 0.3rem;
  position: absolute;
  right: 0.5rem;
  display: grid;
  place-items: center;
  height: 100%;
  cursor: pointer;
  @media ${device.laptop1024} {
    font-size: 1rem;
    margin-bottom: 0.1rem;
  }
  @media ${device.laptop1440} {
    font-size: 1.3rem;
    margin-bottom: 0.1rem;
  }
`;

interface StickyContainerProps {
  noSticky?: boolean;
}

export const StickyContainer = styled.div<StickyContainerProps>`
  position: ${(props) => (props.noSticky ? "relative" : "sticky")};
  top: 80px;
`;

export const FikaButtonContainer = styled.div`
  margin-bottom: 5rem;
`;

export const FikaInvertorBtnG = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 50px;
  letter-spacing: 1.5px;
  display: inline-block;
  cursor: pointer;
  @media ${device.tablet768} {
    font-size: 0.5rem;
    padding: 0.5rem 1rem;
    border-width: 0.05rem;
  }
  @media ${device.laptop1024} {
    font-size: 0.7rem;
    padding: 0.5rem 1.2rem;
  }
  @media ${device.laptop1440} {
    font-size: 0.8rem;
    padding: 0.6rem 1.4rem;
  }
`;

export const FikaInvestorBtn = styled(FikaInvertorBtnG)`
  color: ${colors.primary};
  border: 3px solid ${colors.primary};
  -webkit-text-stroke-width: 0.4px;
`;

export const InvestorWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const FikaPressBtn = styled(FikaInvertorBtnG)`
  font-weight: 400;
  color: white;
  border: 3px solid ${colors.primary};
  background-color: ${colors.primary};
  -webkit-text-stroke-width: 0.25px;
`;

export const scale = keyframes`
	0%{
		transform: scale(0.9);
	}
	50%{
		transform: scale(1.1);
	}
	0%{
		transform: scale(0.9);
	}
`;

export const HandLeftIcon = styled.div`
  font-size: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  transform: scale(0.9);
  animation: ${scale} 0.4s linear infinite;
  @media ${device.laptop1024} {
    font-size: 2rem;
  }
  @media ${device.laptop1440} {
    font-size: 2.3rem;
  }
`;

export const BtnDownLoadContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 2rem;
`;

export const TopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-transform: uppercase;
  color: #898a90;
  font-size: 12px;
  cursor: pointer;
  & .topic:hover {
    color: black;
    font-weight: bold;
  }
`;
