import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const StickyDownloadContainer = styled.div`
  width: 70px;
  text-align: center;
  display: inline-block;
  border: 1px solid #bcbcbc;
  border-radius: 10px;
  overflow: hidden;
  position: sticky;
  position: -webkit-sticky;
  top: 30%;
  z-index: 100;
  background-color: white;
  margin-left: -75px;
  @media ${device.tablet768} {
    width: 44px;
    /* margin-left: 0; */
  }

  @media ${device.laptop1024} {
    width: 65px;
    margin-left: -75px;
  }
`;

export const Caption = styled.div`
  background: -webkit-linear-gradient(#6666ff, #ff7cc6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 2px;
  border-bottom: 1px solid #bcbcbc;
  @media ${device.tablet768} {
    font-size: 0.4rem;
  }
  @media ${device.laptop1024} {
    font-size: 10px;
  }
`;

export const StickDownloadLink = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #bcbcbc;
  cursor: pointer;
  & img {
    width: 35%;
    height: 100%;
    margin-bottom: 2px;
  }
`;

export const DownloadText = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 13px;
  line-height: 17px;
  color: black;
  @media ${device.tablet768} {
    font-size: 0.5rem;
    line-height: 0.6rem;
  }
  @media ${device.laptop1024} {
    font-size: 13px;
    line-height: 17px;
  }
`;
