import React from "react";
import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons"

function Header() {

  const handleOpen = () => {
    const Menu = document.querySelector(".menu")
    Menu.classList.add("open")
  }

  const handleClose = () => {
    const Menu = document.querySelector(".menu")
    Menu.classList.remove("open")
  }

  return (
    <Wrapper className="header">
      <Menu className="menu">
        <Container>
          <BoxBtn>
            <CloseBtn onClick={handleClose}>X</CloseBtn>
          </BoxBtn>
          <Nav>
            <Row>
              <H3 onClick={handleClose}><a className="a" href="">Главная</a></H3>
            </Row>
            <Row>
              <H3><a className="a" href="">Наши проекты</a></H3>
            </Row>
            <Row>
              <H3 onClick={handleClose}><a className="a" href="">Услуги</a></H3>
            </Row>
            <Row>
              <H3 onClick={handleClose}><a className="a" href="">Новости</a></H3>
            </Row>
            <Row>
              <H3 onClick={handleClose}><a className="a" href="">Контакты</a></H3>
            </Row>
          </Nav>
        </Container>
      </Menu>
      <HeaderTop>
        <Tab>
          <Text>
            <MenuOutlined className="icon" onClick={handleOpen} />
            <H2><a className="a" href="">Главная</a></H2>
            <H2><a className="a" href="">Наши проекты</a></H2>
            <H2><a className="a" href="">Услуги</a></H2>
            <H2><a className="a" href="">Новости</a></H2>
            <H2><a className="a" href="">Контакты</a></H2>
          </Text>
        </Tab>
      </HeaderTop>

      <HeaderMenu>
        <H5>Передовая IT студия</H5>
        <H1>Мы создаем легкие решения<br />
          сложных задач и проблем</H1>
        <Btn>Наши проекты</Btn>
      </HeaderMenu>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 16px 20px 0px rgba(12, 21, 28, 0.7);
    z-index: 1;

    @media screen and (max-width: 768px){
      height: 90vh;
    }

    @media screen and (max-width: 680px){
      height: 80vh;
    }

    @media screen and (max-width: 425px){
      height: 60vh;
    }
`

const Menu = styled.div`
  position: fixed;
  width: 100vw;
  height: 60vh;
  left: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: 0.3s;
  background: #292929b1;

`

const Container = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background: #fff;
`

const BoxBtn = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const CloseBtn = styled.button`
  width: 30px;
  height: 90%;
  background: #247fff41;
  border: 2px solid #247fff;
  border-radius: 5px;
  color: #247fff;
`

const Nav = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Row = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #b6b6b6;
`

const H3 = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #000000;
`

const HeaderTop = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #A1A1A1;

    @media screen and (max-width: 768px){
      height: 8%;
    }

    @media screen and (max-width: 425px){
      height: 8%;
    }
`

const Tab = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 768px){
    width: 50%;
  }

  @media screen and (max-width: 680px){
    width: 60%;
  }

  @media screen and (max-width: 425px){
    width: 20%;
  }
`

const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 425px){
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const H2 = styled.h2`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  color: #FFFFFF;

  @media screen and (max-width: 1880px){
    font-size: 19px;
  }

  @media screen and (max-width: 1440px){
    font-size: 16px;
  }

  @media screen and (max-width: 1200px){
    font-size: 13px;
  }

  @media screen and (max-width: 1024px){
    font-size: 10px;
  }

  @media screen and (max-width: 680px){
    font-size: 7px;
  }

  @media screen and (max-width: 425px){
    display: none;
  }
`

const HeaderMenu = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 425px){
    gap: 5px;
  }
`

const H5 = styled.h5`
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 20px;
  color: #FFFFFF;

  @media screen and (max-width: 1440px){
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and (max-width: 680px){
    font-size: 13px;
  }

  @media screen and (max-width: 425px){
    font-size: 10px;
  }
`

const H1 = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 65px;
  line-height: 70px;
  text-align: center;
  color: #FFFFFF;

  @media screen and (max-width: 1440px){
    font-size: 48px;
    line-height: 64px;
  }

  @media screen and (max-width: 1024px){
    font-size: 40px;
    line-height: 55px;
  }

  @media screen and (max-width: 768px){
    font-size: 33px;
    line-height: 45px;
  }

  @media screen and (max-width: 680px){
    font-size: 25px;
    line-height: 40px;
  }

  @media screen and (max-width: 425px){
    font-size: 18px;
    line-height: 30px;
  }
`

const Btn = styled.button`
  width: 300px;
  height: 60px;
  background: #4985FF;
  color: #fff;
  font-size: 25px;
  box-shadow: 0px 0px 10px rgba(111, 111, 111, 0.25);
  border: none;
  border-radius: 30px;
  box-shadow: 4px 4px 0px 0px #246dff;
  margin-top: 50px;

  :active{
    width: 250px;
    box-shadow: -5px -5px 20px -5px #1e1e1e inset, -5px -5px 1px  #0069b5e8;
    transition: 0.2s;
    font-size: 23px;
  }

  @media screen and (max-width: 1440px){
    width: 170px;
    height: 40px;
    font-size: 16px;

    :active{
      width: 150px;
      box-shadow: -5px -5px 20px -5px #1e1e1e inset, -5px -5px 1px  #0069b5e8;
      transition: 0.2s;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 768px){
    width: 150px;
    height: 30px;
    font-size: 14px;

    :active{
      width: 120px;
      box-shadow: -5px -5px 20px -5px #1e1e1e inset, -5px -5px 1px  #0069b5e8;
      transition: 0.2s;
      font-size: 12px;
    }
  }
`