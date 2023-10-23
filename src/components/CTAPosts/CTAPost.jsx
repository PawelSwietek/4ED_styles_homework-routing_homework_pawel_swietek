import styled from "styled-components";
import {Button} from "../UI/index.js";
import {ArrowNarrowRight} from "../../assets/index.js";

const CTAPostWrapper = styled.div`
  display: flex;
  ${({flicked}) => flicked && 'flex-direction: row-reverse'};
  justify-content: space-between;
  max-width: 1280px;
  gap: clamp(12px, 4vw, 80px);

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`

const LeftContainer = styled.div`
  max-width: 100%;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`
const RightContainer = styled.div`
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
`

const Heading = styled.h1`
  font-size: clamp(18px, 3vw, 36px);
  color: #FFF;
  font-weight: 800;
  line-height: 125%;
  
  @media (max-width: 640px) {
    font-size: 30px;
  }
`
const Paragraph = styled.p`
  font-weight: 400;
  line-height: 150%;
  color: #9CA3AF;

  @media (min-width: 1024px) {
    font-size: clamp(12px, 2vw, 18px);
  }
  @media (max-width: 640px) {
    font-size: 18px;
  }
`
const ActionBtnsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: start;
`

const CTAPost = ({data: {title, img, text, flicked, buttons}}) => {
  return (
    <CTAPostWrapper flicked={flicked}>
      <LeftContainer>
        <img src={img}/>
      </LeftContainer>
      <RightContainer>
        <Heading>{title}</Heading>
        <Paragraph>{text}</Paragraph>
        <ActionBtnsWrapper>
          {buttons.map((button) => (
            <Button key={button.id}
              variant={button.variant}>{button.label} {button.icon &&
              <ArrowNarrowRight/>}</Button>))}
        </ActionBtnsWrapper>
      </RightContainer>
    </CTAPostWrapper>
  );
};

export default CTAPost;