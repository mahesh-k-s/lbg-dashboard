import React from 'react';
import styled from 'styled-components';

const SideNav = styled('section')`
    height: 100vh;
    width: 60%;
    max-width:30em;
    position: fixed;
    padding-left: 1rem;
    padding-right: 1rem;
    z-index: 50;
    top: 0;
    right: 0;
    background-color: #fff;
    overflow-x: hidden;
    transition: transform .5s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .5s cubic-bezier(0,0,.2,1) 0ms;
    padding-top: 1em;
    border-bottom-width: 1px;
    border-color: #b8c2cc;
    transform: ${(props) => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};    
    li {
        padding:1em;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
        :hover {
            background: #fec442;
        }
        
        @media only screen and (min-device-width: 320px) and (max-device-width: 479px) {
            font-size: 18px;
        }
    }
`;

const Title = styled('div')`
   display: flex;
   p {
       color: #004e37;
       font-size: 1.4em;
       font-weight: 300;
   }

    span {
        position: absolute;
        top: -0.2em;
        right: 25px;
        font-size: 4em;
        color:green;
        font-weight: lighter;
        cursor:pointer;
    }
`;


const SideBar = ({ onClick, isOpen }) => {    
    return (
        <SideNav isOpen={isOpen}>
            <header>
                <Title>
                    <p>Side Bar</p>
                    <span onClick={onClick} data-testid='closeBtn'>&times;</span>
                </Title>
                
            </header>            
        </SideNav>
    )
}
export default SideBar;