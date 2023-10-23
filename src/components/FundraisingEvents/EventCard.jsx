import styled from "styled-components";
import GoalProgressBar from "./GoalProgressBar.jsx";
import { Button } from "../UI/index.js";
import useDonationLogic from "../../hooks/useDonationLogic.jsx";
import {Share} from "../../assets/index.js";

import ConfettiExplosion from 'react-confetti-explosion';

const EventCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex:1;
  max-width: 552px;
  background-color: #1f2a37;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 32px;
  @media (max-width: 800px) {
    max-width: 100%;
  }

  h1 {
    font-size: 18px;
    font-weight: 700;
    line-height: 125%;
    color: #fff;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #9ca3af;
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: left;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Image = styled.div`
  background: url(${({ img }) => img}) lightgray no-repeat center center / cover;
  height: 288px;
  width: 100%;
  border-radius: 8px;
`;



const EventCard = ({ data: { title, text, img, goal: {target, raised}, donors } }) => {

  const {isTargetReached, currentFunds, currentDonors, donate} = useDonationLogic({target,raised,donors})

  return (
    <EventCardWrapper>
      {isTargetReached && <div className='absolute left-1/2'><ConfettiExplosion  particleCount={500} width='2000'  particleSize={20} duration={5000}/></div>}
      <Image img={img} />
      <GoalProgressBar target={target} raised={currentFunds} donors={currentDonors} />
      <h1>{title}</h1>
      <p>{text}</p>
      <ButtonsWrapper>
        {!isTargetReached &&  <Button  onClick={()=> donate()} >Donate now</Button>}
        <Button  variant='alternative'><Share/> this Fundraiser</Button>
      </ButtonsWrapper>
    </EventCardWrapper>
  );
};

export default EventCard;
