import styled from "styled-components";
import {brandLogos, ArrowNarrowRight} from "../../assets/index.js";

import Card from "./Card.jsx";

const CostumersLogosWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  background-color: #1F2A37;
  border-top: 1px solid #374151;
  border-bottom: 1px solid #374151;
`

const Container = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 64px;
  padding: 96px 0;

  @media (max-width: 640px) {
    width: 100%;
    gap: 32px;
    padding: 32px 16px;
  }
`
const HeadingWrapper = styled.div`
  width: 672px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 640px) {
    width: 100%;
  }

  h1 {
    font-size: 32px;
    font-weight: 800;
    line-height: 125%;
    color: #FFF;
    text-align: center;
    @media (max-width: 640px) {
      font-size: 30px;
    }
  }

  p {
    width: 100%;
    font-size: 20px;
    font-weight: 300;
    line-height: 150%;
    color: #9CA3AF;
    text-align: center;

    @media (max-width: 640px) {
      font-size: 16px;
    }
  }

  span {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #3F83F8;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }
`
const LogosContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 32px;

  @media (max-width: 640px) {
    row-gap: 20px;
  }
`

const CostumersLogos = () => {

  return (
    <CostumersLogosWrapper>
      <Container>
        <HeadingWrapper>
          <h1>Donors, Partners & Sponsors</h1>
          <p>Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term
            value.</p>
          <span>Become a sponsor <ArrowNarrowRight fill='#3F83F8'/></span>
        </HeadingWrapper>
        <LogosContainer>
          {brandLogos.map((Logo, index) => <Card key={index}  logo={Logo}/>)}
        </LogosContainer>
      </Container>
    </CostumersLogosWrapper>
  );
};

export default CostumersLogos;