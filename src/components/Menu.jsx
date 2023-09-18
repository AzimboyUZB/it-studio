import React from "react";
import styled from "styled-components";
import Logo from "../assets/img/project.png"

function Menu() {
    return (
        <Wrapper>
            <Text>
                <H1>Мы создаем мобильные приложения<br />
                    для крупных корпораций</H1>
                <P>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem<br />
                    Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. </P>
            </Text>
            <MenuBottom>
                <BoxCard>
                    <Card>
                        <Box>
                            <BoxImg>
                                <Border>
                                    <Img src={Logo} />
                                </Border>
                            </BoxImg>
                        </Box>
                        <CardTitle>
                            <H3>Создание сайтов</H3>
                            <H6>Lorem Ipsum - это текст-<br />
                                "рыба", часто используе в<br />
                                печати и вэб-дизайне.</H6>
                        </CardTitle>
                    </Card>
                    <Card>
                        <Box>
                            <BoxImg>
                                <Border>
                                    <Img src={Logo} />
                                </Border>
                            </BoxImg>
                        </Box>
                        <CardTitle>
                            <H3>Создание сайтов</H3>
                            <H6>Lorem Ipsum - это текст-<br />
                                "рыба", часто используе в<br />
                                печати и вэб-дизайне.</H6>
                        </CardTitle>
                    </Card>
                    <Card>
                        <Box>
                            <BoxImg>
                                <Border>
                                    <Img src={Logo} />
                                </Border>
                            </BoxImg>
                        </Box>
                        <CardTitle>
                            <H3>Создание сайтов</H3>
                            <H6>Lorem Ipsum - это текст-<br />
                                "рыба", часто используе в<br />
                                печати и вэб-дизайне.</H6>
                        </CardTitle>
                    </Card>
                </BoxCard>
                <BoxBtn>
                    <Btn>Все услуги</Btn>
                </BoxBtn>
            </MenuBottom>
        </Wrapper>
    )
}

export default Menu

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1200px){
        height: 140vh;
    }

    @media screen and (max-width: 768px){
        height: 170vh;
    }
`

const Text = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 1200px){
        height: 35%;
    }

    @media screen and (max-width: 768px){
        height: 25%;
    }
`

const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 53px;
    text-align: center;
    color: #323232;

    @media screen and (max-width: 1440px){
        font-size: 36px;
        line-height: 53px;
    }

    @media screen and (max-width: 768px){
        font-size: 30px;
        line-height: 45px;
    }

    @media screen and (max-width: 580px){
        font-size: 20px;
        line-height: 30px;
    }

    @media screen and (max-width: 425px){
        font-size: 15px;
        line-height: 25px;
    }
`

const P = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #999999;

    @media screen and (max-width: 1440px){
        font-size: 16px;
        line-height: 25px;
    }

    @media screen and (max-width: 768px){
        font-size: 12px;
        line-height: 20px;
    }

    @media screen and (max-width: 580px){
        font-size: 10px;
        line-height: 15px;
    }

    @media screen and (max-width: 425px){
        font-size: 8px;
        line-height: 13px;
    }
`

const MenuBottom = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1200px){
        height: 65%;
    }

    @media screen and (max-width: 768px){
        height: 75%;
    }
`

const BoxCard = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 1200px){
        height: 80%;
        display: flex;
        justify-content: space-around;
    }
`

const Card = styled.div`
    width: 450px;
    height: 250px;
    display: flex;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 1440px){
        width: 385px;
        height: 200px;
    }
`

const Box = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1440px){
        width: 30%;
    }
`

const BoxImg = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #E0E0E0;

    @media screen and (max-width: 1440px){
        width: 100px;
        height: 100px;
    }
`

const Border = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #4985FF;
`

const Img = styled.img`
    width:  70px;
    height: 70px;

    @media screen and (max-width: 1440px){
        width: 50px;
        height: 50px;
    }
`

const CardTitle = styled.div`
    width: 60%;
    height: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const H3 = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 22px;
    color: #000000;

    @media screen and (max-width: 1440px){
        font-size: 18px;
        line-height: 22px;
    }
`

const H6 = styled.h6`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #999999;

    @media screen and (max-width: 1440px){
        font-size: 15px;
        line-height: 25px;
    }
`

const BoxBtn = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
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
  box-shadow: 8px 8px 0px 0px #246dff;
  :active{
    width: 250px;
    box-shadow: -10px -10px 30px -10px #1e1e1e inset, -8px -10px 1px  #246dff;
    transition: 0.1s;
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
`