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

export default function Migration() {
  return (    
    <>
      <SubpageHeader title='Migration' description='Migration description content to be here...'/>        
      <PageContent>
        <Title>
          Migration
        </Title>
        <Content>
          <div>
              <video width="500" controls>
                <source src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4" type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
            <div>
                This is the page content for Migration
            </div>
        </Content>          
      </PageContent>
    </>
  );
}