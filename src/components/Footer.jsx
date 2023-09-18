import React from "react";
import styled from "styled-components";
import IconPochta from "../assets/icon/IconPochta"
import IconTelefon from "../assets/icon/IconTelefon"
import IconLocation from "../assets/icon/IconLocation"
import IconArrow from "../assets/icon/IconArrow"

function Footer() {
    const text = [
        {
            id: 1,
            name: "Основные ссылки",
            text1: "Главная",
            text2: "Наши проекты",
            text3: "Наши услуги",
            text4: "Контакты",
        },
        {
            id: 2,
            name: "Наши проекты",
            text1: "РосНано",
            text2: "Сколково",
            text3: "Проект “Восток”",
            text4: "ТЭЦ Калининграда",
        },
        {
            id: 3,
            name: "Социальные сети",
            text1: "VK.com",
            text2: "Instagram",
            text3: "Facebook",
            text4: "Twitter",
        },
    ]
    return (
        <Wrapper>
            <Container>
                <Title>
                    <Card>
                        <H1>Контактная информация</H1>
                        <H6><IconPochta />test@test.ru</H6>
                        <H6><IconTelefon />+8 777 555 66 99</H6>
                        <H6><IconLocation />Москва, Бульвар Ленина 33</H6>
                    </Card>
                    {text.map((item) => (
                        <Card key={item.id}>
                            <H1>{item.name}</H1>
                            <H6><IconArrow />{item.text1}</H6>
                            <H6><IconArrow />{item.text2}</H6>
                            <H6><IconArrow />{item.text3}</H6>
                            <H6><IconArrow />{item.text4}</H6>
                        </Card>
                    ))}
                </Title>
                <Hr />
                <Text>
                    <P>(с) 2019. Все права защищены.</P>
                </Text>
            </Container>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
    width: 100%;
    height: 413px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F6F6F8;
`

const Container = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
`

const Card = styled.div`
    width: 25%;
    height: 100%;
`

const H1 = styled.h1`
    width: 100%;
    height: 25px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #000000;
`

const Hr = styled.hr`
    width: 100%;
    height: 1px;
    background: #E0E0E0;
`

const Text = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const P = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 21px;
    text-align: center;
    color: #999999;
`

const H6 = styled.h6`
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #999999;
    gap: 10px;
`