import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Tile from '../components/Tile';
import { Link, useParams } from "react-router-dom";

import Accolades from '../components/pageComponents/Accolades';
import Gallery from '../components/pageComponents/Gallery';
import Transformation from '../components/pageComponents/Transformation';
import Deliveries from '../components/pageComponents/Deliveries';
import Valueadds from '../components/pageComponents/Valueadds';
import Processimprovements from '../components/pageComponents/Processimprovements';
import Automation from '../components/pageComponents/Automation';
import Migration from '../components/pageComponents/Migration';
import BackArrow from '../Icons/BackArrow';


const SubpageWrapper = styled('div')`  
    min-height: 81.5vh;
`;

const Backbutton = styled('button')`
    border-radius: 50%;    
    background-color: white;
    border: none;
    color: white;
    padding: 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    position: fixed;
    left: 2em;
    bottom: 16px;
    z-index: 100;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
 

const SubPage = () => {
    let { pageComponent } = useParams();
    const history = useHistory();
    const getPageComponent = (pageComponent) => {
        switch(pageComponent) {
            case 'accolades': 
                return <Accolades />
            case 'gallery':
                return <Gallery />
            case 'transformation':
                return <Transformation />
            case 'deliveries':
                return <Deliveries />
            case 'valueadds':
                return <Valueadds />
            case 'processimprovements':
                return <Processimprovements />
            case 'automation':
                return <Automation />
            case 'migration':
                return <Migration />
            default: 
                return <div>This is a subpage component </div>
        }
    }

    return (
        <SubpageWrapper>
            {getPageComponent(pageComponent)}
            <Backbutton onClick={() => history.push('/')}>
                <BackArrow size={27} fill="#000000" />
            </Backbutton>
        </SubpageWrapper>
    )
}

export default SubPage;