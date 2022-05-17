import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 1rem;
  border: 3px dashed #6666ff;
  background-color: #f5f0ff;
  text-align: center;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Title = styled.div`
  text-transform: uppercase;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  white-space: nowrap;
  font-size: 1rem;
`;

export const TermDiv = styled.div`
  & span {
    font-size: 0.7rem;
  }
  & .ant-checkbox-wrapper {
    display: flex;
    align-items: flex-start;
  }
  text-align: left;
`;

export const SendStoryBtn = styled.div`
  background-image: linear-gradient(90deg, #676bfa, #878aff);
  text-transform: uppercase;
  color: white;
  text-align: center;
  border-radius: 50px;
  font-weight: 500;
  letter-spacing: 0.4px;
  padding: 0.5rem 0;
  margin: 1rem 0;
`;
