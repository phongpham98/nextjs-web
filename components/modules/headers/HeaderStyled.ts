import { device } from "@configs/screensSizes";
import Image from "next/image";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  position: relative;
`;

export const HeaderImage = styled.img`
  /* margin-bottom: 10px; */
  display: block;
  width: 100%;
  height: auto;
`;

export const DownloadHomeContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  z-index: 1;
  top: 0;
  @media ${device.tablet768} {
    padding: 30px 80px;
    gap: 10px;
  }

  @media ${device.laptop1024} {
    padding: 3rem 8rem;
    gap: 10px;
  }

  @media ${device.laptop1280} {
    padding: 4rem 10rem;
    gap: 15px;
  }

  @media ${device.laptop1440} {
    padding: 66px 190px;
    gap: 15px;
  }

  @media ${device.laptop1600} {
    padding: 70px 250px;
    gap: 20px;
  }
  @media ${device.laptop1920} {
    padding: 70px 300px;
    gap: 20px;
  }
`;

export const Title = styled.div`
  color: white;
  font-weight: bold;
  text-align: right;
  @media ${device.tablet768} {
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 500;
  }

  @media ${device.laptop1024} {
    font-size: 1.1rem;
    line-height: 1.5rem;
    font-weight: bold;
  }

  @media ${device.laptop1280} {
    font-size: 1.35rem;
    line-height: 1.7rem;
    font-weight: bold;
  }

  @media ${device.laptop1440} {
    font-size: 25px;
    line-height: 35px;
  }

  @media ${device.laptop1600} {
    font-size: 1.7rem;
    line-height: 2rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  @media ${device.tablet768} {
    width: 10rem;
  }

  @media ${device.laptop1024} {
    width: 12rem;
    font-size: 23rem;
    margin-right: -1rem;
  }

  @media ${device.laptop1280} {
    width: 14rem;
    font-size: 25rem;
    margin-right: -1.5rem;
  }

  @media ${device.laptop1440} {
    margin-right: -0.7rem;
    font-size: 26rem;
    width: 16.5rem;
  }

  @media ${device.laptop1600} {
    width: 18rem;
	margin-right: -1.4rem;
    font-size: 35rem;
  }
`;

export const DownloadArea = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const QRCodeContainer = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 12px -1px black;
  @media ${device.tablet768} {
    width: 60px;
  }

  @media ${device.laptop1024} {
    width: 70px;
  }

  @media ${device.laptop1280} {
    width: 80px;
  }

  @media ${device.laptop1440} {
    width: 95px;
  }

  @media ${device.laptop1600} {
    width: 110px;
  }
`;

export const QrCodeImage = styled(Image)`
  width: 100%;
  height: 100%
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  cursor: pointer;
`;

export const AppImage = styled.div`
  @media ${device.tablet768} {
    width: 90px;
  }

  @media ${device.laptop1024} {
    width: 100px;
  }

  @media ${device.laptop1280} {
    width: 130px;
  }

  @media ${device.laptop1440} {
    width: 150px;
  }

  @media ${device.laptop1600} {
    width: 160px;
  }
  & img{
	  width: 100%;
	  height: 100%;
  }
`;
