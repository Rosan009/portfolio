import React from 'react';
import styled, { keyframes } from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px; /* Add padding for better spacing on smaller screens */

  @media (max-width: 768px) {
    align-items: center; /* Center align on tablet and mobile */
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 0.5em;
  color: #ffffff;
  background: linear-gradient(90deg, #ffffff, #d8d8d8); /* Gradient colors */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.8em; /* Smaller font size on tablet */
  }

  @media (max-width: 576px) {
    font-size: 2.4em; /* Even smaller font size on mobile */
  }
`;

const typing = keyframes`
  0%, 100% { width: 0; }
  50% { width: 100%; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
`;

const Subtitle = styled.h2`
  font-size: 2em;
  margin-bottom: 1em;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.15em solid black;
  background: linear-gradient(90deg, #ffffff, #d8d8d8); /* Gradient colors */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${typing} 8s steps(40, end) infinite, ${blink} 0.75s step-end infinite;

  @media (max-width: 768px) {
    font-size: 1.8em; /* Smaller font size on tablet */
  }

  @media (max-width: 576px) {
    font-size: 1.5em; /* Even smaller font size on mobile */
  }
`;

const Description = styled.p`
  font-size: 1.2em;
  max-width: 600px;
  color: #ffffff; /* White text color */

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Smaller font size on tablet */
  }

  @media (max-width: 576px) {
    font-size: 1rem; /* Even smaller font size on mobile */
  }
`;

export default function Content() {
  return (
    <ContentWrapper>
      <Title>Hi, I'm Rosan</Title>
      <Subtitle>Full Stack Developer</Subtitle>
      <Description>
        I specialize in building web applications from front-end to back-end. With a passion for coding and a knack for problem-solving, I strive to create seamless and efficient solutions for businesses and users.
      </Description>
    </ContentWrapper>
  );
}
