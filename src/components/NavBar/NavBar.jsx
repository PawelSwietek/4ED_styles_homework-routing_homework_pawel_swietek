import {useState} from 'react';
import {NavLink} from "react-router-dom";

import styled from "styled-components";

import {Button} from "../UI/index.js";
import {Logo} from '../../assets/index.js'


const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
  color: white;
  padding: 24px 16px 0 16px;
  width: 100%;
  max-width: 1280px;
  height: auto;
 z-index: 100;
  @media (max-width: 900px) {
    width: 100%;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 102px;
  gap: 12px;
  font-size: 24px;
  font-weight: 600;
`
const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  

  @media (max-width: 900px) {
    display: ${({isopen}) => isopen==='true' ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    
    gap: 20px;
    padding: 20px 0;
    position: absolute;
    top: 65px;
    left: 0;
    background-color: #1F2A37;
    opacity: 95%;
  }
`

const NavLinksLeft = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  font-weight: 500;
 
  a{   
   white-space: nowrap;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
      
    &.active{
      color: #1A56DB;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }
`
const NavLinksRight = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  gap: 16px;
  font-size: 14px;  
  @media (max-width: 900px) {
    justify-content: center;
  }
`
const Hamburger = styled.div`
  display: none;
  font-size: 40px;
  cursor: pointer;
  @media (max-width: 900px) {
    display: block;
  }
`

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHandle = (e) =>{
    if (e.target.tagName === 'A'){
      setIsOpen(false)
    }
  }

  return (
    <NavBarContainer>
      <LogoWrapper><Logo/>Logo</LogoWrapper>
      <Hamburger onClick={() => setIsOpen(isOpen => !isOpen)}>☰</Hamburger>
      <NavLinks isopen={isOpen.toString()}>
        <NavLinksLeft onClick={onClickHandle}>
          <NavLink to='/'>home</NavLink>
          <NavLink to='news'>news</NavLink>
          <NavLink to='events'>events</NavLink>
          <NavLink to='contact'>contact</NavLink>
          <NavLink to='rickandmorty'>the rick and morty</NavLink>
        </NavLinksLeft>
        <NavLinksRight><span>Log In </span><Button>Get started</Button> </NavLinksRight>
      </NavLinks>
    </NavBarContainer>
  );
}

export default NavBar;

