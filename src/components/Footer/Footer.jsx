import styled from "styled-components";
import LinkColumn from "./LinkColumn.jsx";

import {Logo, socialIcons} from "../../assets/index.js";

const data = [
  {
    id: 1, title: 'COMPANY', links: [
      {id: 1, title: 'About'},
      {id: 2, title: 'Premium'},
      {id: 3, title: 'Blog'},
      {id: 4, title: 'Affiliate Program'},
      {id: 5, title: 'Get Coupon'},
    ]
  },
  {
    id: 2, title: 'HELP AND SUPPORT', links: [
      {id: 1, title: 'Contact Us'},
      {id: 2, title: 'Knowledge Center'},
      {id: 3, title: 'Premium Support'},
      {id: 4, title: 'Sponsorships'},
    ]
  },
  {
    id: 3, title: 'LEARNING', links: [
      {id: 1, title: 'Learn Hub'},
      {id: 2, title: 'Manuals'},
      {id: 3, title: 'Tutorials'},
      {id: 4, title: 'Communities'},
    ]
  },
  {
    id: 4, title: 'RESOURCES', links: [
      {id: 1, title: 'Third-Party Tools'},
      {id: 2, title: 'Illustrations'},
      {id: 3, title: 'Themesberg'},
      {id: 4, title: 'Bluehost'},
      {id: 5, title: 'Stock Photos'},
    ]
  },
  {
    id: 5, title: 'LEGAL', links: [
      {id: 1, title: 'Privacy Policy'},
      {id: 2, title: 'Terms & Conditions'},
      {id: 3, title: 'EULA'},
    ]
  },

]


const FooterWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #1F2A37;
  padding: 96px 16px 64px 16px;

  @media (max-width: 1024px) {
    justify-content: start;
  }

  @media (max-width: 640px) {
    padding: 32px 16px 64px 16px;
  }
`
const Container = styled.div`
  display: flex;
  gap: 64px;
  flex-direction: column;
  align-items: center;
  width: 1280px;

  @media (max-width: 640px) {
    align-items: start;
    width: 100%;
  }
`
const NavLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    width: 60%;
    column-gap: 104px;
    row-gap: 32px;
    align-self: start;
  }
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 32px;
  }
`
const LogoSocialLinks = styled.div`
  width: 384px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  p {
    color: #9CA3AF;
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;
  }

  @media (max-width: 640px) {
    align-items: start;
  }
`

const LogoWrapper = styled.div`
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 12px;
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 640px) {
    justify-content: start;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;  
`


const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <NavLinks>
          {data.map(({title, links}) => (<LinkColumn key={Math.random()} title={title} links={links}/>))}
        </NavLinks>
        <LogoSocialLinks>
          <LogoWrapper><Logo />Flowbite</LogoWrapper>
          <p>© 2022 Flowbite, Inc. All rights reserved.</p>
          <SocialLinks>
            {socialIcons.map((Icon, index) => <Icon key={index}/>)}
          </SocialLinks>
        </LogoSocialLinks>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;