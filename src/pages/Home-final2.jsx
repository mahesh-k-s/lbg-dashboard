import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled, { keyframes } from 'styled-components';
import HomeIcon  from '../Icons/HomeIcon';
import Bank from '../Icons/Bank';
import Finance from '../Icons/Finance';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './carousel.css';

const HomeWrapper = styled('div')`
  // background-color:crimson;
  // background-image: linear-gradient(to right, red , yellow);
  min-height:45em;
  padding:2em;
`;

const moveUp = keyframes`
  from {
    transform: translateY(25%);
    opacity: 0;  
  }
  to {
    transform: translateY(0);
  }
`;

const HomeContent = styled('div')`
  justify-content: center;
  padding: 2em;
  display :flex;
  // animation: ${moveUp} 2s linear;
  // animation-timing-function: ease-in-out;  
`;

const CarouselWrapper = styled('div')`
  
`;

const ImgDescr = styled('div')`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: transform .2s;
    
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

const SliderTitle = styled('div')`
  color: white;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 3px;
  justify-content: center;
  display: flex;
  height: 100%;
  align-items: center;
  transform: rotate(270deg);
`;

const SliderContent = styled('div')`
  display: flex;
  height:100%;
`;

const SliderDescription = styled('div')`
  color: white;
  justify-content: center;
  display: flex;
  height: 100%;
  align-items: center;
  opacity:0;
  transition: opacity .4s;  
`;

export default function Home() {
  return (
    <HomeWrapper>
    <CarouselWrapper>     
      <Splide
        options={ {
          rewind : true,
          gap    : '1rem',
          // autoplay    : true,
          // perPage: 1,
      perPage: 8,
          perMove: 1,
          cover  : true,
	        height : '25rem'
        } }
        >
        <SplideSlide>            
            <img  src="https://picsum.photos/id/1018/1000/600/" />
            <SliderContent>
              <SliderTitle>Accolades</SliderTitle>
              <SliderDescription className='sliderdescr'>Accolades content to go here.....</SliderDescription>
            </SliderContent>            
            {/* <ImgDescr className='content'>
                <Title className='title'> Tile Title </Title>
                <Description className='descr'> Tile description goes here ....</Description>
            </ImgDescr> */}
        </SplideSlide>
        <SplideSlide>        
            <img  src="https://picsum.photos/id/1015/1000/600/" />
            <SliderContent>
              <SliderTitle>Automation</SliderTitle>
              <SliderDescription className='sliderdescr'>Automation content to go here.....</SliderDescription>
            </SliderContent>
            {/* <ImgDescr className='content'>
                <Title className='title'> Tile Title </Title>
                <Description className='descr'> Tile description goes here ....</Description>
            </ImgDescr> */}
        </SplideSlide>
        <SplideSlide>        
            <img  src="https://picsum.photos/id/1019/1000/600/" />
            <SliderContent>
              <SliderTitle>Deliveries</SliderTitle>
              <SliderDescription className='sliderdescr'>Deliveries content to go here.....</SliderDescription>
            </SliderContent>
            {/* <ImgDescr className='content'>
                <Title className='title'> Tile Title </Title>
                <Description className='descr'> Tile description goes here ....</Description>
            </ImgDescr> */}
        </SplideSlide>
        <SplideSlide>            
            <img  src="https://picsum.photos/id/1018/1000/600/" />
            <SliderContent>
              <SliderTitle>Gallery</SliderTitle>
              <SliderDescription className='sliderdescr'>Gallery content to go here.....</SliderDescription>
            </SliderContent>
            {/* <ImgDescr className='content'>
                <Title className='title'> Tile Title </Title>
                <Description className='descr'> Tile description goes here ....</Description>
            </ImgDescr> */}
        </SplideSlide>
        <SplideSlide>            
            <img  src="https://picsum.photos/id/1019/1000/600/" />
            <SliderContent>
              <SliderTitle>Migration</SliderTitle>
              <SliderDescription className='sliderdescr'>Migration content to go here.....</SliderDescription>
            </SliderContent>
            {/* <ImgDescr className='content'>
                <Title className='title'> Tile Title </Title>
                <Description className='descr'> Tile description goes here ....</Description>
            </ImgDescr> */}
        </SplideSlide>
        <SplideSlide>            
            <img  src="https://picsum.photos/id/1018/1000/600/" />
            <SliderContent>
              <SliderTitle>Processes</SliderTitle>
              <SliderDescription className='sliderdescr'>Processes content to go here.....</SliderDescription>
            </SliderContent>
            {/* <ImgDescr className='content'>
                <Title className='title'> Tile Title </Title>
                <Description className='descr'> Tile description goes here ....</Description>
            </ImgDescr> */}
        </SplideSlide>
        <SplideSlide>            
            <img  src="https://picsum.photos/id/1015/1000/600/" />
            <SliderContent>
              <SliderTitle>Transformation</SliderTitle>
              <SliderDescription className='sliderdescr'>Transformation content to go here.....</SliderDescription>
            </SliderContent>
            {/* <ImgDescr className='content'>
                <Title className='title'> Tile Title </Title>
                <Description className='descr'> Tile description goes here ....</Description>
            </ImgDescr> */}
        </SplideSlide>
        <SplideSlide>            
            <img  src="https://picsum.photos/id/1019/1000/600/" />
            <SliderContent>
              <SliderTitle>Value Adds</SliderTitle>
              <SliderDescription className='sliderdescr'>Value Adds content to go here.....</SliderDescription>
            </SliderContent>
            {/* <ImgDescr className='content'>
                <Title className='title'> Tile Title </Title>
                <Description className='descr'> Tile description goes here ....</Description>
            </ImgDescr> */}
        </SplideSlide>
      </Splide>  
    </CarouselWrapper>
    <HomeContent>
        <div className='aboutUs animate1'>
          <div className='circularBox' style={{borderColor: '#c83349'}}>
            <HomeIcon size={100} fill="#c83349" />
          </div>
          <div className='aboutText'>
                Content 1 to be filled here....
          </div>
        </div>
        <div className='aboutUs animate2'>
          <div className='circularBox' style={{borderColor: '#fff000'}}>
            <Bank size={100} fill="#fff000" />
          </div>
          <div className='aboutText'>
                Content 3 to be filled here....
          </div>
        </div>
        <div className='aboutUs animate3'>
          <div className='circularBox' style={{borderColor: '#36486b'}}>
            <Finance size={100} fill="#36486b" />
          </div>
          <div className='aboutText'>
                Content 2 to be filled here....
          </div>
        </div>
    </HomeContent>
    </HomeWrapper>
  )
}