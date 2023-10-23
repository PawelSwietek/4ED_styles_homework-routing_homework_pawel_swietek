import styled from "styled-components";
import {Button} from "../UI/index.js";

const ContactWrapper = styled.section`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  padding: 96px 16px;
  align-items: center;
  gap: 64px;
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
`
const Heading = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 672px;
  align-items: center;

  h1 {
    font-size: 36px;
    font-weight: 800;
    line-height: 125%;
    color: #FFF;
    text-align: center;
    @media (max-width: 640px) {
      font-size: 30px;
    }
  }

  p {
    color: #9CA3AF;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
    @media (max-width: 640px) {
      font-size: 16px;
    }
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`
const ContactForm = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 640px;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }

  label {
    color: #FFF;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
  }

  input {
    background-color: #374151;
    border: 1px solid #4B5563;
    border-radius: 8px;
    padding: 14px 16px;
    font-size: 16px;
    font-weight: 400;
    color: #9CA3AF;
    line-height: 150%;
    width: 100%;
  }

  input::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #9CA3AF;
    line-height: 150%;
  }

  textarea {
    border-radius: 8px;
    border: 1px solid #4B5563;
    background: #374151;
    padding: 13px 20px;
    font-size: 16px;
    font-weight: 400;
    color: #9CA3AF;
    line-height: 150%;
    height: 195px;
    resize: none;
    width: 100%;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: start;
`

const Contact = () => {


  return (
    <ContactWrapper>
      <Heading>
        <h1>Contact us</h1>
        <p>Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let
          us know.</p>
      </Heading>
      <ContactForm>
        <div>
          <label>Your email</label>
          <input type='email' placeholder='name@flowbite.com'/>
        </div>
        <div>
          <label>Subject</label>
          <input type='text' placeholder='Let us know how we can help you'/>
        </div>
        <div>
          <label>Your message</label>
          <textarea></textarea>
        </div>
        <ButtonWrapper><Button>Send message</Button></ButtonWrapper>

      </ContactForm>

    </ContactWrapper>
  );
};

export default Contact;