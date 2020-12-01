import React, {useState} from 'react';
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
  justify-content: space-between;
  // padding: 2em;
  display :flex;
  // animation: ${moveUp} 2s linear;
  // animation-timing-function: ease-in-out;  
`;

const CarouselWrapper = styled('div')`
  min-height:35rem;
  // border:1px solid black;
  display:flex;
  width:90vw;
  margin:auto;
`;

const CarouselItem = styled('div')`
  border: 1px solid white;
  border-top-left-radius: ${props => props.leftRoundBorder ? '1em' : 'none'};
  border-bottom-left-radius: ${props => props.leftRoundBorder ? '1em' : 'none'};
  border-top-right-radius: ${props => props.rightRoundBorder ? '1em' : 'none'};
  border-bottom-right-radius: ${props => props.rightRoundBorder ? '1em' : 'none'};
  display:flex;
  background-color:#5670ba;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const CarouselItemTitle = styled('div')`
  color: white;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 3px;
  justify-content: center;
  display: flex;
  align-items: center;
  writing-mode:vertical-rl;
  transform:scale(-1);
  width:3em;
  margin:auto auto;
`;

const CarouselItemDescr = styled('div')`
  color: white;
  justify-content: center;
  display: flex;
  height: 100%;
  align-items: center;
  opacity:${props => props.isActive ? 1: 0};
  transition: opacity .4s, width 1s;  
  // border: 1px solid black;
  width:${props => props.isActive ? 'calc(80vw - 32rem)': 0};
  background-image: ${props => `url(${props.imgSrc})`};
  backface-visibility: visible;
  background-size: cover;
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
  const [isItemActive, setIsItemActive] = useState(false);
  const [activeItem, setActiveItem] = useState('accolades');
  return (
    <HomeWrapper>
    <CarouselWrapper>
      <CarouselItem onClick={() => setActiveItem('accolades')} leftRoundBorder>
        <CarouselItemTitle>Accolades</CarouselItemTitle>
        <CarouselItemDescr imgSrc='https://picsum.photos/id/1018/1000/600/' isActive={activeItem === 'accolades'}>Accolades content to go here.....</CarouselItemDescr>
      </CarouselItem>
      <CarouselItem onClick={() => setActiveItem('automation')}>
        <CarouselItemTitle>Automation</CarouselItemTitle>
        <CarouselItemDescr imgSrc='https://picsum.photos/id/1019/1000/600/' isActive={activeItem === 'automation'}>Accolades content to go here.....</CarouselItemDescr>
      </CarouselItem>
      <CarouselItem onClick={() => setActiveItem('deliveries')}>
        <CarouselItemTitle>Deliveries</CarouselItemTitle>
        <CarouselItemDescr imgSrc='https://picsum.photos/id/1015/1000/600/' isActive={activeItem === 'deliveries'}>Accolades content to go here.....</CarouselItemDescr>
      </CarouselItem>
      <CarouselItem onClick={() => setActiveItem('gallery')}>
        <CarouselItemTitle>Gallery</CarouselItemTitle>
        <CarouselItemDescr imgSrc='https://picsum.photos/id/1018/1000/600/' isActive={activeItem === 'gallery'}>Accolades content to go here.....</CarouselItemDescr>
      </CarouselItem>
      <CarouselItem onClick={() => setActiveItem('transformation')}>
        <CarouselItemTitle>Transformation</CarouselItemTitle>
        <CarouselItemDescr imgSrc='https://picsum.photos/id/1015/1000/600/' isActive={activeItem === 'transformation'}>Accolades content to go here.....</CarouselItemDescr>
      </CarouselItem>
      <CarouselItem onClick={() => setActiveItem('valueadds')}>
        <CarouselItemTitle>ValueAdds</CarouselItemTitle>
        <CarouselItemDescr imgSrc='https://picsum.photos/id/1019/1000/600/' isActive={activeItem === 'valueadds'}>Accolades content to go here.....</CarouselItemDescr>
      </CarouselItem>
      <CarouselItem onClick={() => setActiveItem('processes')} rightRoundBorder>
        <CarouselItemTitle>Processes</CarouselItemTitle>
        <CarouselItemDescr imgSrc='https://picsum.photos/id/1015/1000/600/' isActive={activeItem === 'processes'}>Accolades content to go here.....</CarouselItemDescr>
      </CarouselItem>
     

      {/* <Splide
        options={ {
          rewind : true,
          gap    : '1rem',
          autoplay    : true,
          // perPage: 1,
      perPage: 3,
          perMove: 1,
          cover  : true,
	        height : '25rem'
        } }
        >
        <SplideSlide>            
            <img  src="https://picsum.photos/id/1018/1000/600/" />
            <ImgDescr className='content'>
                <Title className='title'> Tile Title </Title>
                <Description className='descr'> Tile description goes here ....</Description>
            </ImgDescr>
        </SplideSlide>
        <SplideSlide>        
            <img  src="https://picsum.photos/id/1015/1000/600/" />
            <ImgDescr className='content'>
                <Title className='title'> Tile Title </Title>
                <Description className='descr'> Tile description goes here ....</Description>
            </ImgDescr>
        </SplideSlide>
        <SplideSlide>        
            <img  src="https://picsum.photos/id/1019/1000/600/" />
            <ImgDescr className='content'>
                <Title className='title'> Tile Title </Title>
                <Description className='descr'> Tile description goes here ....</Description>
            </ImgDescr>
        </SplideSlide>
        <SplideSlide>            
            <img  src="https://picsum.photos/id/1018/1000/600/" />
            <ImgDescr className='content'>
                <Title className='title'> Tile Title </Title>
                <Description className='descr'> Tile description goes here ....</Description>
            </ImgDescr>
        </SplideSlide>
        <SplideSlide>            
            <img  src="https://picsum.photos/id/1019/1000/600/" />
            <ImgDescr className='content'>
                <Title className='title'> Tile Title </Title>
                <Description className='descr'> Tile description goes here ....</Description>
            </ImgDescr>
        </SplideSlide>
        <SplideSlide>            
            <img  src="https://picsum.photos/id/1018/1000/600/" />
            <ImgDescr className='content'>
                <Title className='title'> Tile Title </Title>
                <Description className='descr'> Tile description goes here ....</Description>
            </ImgDescr>
        </SplideSlide>
        <SplideSlide>            
            <img  src="https://picsum.photos/id/1015/1000/600/" />
            <ImgDescr className='content'>
                <Title className='title'> Tile Title </Title>
                <Description className='descr'> Tile description goes here ....</Description>
            </ImgDescr>
        </SplideSlide>
        <SplideSlide>            
            <img  src="https://picsum.photos/id/1019/1000/600/" />
            <ImgDescr className='content'>
                <Title className='title'> Tile Title </Title>
                <Description className='descr'> Tile description goes here ....</Description>
            </ImgDescr>
        </SplideSlide>
      </Splide>   */}
    </CarouselWrapper>
    <HomeContent>
        {/* <div className='aboutUs animate1'>
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
        </div> */}
        <div className='aboutUs'>
        <Splide
          options={ {
            type: 'fade',
            // autoplay: true,
            // rewind : true,
            width  : 400,
            height: '9rem',
            gap    : '1rem',
            arrows: false,
            cover: true,
            breakpoins: {
              640: {
                height: '6rem',
              }
            },
            focus:'center'
          } }
        >
          <SplideSlide>  
            <div className='splide__slide__container'>
              <img  src="https://picsum.photos/id/1015/1000/600/" />              
            </div> 
            <div>sdfsfsdfsdfjjkaskfjasbkjasbfkab</div>       
            
          </SplideSlide>
          <SplideSlide>
          <div className='splide__slide__container'>
            <img  src="https://picsum.photos/id/1019/1000/600/" />
            
            </div> 
            <div>sdfsfsdfsdfjjkaskfjasbkjasbfkab</div>
          </SplideSlide>
          {/* <SplideSlide>
            <img  src="https://picsum.photos/id/1018/1000/600/" />
          </SplideSlide>
          <SplideSlide>
            <img  src="https://picsum.photos/id/1019/1000/600/" />
          </SplideSlide> */}
        </Splide>
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