import React from 'react';
import styled from 'styled-components';
import Tile from '../components/Tile';
import { Link } from "react-router-dom";
import lpgImage from '../assets/lbg1.jpeg';


const HomeWrapper = styled('div')`
    padding:1em 2em;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 5px;
    align-content: space-evenly;
    min-height: 78vh;
    background-color:#f8f6f4;
    a {
        text-decoration: none;
    }
    // background-image: url(${lpgImage});
`;

const Home = () => {
    return (
        <HomeWrapper>
            <Link to={"/page/accolades"} key='Accolades'>
                <Tile avatarTitle='A' title='Accolades' subHeading='September 14, 2016'>
                        This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the
                    mussels, if you like.
                </Tile>
            </Link>  
            <Link to={"/page/gallery"} key='Gallery'>
                <Tile avatarTitle='G' title='Gallery' subHeading='September 14, 2016'>
                        This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the
                    mussels, if you like.
                </Tile>
            </Link>
            <Link to={"/page/transformation"} key='Transformation'>
                <Tile avatarTitle='T' title='Transformation' subHeading='September 14, 2016'>
                        This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the
                    mussels, if you like.
                </Tile>
            </Link>
            <Link to={"/page/deliveries"} key='Deliveries'>
                <Tile avatarTitle='D' title='Deliveries' subHeading='September 14, 2016'>
                        This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the
                    mussels, if you like.
                </Tile>    
            </Link>          
            <Link to={"/page/valueadds"} key='value-adds'>
                <Tile avatarTitle='V' title='Value Adds' subHeading='September 14, 2016'>
                        This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the
                    mussels, if you like.
                </Tile>
            </Link>
            <Link to={"/page/processimprovements"} key='process-improvements'>
                <Tile avatarTitle='P' title='Process/Service Improvements' subHeading='September 14, 2016'>
                        This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the
                    mussels, if you like.
                </Tile> 
            </Link>
            <Link to={"/page/automation"} key='Automation'>
                <Tile avatarTitle='A' title='Automation' subHeading='September 14, 2016'>
                        This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the
                    mussels, if you like.
                </Tile> 
            </Link>            
            <Link to={"/page/migration"} key='migration'>
                <Tile avatarTitle='M' title='Migration/Upgrades' subHeading='September 14, 2016'>
                        This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the
                    mussels, if you like.
                </Tile> 
            </Link>                        
        </HomeWrapper>
    )
}

export default Home;