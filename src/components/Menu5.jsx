import Search from "antd/es/input/Search";
import React from "react";
import styled from "styled-components";
import IconPlay from "../assets/icon/IconPlay"

function Menu5() {
    const onSearch = (value) => console.log(value);
    return (
        <Wrapper>
            <BigBoxImg className="BigBoxImg">
                <Title>
                    <H1>Видео о нашей работе</H1>
                    <H4>Просто посмотрите, как мы работаем</H4>
                </Title>
                <SmallBoxImg className="SmallBoxImg">
                    <Btn><IconPlay /> Смотреть видео</Btn>
                </SmallBoxImg>
            </BigBoxImg>
            <BoxTitle>
                <Container>
                    <Hr />
                    <Row>
                        <H2>Подпишитесь на нашу рассылку</H2>
                        <P>Полезные статьи, акции, новости - получите все это сейчас!</P>
                        <Search
                            className="input"
                            placeholder="Ваш e-mail"
                            allowClear
                            enterButton="Подписаться"
                            size="large"
                            onSearch={onSearch}
                        />
                        <P>Мы не шлем спам, и передаем никому ваши данные.</P>
                    </Row>
                </Container>
            </BoxTitle>
        </Wrapper>
    )
}

export default Menu5

const Wrapper = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
`

const BigBoxImg = styled.div`
`

const Title = styled.div`
    width: 50%;
    height: 35%;
`

const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 53px;
    text-align: center;
    color: #FFFFFF;
`

const H4 = styled.h4`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #FFFFFF;
`

const SmallBoxImg = styled.div`
    
`

const Btn = styled.button`
    width: 30%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: transparent;
    border: 1px solid #ffffff;
    border-radius: 200px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #FFFFFF;
`

const BoxTitle = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 60%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Hr = styled.hr`
    width: 100%;
    height: 1px;
    background: #E0E0E0;
`

const Row = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const H2 = styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #000000;
`

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #999999;
`