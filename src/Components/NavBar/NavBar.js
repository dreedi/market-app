import React from "react";
import styled from "styled-components";
import logoImg from '../../Images/logo.svg'
import userIcon from '../../Images/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #299b01;
    color: #fff;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;
const ImgLogo = styled.img`
    width: 50px;
`;
const ButtonLogin = styled.button`
    font-size: 16px;
    color: #fff;
    text-transform: uppercase;
    border: none;
    background-color: transparent;
    background-image: url(${userIcon});
    background-repeat: no-repeat;
    background-position: center top;
    padding-top: 38px;
`;



export const NavBar = () => {
 return (
    <NavBarStyled>
        <Logo>
       <ImgLogo src ={logoImg} alt = 'logo'/>
      <H1>Burgers</H1>
      </Logo>
      <ButtonLogin>Войти</ButtonLogin>

    </NavBarStyled>
 )
}