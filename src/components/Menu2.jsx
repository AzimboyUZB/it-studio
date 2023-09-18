import React from "react";
import styled from "styled-components";
import Photo from "../assets/img/Rectangle 2.png"
import Logo from "../assets/img/web-programming.png"

function Menu2() {
    const card = [
        {
            id: 1,
            img: Logo,
            number: 125,
            title: "Our projects"
        },
        {
            id: 2,
            img: Logo,
            number: 125,
            title: "Our projects"
        },
        {
            id: 3,
            img: Logo,
            number: 125,
            title: "Our projects"
        },
        {
            id: 4,
            img: Logo,
            number: 125,
            title: "Our projects"
        },
        {
            id: 5,
            img: Logo,
            number: 125,
            title: "Our projects"
        },
    ]
    return (
        <Wrapper>
            <Container>
                <Box>
                    <Title>
                        <H1>Высокие стандарты <br />
                            разработки</H1>
                        <P>Lorem Ipsum - это текст-"рыба", часто используемый в<br />
                            печати и вэб-дизайне. Lorem Ipsum является стандартной<br />
                            "рыбой" для текстов на латинице с начала XVI века.<br />
                            стандартной "рыбой" для текстов на латинице с начала<br />
                            XVI века. </P>
                        <a className="menu__a" href="/">Подробнее о компании</a>
                    </Title>
                    <BoxImg>
                        <Img src={Photo} />
                    </BoxImg>
                </Box>
                <Hr />
                <BoxCard>
                    {card.map((item) => (
                        <Card key={item.id}>
                            <Row>
                                <CardImg src={item.img} />
                                <H3>{item.number}</H3>
                            </Row>
                            <CardTitle>
                                <H6>{item.title}</H6>
                            </CardTitle>
                        </Card>
                    ))}
                </BoxCard>
            </Container>
        </Wrapper>
    )
}

export default Menu2

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F6F6F8;

    @media screen and (max-width: 768px){
        height: 120vh;
    }
`

const Container = styled.div`
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        width: 80%;
        height: 90%;
    }
    @media screen and (max-width: 375px){
        width: 90%;
        height: 90%;
    }
`

const Box = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        height: 80%;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-around;
    }
`

const Title = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 1024px){
        width: 55%;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
    }
`

const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 53px;
    color: #323232;

    @media screen and (max-width: 1440px){
        font-size: 30px;
        line-height: 40px;
    }

    @media screen and (max-width: 1024px){
        font-size: 25px;
        line-height: 30px;
    }

    @media screen and (max-width: 768px){
        text-align: center;
    }
`

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #999999;

    @media screen and (max-width: 1440px){
        font-size: 13px;
        line-height: 25px;
    }

    @media screen and (max-width: 1024px){
        font-size: 10px;
        line-height: 20px;
    }

    @media screen and (max-width: 768px){
        text-align: center;
    }
`

const BoxImg = styled.div`
    width: 50%;
    height: 100%;

    @media screen and (max-width: 1024px){
        width: 45%;
        height: 80%;
    }

    @media screen and (max-width: 768px){
        width: 70%;
        height: 50%;
    }

    @media screen and (max-width: 425px){
        width: 90%;
        height: 50%;
    }
    @media screen and (max-width: 375px){
        width: 100%;
        height: 50%;
    }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 30px;
`

const Hr = styled.hr`
    width: 100%;
    height: 1px;
    background: #E0E0E0;
`

const BoxCard = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 768px){
        height: 20%;
    }
`

const Card = styled.div`
    width: 100px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Row = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const CardImg = styled.img`
    width: 30px;
    height: 30px;
`

const H3 = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 53px;
    color: #000000;
`

const CardTitle = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
`

const H6 = styled.h6`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #999999;
`
