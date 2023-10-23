import styled from "styled-components";

const LinkColumnWrapper = styled.div`
  width: 176px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  h2 {
    font-size: 14px;
    color: #FFF;
    font-weight: 600;
    line-height: 150%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: #9CA3AF;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    list-style: none;
    padding: 0;
  }
`
const LinkColumn = ({title, links}) => {
  return (
    <LinkColumnWrapper>
      <h2>{title}</h2>
      <ul>
        {links.map(link => (<li key={Math.random()}>{link.title}</li>))}
      </ul>
    </LinkColumnWrapper>
  );
};

export default LinkColumn;