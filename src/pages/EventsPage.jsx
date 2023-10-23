import FundraisingEvents from "../components/FundraisingEvents/FundraisingEvents.jsx";
import Blog from "../components/Blog/Blog.jsx";
const data = [
  {
    id: 1,
    title: 'Thank you for supporting in planting trees work.',
    text: 'Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.',
    img: '/img/6322b3afb350485f9f1c6379df6e9e6b.jpeg',
    goal: {target: 400000, raised: 376856},
    donors: 2756,
  },
  {
    id: 2,
    title: 'Thank you for supporting in planting trees work.',
    text: 'Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.',
    img: '/img/06875cc99b7b5df7f26f5d999d04a38e.jpeg',
    goal: {target: 150000, raised: 75856},
    donors: 568,
  },
  {
    id: 3,
    title: 'Thank you for supporting in planting trees work.',
    text: 'Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.',
    img: '/img/06875cc99b7b5df7f26f5d999d04a38e.jpeg',
    goal: {target: 150000, raised: 75856},
    donors: 568,
  },
  {
    id: 4,
    title: 'Thank you for supporting in planting trees work.',
    text: 'Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.',
    img: '/img/6322b3afb350485f9f1c6379df6e9e6b.jpeg',
    goal: {target: 400000, raised: 376856},
    donors: 2756,
  },
]

const EventsPage = () => {

  return (
    <>
      <FundraisingEvents data={data}/>
      <Blog/>
    </>
  );
};

export default EventsPage;
