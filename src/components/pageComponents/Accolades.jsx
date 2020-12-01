import React from "react";
import styled from 'styled-components';
import SubpageHeader from './SubpageHeader'

const PageContent = styled('div')`
  display: flex; 
  padding:3em;
  flex-direction: column;
  color: #5d5858;
`;

const Title = styled('span')`
  font-size: 2em;
  margin: 1em 0;
`;

const Content = styled('div')`
  display: flex;
  div {
    margin:1em;
  }
`;

const  ImageContent = styled('div')`
  padding: 12em;
  background-image: url("https://picsum.photos/800/300/?random");
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-repeat: no-repeat;
  background-position: center;
  background-color: black;
`;

export default function Accolades() {
  return ( 
      <>
        <SubpageHeader title='Accolades' description='Accolades description content to be here...'/>        
        <PageContent>
          <Title>
            Accolades
          </Title>
          <Content>
            <ImageContent /> 
            <div>
                This is the page content for Accolades
            </div>            
          </Content>          
        </PageContent>
      </>
  );
}