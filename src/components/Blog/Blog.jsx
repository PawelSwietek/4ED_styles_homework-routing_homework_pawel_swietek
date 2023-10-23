import styled from 'styled-components'
import BlogCard from "./BlogCard.jsx";

const data = [
  {
    id: 1,
    title: 'SEO Basics: Beginner\'s Guide to SEO Success',
    text: 'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.',
    img: '/img/8f9a2d0d938f2b10c8abdc6af5494a6c.jpeg'
  }, {
    id: 2,
    title: 'How to quickly deploy a static website',
    text: 'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.',
    img: null
  }, {
    id: 3,
    title: 'What is SEO? Search Engine Optimization Explained',
    text: 'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even.',
    img: null
  }, {
    id: 4,
    title: 'Spotify\'s Car Thing available to all premium users',
    text: 'Starting Tuesday any Spotify Premium user can buy the streaming service\'s first piece of hardware.',
    img: null
  },
  {
    id: 5,
    title: 'How to Rank Higher on Google (6 Easy Steps)',
    text: 'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.',
    img: null
  }, {
    id: 6,
    title: '12 SEO Best Practices That Everyone Should Follow',
    text: 'Static websites are now used to bootstrap lots of websites and are becoming the basis.',
    img: null
  }, {
    id: 7,
    title: 'How to schedule your Tweets to send later',
    text: 'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even.',
    img: null
  },

]
const BlogWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 16px;
  gap: 64px;
  background-color: #1F2A37;
  border-top: 1px solid #374151;
  border-bottom: 1px solid #374151;

  @media (max-width: 1024px) {
    padding: 32px 16px;
  }
`
const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 576px;

  h1 {
    color: #FFF;
    font-size: 36px;
    font-weight: 800;
    line-height: 125%;
    text-align: center;

    @media (max-width: 1024px) {
      font-size: 30px;
    }
  }

  p {
    color: #9CA3AF;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`

const BlogPostsContainer = styled.div`
  display: flex;
  max-width: 1280px;
  height: 100%;
  flex: 1;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`
const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
`
const Divider = styled.div`
  height: auto;
  width: 1px;
  background-color: #374151;
  margin: 0 32px;
  
  @media (max-width: 640px) {
    display: none;
  }
`

const Blog = () => {
  const withImage = data.filter(item => item.img !== null)
  const withOutImage = data.filter(item => item.img == null)

  return (
    <BlogWrapper>
      <Heading>
        <h1>Latest news & events</h1>
        <p>We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
      </Heading>
      <BlogPostsContainer>

        <Column>
          {withImage.map(item => (<BlogCard key={item.id} data={item}/>))}
        </Column>
        <Divider></Divider>
        <Column>
          {withOutImage.slice(0, 3).map(item => <BlogCard key={item.id} data={item}/>)}
        </Column>
        <Divider></Divider>
        <Column>
          {withOutImage.slice(3).map(item => <BlogCard key={item.id} data={item}/>)}
        </Column>

      </BlogPostsContainer>
    </BlogWrapper>
  );
};

export default Blog;