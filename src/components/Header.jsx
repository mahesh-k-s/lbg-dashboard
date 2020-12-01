import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../Icons/Logo';

const HeaderContent = styled("header")`
  display: flex; 
  font-size: 2.5em;
  // background-color: crimson;
  // background-image: linear-gradient(to right, red , yellow);
  height: 3em;
  color: #ffffff;
  align-items: center;
  padding: 0 2em;
`;

const Title = styled("div")`
    display: flex;
    justify-content: space-evenly;
    font-size: 1em;
    width:70%;
`;

const MenuIcon = styled('span')`
    cursor: pointer;
`;
 
export default function Header({ openSideBar }) {
  return (
    <HeaderContent>
        <Link to='/'><Logo></Logo></Link>
        <Title>Customer Contacts</Title>    
        {/* <MenuIcon onClick={openSideBar}>&#9776;</MenuIcon>   */}
    </HeaderContent>
  );
}
