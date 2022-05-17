import { colors } from "@configs/globalStyles";
import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const InvestorContainer = styled.div`
  display: flex;
  flex-direction: row;

`;

export const NavBarInvestor = styled.div`
  writing-mode: tb-rl;
  transform: rotate(-180deg);
  height: 100%;
  padding: 2rem 1rem;
  display: flex;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: space-between;
  box-shadow: 6px 0px 9px 9px rgb(47 47 47 / 8%);
  position: sticky;
  top: 0;

  /* @media ${device.laptop1440} {
    padding: 2rem 1rem;
  } */
`;

export const VerticalLogo = styled.img`
  transform: rotate(-180deg);
  width: 30px;
  cursor: pointer;
`;

export const IconMenu = styled.div`
  display: inline-flex;
  padding: 0.7rem;
  align-items: center;
  cursor: pointer;
  transform: rotate(180deg);
  justify-content: center;
  font-size: 0.7rem;
  color: white;
  border: 1px solid #DEDEDE;
  border-radius: 50%;
  @media ${device.laptop1440} {
    font-size: 1rem;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ContactItem = styled.div`
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: white;
  display: flex;
  align-items: center;
  @media ${device.laptop1440} {
    font-size: 0.8rem;
  }
`;
