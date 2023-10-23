import styled from "styled-components";
import {Button} from "../UI/index.js";

import picture1 from "../../../public/img/carousel1.jpeg";
import {Intel, Fedex, Visa, Disney, VideoCamera} from "../../assets/index.js";

const HeroWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  padding: 96px 16px;
  gap: 20px;

  @media (max-width: 1024px) {
    padding: 32px 16px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 32px 16px;
    gap: 16px;
  }
`;

const LeftContainer = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 640px) {
    gap: 16px;
    max-width: 100%;
  }
`;

const BrandLogosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  
  @media (max-width: 640px) {
    height: 32px;
  }
`;
const Buttons = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
  }
`;
const Sponsors = styled.div`
  border-top: 1px solid #374151;

  p {
    color: #6b7280;
    padding: 32px 0 12px 0;

    @media (max-width: 640px) {
      display: none;
    }
  }

  @media (max-width: 640px) {
    border-top: none;
  }
`;

const TitleDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    color: #fff;
    font-size: clamp(20px, 3vw, 48px);
    font-weight: 800;

    @media (max-width: 640px) {
      font-size: 30px;
    }
  }

  p {
    color: #9ca3af;
    font-size: clamp(14px, 2vw, 20px);
    font-weight: 400;
    line-height: 150%;
    @media (max-width: 640px) {
      font-size: 16px;
    }
  }
`;
const Carousel = styled.div`
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    max-width: 100%;
  }

  img {
    border-radius: 8px;
    max-width: 100%;
    max-height: 360px;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <LeftContainer>
        <TitleDesc>
          <h1>Making earth cooler for people, nature, climate</h1>
          <p>
            Protecting the planet and its natural resources for future generations, by reducing pollution, promoting
            sustainability, and conserving energy and resources.
          </p>
        </TitleDesc>
        <Buttons>
          <Button>Donate now</Button>
          <Button variant="alternative">
            <VideoCamera/>
            Learn more
          </Button>
        </Buttons>

        <Sponsors>
          <p>Sponsors:</p>
          <BrandLogosContainer>
            <Intel/>
            <Fedex/>
            <Visa/>
            <Disney/>
          </BrandLogosContainer>
        </Sponsors>
      </LeftContainer>

      <Carousel>
        <img src={picture1}/>
      </Carousel>
    </HeroWrapper>
  );
};

export default Hero;
