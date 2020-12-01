import React from 'react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FullpageAccordion, Panel } from 'react-fullpage-accordion';
import styled, { keyframes } from 'styled-components';

import "react-fullpage-accordion/dist/react-fullpage-accordion.css"

// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './carousel.css';

const HomeWrapper = styled('div')`
  // background-color:crimson;
  // background-image: linear-gradient(to right, red , yellow);
  min-height:45em;
  padding:2em;
`;

const HomeContent = styled('div')`
  
`;

const CarouselWrapper = styled('div')`
  
`;

const ImgDescr = styled('div')`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    // font-size: 5em;
font-size: 4em;
    align-self: center;
    margin-right: 5em;
    opacity:0;
    // animation: ${moveLeft} 2s linear;
    // animation-timing-function: ease-in-out;
`;

const Description = styled('div')`
    color: white;
    // font-size: 2.5em;
font-size: 1.5em;
    align-self: center;
    margin-left: 5em;
    opacity:0;
    // animation: ${moveRight} 2s linear;
    // animation-timing-function: ease-in-out;
`;

export default function Home() {
  return (
    <HomeWrapper>
    {/* <FullpageAccordion height="500px">
      <Panel itemId="0" background={'https://source.unsplash.com/rFKUFzjPYiQ/1500x1500'}>
          <p>Give</p>
          <p>
              <a href="/duckPage">
                  Duck!
              </a>
          </p>
          <p>a try!</p>
      </Panel>
      <Panel itemId="1" background={'https://source.unsplash.com/ITjiVXcwVng/1500x1500'}>
          <p>Give</p>
          <p>
              <a href="/oberynPage">
                  Oberyn!
              </a>
          </p>
          <p>a try!</p>
      </Panel>
  </FullpageAccordion> */}
    <HomeContent>
        <div>
          <div>

          </div>
        </div>
        <div>
          

        </div>
    </HomeContent>
    </HomeWrapper>
  )
}