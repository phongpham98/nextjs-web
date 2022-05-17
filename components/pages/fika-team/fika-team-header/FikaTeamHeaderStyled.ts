import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 40px 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 4rem;
  @media ${device.tablet768} {
    padding: 20px 60px;
  }

  @media ${device.laptop1024} {
    padding: 20px 80px;
  }

  @media ${device.laptop1440} {
    padding: 30px 100px;
  }

  @media ${device.laptop1600} {
    padding: 40px 120px;
  }
`;

export const Title = styled.div`
  font-family: 'Playfair Display', serif;
  text-transform: uppercase;
  @media ${device.tablet768} {
    font-size: 35px;
    margin-top: 0;
  }

  @media ${device.laptop1024} {
    font-size: 35px;
  }

  @media ${device.laptop1440} {
    font-size: 50px;
  }

  @media ${device.laptop1600} {
    font-size: 50px;
  }
`;

export const SubTitle = styled.div`
  width: 50%;
  text-align: center;
  @media ${device.tablet768} {
    font-size: 12px;
    width: 70%;
  }

  @media ${device.laptop1024} {
    font-size: 13px;
    width: 70%;
  }

  @media ${device.laptop1440} {
    font-size: 14px;
    width: 50%;
  }

  @media ${device.laptop1600} {
    font-size: 15px;
    width: 50%;
  }
`;

export const CharacterContainer = styled.div`
  display: flex;
  justify-content: center;
  @media ${device.mobileS} {
    flex-direction: column;
    gap: 30px;
    padding: 1rem 2rem;
  }
  @media ${device.tablet768} {
    align-items: center;
    flex-direction: row;
    gap: 30px;
	padding: 0;
  }
`;

export const CharacterItem = styled.div`
  padding: 30px 50px;
  border: 1px solid #5b5b5b;
  border-radius: 100%;
  text-align: center;
  @media ${device.mobileS} {
    padding: 1rem 1rem;
  }
  @media ${device.tablet768} {
    padding: 20px 20px;
  }

  @media ${device.laptop1024} {
    padding: 20px 30px;
  }

  @media ${device.laptop1440} {
    padding: 30px 50px;
  }

  @media ${device.laptop1600} {
    padding: 30px 50px;
  }
`;

export const CharacterTitle = styled.div`
  text-transform: uppercase;
  font-weight: 400;
  @media ${device.mobileS} {
    font-size: 1rem;
  }

  @media ${device.tablet768} {
    font-size: 16px;
  }

  @media ${device.laptop1024} {
    font-size: 18px;
  }

  @media ${device.laptop1440} {
    font-size: 22px;
  }

  @media ${device.laptop1600} {
    font-size: 22px;
  }
`;

export const CharacterPercent = styled.div`
  font-weight: bold;
  font-size: 22px;
  font-family: 'Playfair Display', serif;
`;
