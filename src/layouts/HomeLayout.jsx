import styled from "styled-components";
import {Outlet} from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";


function HomeLayout() {
  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  return (
    <Container>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </Container>
  );
}

export default HomeLayout;
