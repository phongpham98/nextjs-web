import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 20px 40px 50px 40px;
  border: 3px dashed #6666ff;
  background-color: #FFDEE2;
  text-align: center;
`;

export const TextDivCenter = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
`;

export const TermDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const UploadImagesContainer = styled.div`
  text-align: left;
`;

export const FileNameContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-bottom: 1rem;
`;

export const UploadCaption = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
  color: #61666d;
  letter-spacing: 0.5px;
  display: flex;
  gap: 1rem;
  align-items: center;
  font-weight: 500;
  margin-bottom: 1.5rem;
  @media ${device.mobileS} {
    font-size: 0.7rem;
  }
`;

export const UploadIcon = styled.div`
  display: inline-flex;
  padding: 0.5rem;
  border: 1px solid #bcbcbc;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  background-color: white;
  & .ant-upload.ant-upload-drag {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  & input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
	cursor: pointer;
  }
`;

export const UploadImage = styled.img`
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
`;

export const DeleteIcon = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  display: grid;
  border-radius: 50%;
  place-items: center;
  cursor: pointer;
  top: -1rem;
  right: -1rem;
  background-color: white;
  border: 1px solid #bcbcbc;
`;

export const DeleteFileIcon = styled.div`
  position: absolute;
  padding: 0.4rem;
  font-size: 0.5rem;
  display: grid;
  border-radius: 50px;
  place-items: center;
  cursor: pointer;
  top: -15px;
  right: -20px;
  background-color: white;
  border: 1px solid #bcbcbc;
`;
