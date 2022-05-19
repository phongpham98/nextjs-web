
import { colors } from "@configs/globalStyles";
import { device } from "@configs/screensSizes";
import { GeneralPaddingMobile } from "@utils/styled-components/GeneralStyled";
import styled from "styled-components";

export const SearchPageContainer = styled.div`
  height: 100%;
  /* margin: 0 auto; */

  @media ${device.tablet768} {
    padding: 0 20px;
  }

  @media ${device.laptop1024} {
    padding: 0 80px;
  }

  @media ${device.laptop1600} {
    padding: 0 10%;
  }

  padding-top: 5% !important;
`;

export const EmptySearchContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const EmptySearchText = styled.div`
  text-transform: uppercase;
  color: ${colors.primary};
  font-weight: 500;
  @media ${device.tablet768} {
    font-size: 1.5rem;
  }
  @media ${device.laptop1440} {
    font-size: 2rem;
  }
  @media ${device.laptop1600} {
    font-size: 2.5rem;
  }
`;

export const SearchResultMobileContainer = styled(GeneralPaddingMobile)`
	margin-top: 2rem;
`;