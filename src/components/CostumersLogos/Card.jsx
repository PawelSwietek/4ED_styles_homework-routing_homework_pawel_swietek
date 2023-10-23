import styled from "styled-components";
import {Button} from "../UI/index.js";
import {ExternalLink} from "../../assets/index.js";


const CardWrapper = styled.div`
  width: 320px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 33%;
  }

  @media (max-width: 640px) {
    width: 50%;
  }

  p {
    color: #6B7280;
    font-size: 16px;
    font-weight: 400;
    line-height: 125%;
    margin: 10px 0 20px 0;
  }
`
const Card = ({logo: Logo}) => {
  return (
    <CardWrapper>
    <Logo/>
      <p>Partner since 2015</p>
      <Button variant='alternative'><ExternalLink/> website</Button>
    </CardWrapper>
  );
};

export default Card;