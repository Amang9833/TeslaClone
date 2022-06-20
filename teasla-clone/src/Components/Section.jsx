import React from 'react'
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Fade from "react-reveal/Fade";




function Section({ title, DESCRIPTION, LEFTBUTTON, RIGHTBUTTON, BACKGROUNDIMG }) {
  return (
    <Wrap bgImg={BACKGROUNDIMG}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{DESCRIPTION}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
        <ButtonGroup>
          <LeftButton> {LEFTBUTTON} </LeftButton>
          {RIGHTBUTTON && <RightButton> {RIGHTBUTTON} </RightButton>}
        </ButtonGroup>
          </Fade>
        <DownArrow>
          <Icon
            icon="simple-line-icons:arrow-down"
            color={"white"}
            height={30}
            width={30}
            />
        </DownArrow>
      </Buttons>
    </Wrap>
  );
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: ${(props) => `url('/images/${props.bgImg}')`};

`;

const ItemText = styled.div`
    padding-top:10vh;
    text-align:center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items:center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 25%;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const LeftButton = styled.div`
    background-color:rgba(23, 26, 32, 0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    @media (max-width:768px){
      margin-bottom:10px;
    }
  

`

const RightButton = styled(LeftButton)`
    background:white;
    opacity:0.65;
    color:black;

`;

const DownArrow = styled.div`
    display:flex;
    justify-content:center;
  color: white;
  animation: animationDown infinite 1.5s;
  margin-bottom:10px;
  
`;


const Buttons = styled.div`
    display :flex;
    justify-content:space-between;
    flex-direction:column;
    algin-items:center;
    @media (max-width:768px){
      justify-content:center;
    }

`;
