import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const FooterContent = styled("footer")`
  display: flex; 
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  // background-color:crimson;
  background-image: linear-gradient(to right, red , yellow);
  background: transparent;
  color: #ffffff;
  padding: 0 2em;
  height:3em;
  div {
    font-size: 1em;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
`;

export default function Footer() {
  return (
    <FooterContent>
      <div>This is the footer component</div>
    </FooterContent>
  );
}
