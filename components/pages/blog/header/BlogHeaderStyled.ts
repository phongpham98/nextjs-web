import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const BlogSingleContainer = styled.div`
  height: 100%;
  margin: 0 auto;

  @media ${device.tablet768} {
    padding: 0 20px;
  }

  @media ${device.laptop1024} {
    padding: 0 80px;
  }

  @media ${device.laptop1440} {
    padding: 0 80px;
  }

  @media ${device.laptop1600} {
    padding: 0 10%;
  }

  @media ${device.desktop} {
    padding: 0 10%;
  }
`;

export const BlogHeaderContainer = styled.div`
  background-color: #f9f9f9;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const BlogTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 30px 0;
  height: 100%;
  @media ${device.tablet768} {
    padding: 30px 0;
    padding-right: 30px;
  }

  @media ${device.laptop1024} {
    padding: 40px 0;
    padding-right: 4rem;
  }

  @media ${device.laptop1280} {
    padding: 60px 0;
    padding-right: 6rem;
  }

  @media ${device.laptop1440} {
    padding: 60px 0;
    padding-right: 8rem;
  }

  @media ${device.laptop1600} {
    padding: 60px 0;
    padding-right: 8rem;
  }
`;

export const Text = styled.h1`
  display: inline-flex;
  margin: 0;
  font-weight: 500;
  font-size: 60px;
  font-family: "Playfair Display";
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: normal;

  @media ${device.tablet768} {
    font-size: 2.5rem;
    line-height: 3rem;
  }

  @media ${device.laptop1024} {
    font-size: 3.5rem;
    line-height: 3.8rem;
  }

  @media ${device.laptop1280} {
    font-size: 4.5rem;
    line-height: 5.5rem;
  }

  @media ${device.laptop1440} {
    font-size: 5rem;
    line-height: 6.5rem;
  }

  @media ${device.laptop1600} {
    font-size: 70px;
  }
`;

export const BlogText = styled(Text)`
  margin-right: 20px;
  @media ${device.tablet768} {
  }

  @media ${device.laptop1024} {
    margin-right: 2.3rem;
  }

  @media ${device.laptop1440} {
    margin-right: 3rem;
  }

  @media ${device.laptop1600} {
  }

  @media ${device.desktop} {
  }
`;

export const SubTitleP = styled.p`
  color: #61666d;
  font-size: 11px;
  margin-top: 30px;
  width: 50%;
  text-align: right;
  @media ${device.tablet768} {
    width: 90%;
    font-size: 0.7rem;
    margin-top: 10px;
  }

  @media ${device.laptop1024} {
    width: 80%;
    font-size: 0.75rem;
    margin-top: 20px;
  }

  @media ${device.laptop1280} {
    width: 70%;
    font-size: 0.8rem;
    margin-top: 20px;
  }

  @media ${device.laptop1440} {
    width: 60%;
    font-size: 0.8rem;
    margin-top: 30px;
  }

  @media ${device.laptop1600} {
    width: 60%;
    font-size: 0.8rem;
    margin-top: 30px;
  }
`;

export const Image = styled.img`
  width: 40%;
  box-shadow: 20px -20px 0px 0px #babac0;
  @media ${device.tablet768} {
    width: 50%;
  }
  @media ${device.laptop1024} {
    width: 55%;
  }
  @media ${device.laptop1280} {
    width: 50%;
  }
  @media ${device.laptop1440} {
    width: 50%;
  }
  @media ${device.laptop1600} {
    width: 50%;
  }
`;

export const BlogImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
