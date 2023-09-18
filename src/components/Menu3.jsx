import React from "react";
import styled from "styled-components";
import Photos from "../assets/img/Rectangle 2 (1).png"

function Menu3() {
    const card = [
        {
            id: 1,
            img: Photos,
            number: "01.",
            name: "Исследование и упаковка",
            title: "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века.",
            btn: "Подробнее",
        },
        {
            id: 2,
            img: Photos,
            number: "01.",
            name: "Исследование и упаковка",
            title: "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века.",
            btn: "Подробнее",
        },
        {
            id: 3,
            img: Photos,
            number: "01.",
            name: "Исследование и упаковка",
            title: "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века.",
            btn: "Подробнее",
        },
    ]
    return (
        <Wrapper>
            <BoxBlue>
                <Container>
                    <Title>
                        <H1>Наши работы, на которых<br />
                            мы специализируемся</H1>
                            <Btn>Все услуги</Btn>
                    </Title>
                    <BoxCard>
                        {card.map((item) => (
                            <Card key={item.id}>
                                <Img src={item.img}/>
                                <H2><Span>{item.number}</Span>{item.name}</H2>
                                <P>{item.title}</P>
                                <a className="manu__a__one" href="/">{item.btn}</a>
                            </Card>
                        ))}
                    </BoxCard>
                    <Hr />
                </Container>
            </BoxBlue>
        </Wrapper>
    )
}

export default Menu3

const Wrapper = styled.div`
    width: 100%;
    height: 110vh;

    @media screen and (max-width: 768px){
        height: 200vh;
    }

    @media screen and (max-width: 513px){
        height: 280vh;
    }
`

const BoxBlue = styled.div`
    width: 100%;
    height: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, #504DC2 20.44%, #5F12D0 80.91%), #C4C4C4;

    @media screen and (max-width: 768px){
        height: 30%;
    }

    @media screen and (max-width: 513px){
        height: 20%;
    }
`

const Container = styled.div`
    width: 85%;
    height: 80%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1440px){
        width: 65%;
    }

    @media screen and (max-width: 1200px){
        width: 95%;
    }
`

const Title = styled.div`
    width: 100%;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1440px){
        height: 60px;
    }

    @media screen and (max-width: 425px){
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
`

const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    color: #FFFFFF;

    @media screen and (max-width: 1440px){
        font-weight: 700;
        font-size: 36px;
    }

    @media screen and (max-width: 768px){
        font-weight: 700;
        font-size: 25px;
    }

    @media screen and (max-width: 580px){
        font-weight: 700;
        font-size: 18px;
    }

    @media screen and (max-width: 425px){
        font-weight: 700;
        font-size: 18px;
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
  :active{
    box-shadow: -5px -5px 20px -5px #1e1e1e inset, -5px -5px 1px  #0069b5e8;
    transition: 0.3s;
    font-size: 20px;
  }

  @media screen and (max-width: 1440px){
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
  }

  @media screen and (max-width: 580px){
    width: 150px;
    height: 35px;
    background: #4985FF;
    color: #fff;
    font-size: 14px;
    box-shadow: 0px 0px 10px rgba(111, 111, 111, 0.25);
    border: none;
    border-radius: 30px;
    box-shadow: 4px 4px 0px 0px #246dff;
    :active{
        width: 150px;
        box-shadow: -5px -5px 20px -5px #1e1e1e inset, -5px -5px 1px  #0069b5e8;
        transition: 0.1s;
        font-size: 12px;
    }
  }

  @media screen and (max-width: 425px){
    margin-top: 20px;
  }
`

const BoxCard = styled.div`
    width: 100%;
    height: 750px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 150px;

    @media screen and (max-width: 1440px){
        height: 450px;
        margin-top: 55px;
    }

    @media screen and (max-width: 768px){
        height: 1000px;
        justify-content: space-around;
    }

    @media screen and (max-width: 513px){
        height: 1400px;
        margin-top: 90px;
    }
`

const Card = styled.div`
    width: 400px;
    height: 750px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (max-width: 1440px){
        width: 243.3px;
        height: 450px;
    }
`

const Img = styled.img`
    width: 100%;
    height: 50%;
`

const H2 = styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: 27px;
    line-height: 22px;
    color: black;

    @media screen and (max-width: 1440px){
        font-size: 17px;
        line-height: 22px;
    }
`

const Span = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 27px;
    line-height: 22px;
    color: #4985FF;

    @media screen and (max-width: 1440px){
        font-size: 17px;
        line-height: 22px;
    }
`

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 35px;
    color: #999999;

    @media screen and (max-width: 1440px){
        font-size: 13px;
        line-height: 20px;
    }
`

const Hr = styled.hr`
    width: 100%;
    height: 1px;
    background: #E0E0E0;
    margin-top: 50px;

    @media screen and (max-width: 1440px){
        margin-top: 0px;
    }
`