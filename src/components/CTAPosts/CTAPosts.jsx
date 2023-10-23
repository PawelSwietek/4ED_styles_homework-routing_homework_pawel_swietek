import styled from "styled-components";
import CTAPost from "./CTAPost.jsx";
import {ArrowNarrowRight} from "../../assets/index.js";


const data = [
  {
    id: 1,
    title: 'Flowbite Green is a climate change non-profit organization.',
    text: 'Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.',
    img: '/img/6322b3afb350485f9f1c6379df6e9e6b.jpeg',
    buttons: [
      {id: 1, label: 'Get involved', variant: 'primary', icon: true,},
      {id: 2, label: 'Learn more', variant: 'alternative', icon: false}
    ],
    flicked: false
  },
  {
    id: 2,
    title: 'Protect our earth against climate change and pollution.',
    text: 'Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.',
    img: '/img/d8c942d66d9bf524dfa48de6a1e949f6.jpeg',
    buttons: [
      {
        id: 1,
        label: 'View all activities',
        variant: 'primary',
        icon: true,
      },

    ],
    flicked: true
  },
  {
    id: 3,
    title: 'Together we can restore our earth against climate change',
    text: 'Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.',
    img: '/img/3a2e9079ae58601dbd2d4ef5ffdd8d0e.jpeg',
    buttons: [
      {id: 1, label: 'Read more', variant: 'primary', icon: true,},

    ],
    flicked: false
  }

]
const CTAPostsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 0 16px 96px 16px;
  @media (max-width: 640px) {
    padding: 0 16px 32px 16px;
    gap: 32px;
  }
  @media (max-width: 1024px) {
    padding: 0 16px 32px 16px;
  }
`

const CTAPosts = () => {

  return (
    <CTAPostsWrapper>
      {data.map(item => <CTAPost key={item.id} data={item}/>)}

    </CTAPostsWrapper>
  );
};

export default CTAPosts;