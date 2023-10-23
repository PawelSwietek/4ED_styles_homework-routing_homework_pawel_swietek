import styled from "styled-components";
import {useLoaderData, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

import {Pagination} from "../components/UI/index.js";
import FetchError from "../components/Errors/FetchError.jsx";

const EventCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 280px;
  width: 100%;
  height: 100%;
  background-color: #1f2a37;
  //border: 1px solid #374151;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 0 12px -5px rgba(118, 127, 229, 1);
  @media (max-width: 640px) {
    max-width: 85%;
  }

  img {
    display: block;
    border-radius: 8px;
    box-shadow: 0 0 10px -2px rgb(116, 238, 12);
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

    span {
      color: #fff;
    }
  }
`;

const Wrapper = styled.section`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: center;
  row-gap: 16px;
  column-gap: 16px;
  flex-wrap: wrap;
  padding: 64px 0;
`

const RickAndMortyPage = () => {

  const [max, setMax] = useState(null)
  const ref = useRef(null)
  const {data:{characters: {info, results}}} = useLoaderData()
  const {page = 1} = useParams()

  let elWidth = null

  const setElWidth = () => {
    if (ref.current) {
      elWidth = ref.current.getBoundingClientRect().width
    }

  }
  const updateMax = () => {
    const newElWidth = ref.current.getBoundingClientRect().width
    if (Math.abs(elWidth - newElWidth) >= 70) {
      setMax(Math.floor((newElWidth - 150) / 70))
    }
  }

  useEffect(() => {
    setElWidth()
    setMax(Math.floor((elWidth - 150) / 70))
    window.addEventListener('resize', updateMax)

    return () => {
      window.removeEventListener('resize', updateMax)
    }
  }, [])

if(info.pages ){
  return (
    <>
      <Pagination pages={info.pages} max={max} currentPage={Number(page)}/>
      <Wrapper ref={ref} id='chracters'>
        {results.map(item => {
          return (
            <EventCardWrapper key={item.id}>
              <img src={item.image} alt={item.name}/>
              <h1>{item.name}</h1>
              <p>Status: <span>{item.status}</span></p>
              <p>Species: <span>{item.species}</span></p>
            </EventCardWrapper>
          )
        })}
      </Wrapper>
    </>
  );
}else{
  return <FetchError/>
}

};

export default RickAndMortyPage;