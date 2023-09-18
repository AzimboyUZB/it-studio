import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Menu2 from "./components/Menu2";
import Menu3 from "./components/Menu3";
import Menu4 from "./components/Menu4";
import Menu5 from "./components/Menu5";

function App() {
  return (
    <Wrapper>
      <Header />
      <Menu />
      <Menu2 />
      <Menu3 />
      <Menu4 />
      <Menu5 />
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
