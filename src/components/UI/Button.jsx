import styled from "styled-components";

const btnVariations = {
  primary: `color: #FFFFFF; border: none; background-color: #1A56DB;`,
  alternative: `color: #9CA3AF; border: 1px solid #4B5563; background-color: #1F2A37;`,
}

const ButtonWrapper = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 41px;
  font-size: 14px;
  line-height: 150%;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;

  ${({variant}) => btnVariations[variant] || btnVariations.primary}
`;


const Button = ({children, variant, onClick}) => {
  return (
    <ButtonWrapper variant={variant} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;