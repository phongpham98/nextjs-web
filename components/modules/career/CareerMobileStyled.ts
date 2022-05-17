import styled from "styled-components";
import mobileBanner from "@public/career.jpg";
import { device } from "@configs/screensSizes";

export const CareerHeaderContent = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url(${mobileBanner.src});
  position: absolute;
  background-size: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem 1.5rem;
  gap: 0.5rem;
  @media ${device.mobileL} {
    padding: 3rem 1.5rem;
  }
`;

export const HeaderTitleH1 = styled.h1`
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  color: white;
  font-size: 2.5rem;
  line-height: 3rem;
  @media ${device.mobileM} {
    font-size: 3rem;
  }
  @media ${device.mobileL} {
    font-size: 3.2rem;
    line-height: 3.5rem;
  }
`;

export const SubTitle = styled.div`
  color: white;
  font-size: 0.7rem;
  @media ${device.mobileM} {
    font-size: 0.85rem;
  }
  @media ${device.mobileL} {
    font-size: 0.9rem;
  }
`;

export const SeeJobButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const SeeBtn = styled.div`
  background: linear-gradient(106.4deg, #676bfa 12.39%, #878aff 92.36%);
  border-radius: 50px;
  padding: 0.3rem 2.5rem;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.8rem;
`;

export const ProfesstionalDevContainer = styled.div`
  position: relative;
  padding-top: 45.45%;
  width: 100%;
`;
