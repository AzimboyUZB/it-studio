import React from "react";
import styled from "styled-components";
import Photos from "../assets/img/Rectangle 2 (2).png"

function Menu4() {
    return (
        <Wrapper>
            <Container>
                <H1>Наши проекты</H1>
                <P>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem <br />
                    Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. </P>
                    <BoxImg>
                        <Img src={Photos}/>
                        <Img src={Photos}/>
                        <Img src={Photos}/>
                        <Img src={Photos}/>
                    </BoxImg>
                    <Btn>Все проекты</Btn>
            </Container>
        </Wrapper>
    )
}

export default Menu4

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F6F6F8;
`

const Container = styled.div`
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 53px;
    text-align: center;
    color: #000000;
`

const P = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #999999;
`

const BoxImg = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
`

const Img = styled.img`
    width: 200px;
    height: 200px;
`

const Btn = styled.button`
  width: 200px;
  height: 45px;
  background: #4985FF;
  color: #fff;
  font-size: 16px;
  box-shadow: 0px 0px 10px rgba(111, 111, 111, 0.25);
  border: none;
  border-radius: 30px;
  box-shadow: 4px 4px 0px 0px #246dff;
  :active{
    width: 180px;
    box-shadow: -5px -5px 20px -5px #1e1e1e inset, -5px -5px 1px  #0069b5e8;
    transition: 0.1s;
    font-size: 14px;
  }
`