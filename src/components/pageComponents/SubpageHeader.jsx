import React from "react";
import styled, { keyframes } from 'styled-components';

const PageHeader = styled('div')`
  display: flex; 
  flex-direction: column;
  width: 100vw;
  background-color: #2d8259;
  min-height:12em;
  justify-content: center;
`;

const moveLeft = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;  
  }

  to {
    transform: translateX(0);
  }
`;

const moveRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);    
  }

  to {
    transform: translateX(0);
  }
`;

const Title = styled('div')`
    color: white;
    font-size: 4em;
    align-self: center;
    margin-right: 5em;
    animation: ${moveLeft} 2s linear;
    animation-timing-function: ease-in-out;
`;

const Description = styled('div')`
    color: white;
    font-size: 1.5em;
    align-self: center;
    margin-left: 5em;
    animation: ${moveRight} 2s linear;
    animation-timing-function: ease-in-out;
`;
 
export default function SubpageHeader({
    title,
    description
}) {
  return (
    <PageHeader>
        <Title> {title} </Title>
        <Description>{description}</Description>
    </PageHeader>
  );
}
