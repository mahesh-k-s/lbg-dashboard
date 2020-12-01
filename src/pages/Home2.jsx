import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import Tile from '../components/Tile';
import { Link } from "react-router-dom";
import lpgImage from '../assets/lbg1.jpeg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HomeWrapper = styled('div')`
    padding: 40px;
    background: #419be0; 
    img {
        // margin: 1em;
    }
    div {
        margin: 0 1em;
    }
`;

export default function Home() {
    var settings = {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    };
    return (
        <HomeWrapper>
      <Slider {...settings}>
          <div>
            <img  src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
      </Slider>
      </HomeWrapper>
    );
  }