import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #dce3fc;
  padding: 1.5rem;
  margin: 2rem 0;
  @media ${device.tablet768} {
    padding: 40px 100px;
	text-align: center;
  }
`;

export const SendCVBtn = styled.div`
  background-color: black;
  text-transform: uppercase;
  color: white;
  text-align: center;
  border-radius: 50px;
  font-weight: 500;
  letter-spacing: 0.4px;
  padding: 0.5rem 0;
  margin: 1rem 0;
`;
