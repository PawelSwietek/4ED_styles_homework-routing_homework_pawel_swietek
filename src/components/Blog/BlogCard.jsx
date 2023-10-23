import styled from "styled-components";

import {ArrowNarrowRight} from '../../assets/index.js'

const BlogCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
const CardHeader = styled.div`
  display: ${({img}) => !img && 'none'};
  width: 100%;
  height: 192px;
  background: ${({img}) => img ? `url(${img}) lightgray no-repeat center center / cover;` : 'none'}
  border-radius: 8px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 125%;
    color: #FFF;
  }
  
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #9CA3AF;
  }

  span {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #1C64F2;
    font-weight: 600;
    line-height: 125%;
    font-size: 16px;
  }
`
const BlogCard = ({data: {title, text, img}}) => {

  return (
    <BlogCardWrapper>
      {/*{img && <CardHeader/>}*/}
      <CardHeader img={img}/>
      <Content>
        <h1>{title}</h1>
        <p>{text}</p>
        <span>Read more <ArrowNarrowRight fill='#3F83F8'/></span>
      </Content>


    </BlogCardWrapper>
  );
};

export default BlogCard;