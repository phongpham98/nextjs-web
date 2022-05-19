import { device } from '@configs/screensSizes';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import React from "react";
import styled from "styled-components";

const ImageHeader = styled.img`
  width: 100%;
`;

const DivWrapper = styled.div`
  position: relative;
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0000008f;
  top: 0;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 80px;
  @media ${device.tablet768} {
    padding-bottom: 3rem;
  }

  @media ${device.laptop1024} {
    padding-bottom: 4rem;
  }

  @media ${device.laptop1280} {
    padding-bottom: 6rem;
  }

  @media ${device.laptop1440} {
    padding-bottom: 6rem;
  }

  @media ${device.laptop1600} {
    padding-bottom: 10rem;
  }
`;

const StoryTitleH1 = styled.h1`
  text-transform: uppercase;
  color: white;
  font-family: Bludhaven;
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 20px;
  @media ${device.tablet768} {
    font-size: 35px;
    margin-bottom: 15px;
  }

  @media ${device.laptop1024} {
    font-size: 45px;
  }

  @media ${device.laptop1280} {
    font-size: 50px;
  }

  @media ${device.laptop1440} {
    font-size: 55px;
	margin-bottom: 20px;
  }

  @media ${device.laptop1600} {
    font-size: 60px;
  }
`;

const SubTitle = styled.div`
  width: 50%;
  color: white;
  @media ${device.tablet768} {
    width: 90%;
    font-size: 0.7rem;
  }

  @media ${device.laptop1024} {
    width: 75%;
    font-size: 0.8rem;
  }

  @media ${device.laptop1280} {
    width: 75%;
    font-size: 0.85rem;
  }

  @media ${device.laptop1440} {
    width: 60%;
    font-size: 0.9rem;
  }

  @media ${device.laptop1600} {
    font-size: 1.2rem;
  }

  @media ${device.desktop} {
  }
`;

const ConnectedStoryHeader = () => {

	const { t } = useTranslation(['title', 'story']);

	return (
		<DivWrapper>
			<ImageHeader src={'/love.jpg'} alt="couple" />
			<TextWrapper>
				<StoryTitleH1>{t('connected_story')}</StoryTitleH1>
				<SubTitle>
					{parse(t('header_description', {ns: 'story'}))}
				</SubTitle>
			</TextWrapper>
		</DivWrapper>
	);
};

export default ConnectedStoryHeader;
