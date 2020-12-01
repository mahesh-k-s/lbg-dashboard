import React, { useState } from "react";
import styled from 'styled-components';
import Lightbox from 'react-image-lightbox';
import SubpageHeader from './SubpageHeader';
import GalleryCarousel from '../GalleryCarousel';
import ImageCard from '../ImageCard';

const PageContent = styled('div')`
  display: flex; 
  padding:3em;
  flex-direction: column;
  color: #5d5858;
`;
const CarouselWrapper =styled('div')`
  background-color: #002e20;
  height: 300px;
`;

const Title = styled('span')`
  font-size: 2em;
  margin: 1em 0;
`;

const Content = styled('div')`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function Gallery() {

const [lightboxState, setLightboxState] = useState({
  photoIndex: 0,
  isOpen: false,
});
  
const cardContent = [
  {
    img: "https://picsum.photos/800/300/?random",
    title: 'Image 1',
    description: ' this is a sample description for the image'
  },
  {
    img: "https://picsum.photos/800/301/?random",
    title: 'Image 2',
    description: ' this is a sample description for the image'
  },
  {
    img: "https://picsum.photos/800/302/?random",
    title: 'Image 3',
    description: ' this is a sample description for the image'
  },
  {
    img: "https://picsum.photos/800/303/?random",
    title: 'Image 4',
    description: ' this is a sample description for the image'
  },
  {
    img: "https://picsum.photos/800/304/?random",
    title: 'Image 5',
    description: ' this is a sample description for the image'
  },
  {
    img: "https://picsum.photos/800/305/?random",
    title: 'Image 6',
    description: ' this is a sample description for the image'
  },
  {
    img: "https://picsum.photos/800/306/?random",
    title: 'Image 7',
    description: ' this is a sample description for the image'
  },
  {
    img: "https://picsum.photos/800/307/?random",
    title: 'Image 8',
    description: ' this is a sample description for the image'
  },
];

const { photoIndex, isOpen } = lightboxState;
  return (    
    <>
      {/* <SubpageHeader title='Gallery' description='Gallery description content to be here...'/>         */}
      <CarouselWrapper>
          <GalleryCarousel/>
      </CarouselWrapper>
      <PageContent>
          <Title>
              Gallery
          </Title>
          <Content>
            { 
              cardContent.map((obj, index) => 
                <ImageCard {...obj} openLightBox={() =>setLightboxState({ isOpen: true, photoIndex:index })} />
              )
            }            
          </Content>          
      </PageContent>

      {isOpen && (
        <Lightbox
          mainSrc={cardContent[photoIndex].img}
          nextSrc={cardContent[(photoIndex + 1) % cardContent.length].img}
          prevSrc={cardContent[(photoIndex + cardContent.length - 1) % cardContent.length].img}
          onCloseRequest={() => setLightboxState({ isOpen: false })}
          onMovePrevRequest={() =>
            setLightboxState({...lightboxState, ...{
              photoIndex: (photoIndex + cardContent.length - 1) % cardContent.length,
            }})
          }
          onMoveNextRequest={() => {            
            setLightboxState({...lightboxState, ...{
              photoIndex: (photoIndex + 1) % cardContent.length,
            }})
          }
          }
        />
      )}
    </>
  );
}