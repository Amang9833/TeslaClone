import React, { useState } from "react";
import styled from "styled-components";


function Header() {
  const [show, setShow] = useState(false);



  const handleSidebar = () => {
    setShow(!show);
  };
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        <a href="#"> Model S </a>
        <a href="#"> Model 3 </a>
        <a href="#"> Model X </a>
        <a href="#"> Model Y </a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setShow(!show)}>Menu</CustomMenu>
      </RightMenu>
        <BurgerNav show={show}>
          <div>
            <p onClick={handleSidebar} id="closeBtn">
              X
            </p>
          </div>
          <li>
            <a href="#">Exiting Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in Inventory</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadaster</a>
          </li>
          <li>
            <a href="#"> Test Drive</a>
          </li>
          <li>
            <a href="#">Insurance</a>
          </li>
          <li>
            <a href="#"> Semi Charging Powerwall</a>
          </li>
          <li>
            <a href="#"> Energy</a>
          </li>
          <li>
            <a href="#">Utilities</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Find Us</a>
          </li>
        </BurgerNav>
    </Container> 
  );
}

export default Header ;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; 

`


const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled.a`
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px;
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  list-style: none;
  width: 300px;
  padding: 20px;
  text-align: start;
  width: 300px;
  cursor: pointer;
  display: ${(props) => (props.show ? "block" : "none")};
  transition: display 1s ease;
  opacity:0.89;

  div {
    margin-bottom: 40px;
    cursor: pointer;

    p {
      font-size: 30px;
      font-weight: 200;
      text-align: end;
      padding-left:15px;

    }
    p:hover {
      // background: lightgray;
      opacity: 0.8;
    }
  }

  li {
    padding: 15px 0;
    width: 100%;
    border-radius: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-left:15px;

    a {
      font-weight: 600;
    }
  }

  li:hover {
    background: lightgray;
    opacity: 0.8;
  }
`;
