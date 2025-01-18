import React from 'react';
import styled, { keyframes } from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center; /* Ensure text is centered across all devices */
  margin: 50px 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Title = styled.h1`
  font-size: 3.5em;
  margin-bottom: 0.5em;
  color: #ffffff;
  background: linear-gradient(90deg, #ffffff, #00d1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 3em;
  }

  @media (max-width: 576px) {
    font-size: 2.5em;
  }
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

const Subtitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 1em;
  color: transparent;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #ffffff;
  background: linear-gradient(90deg, #ffffff, #00d1ff);
  -webkit-background-clip: text;
  animation: ${typing} 4s steps(20, end) infinite alternate, ${blink} 0.8s step-end infinite;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 576px) {
    font-size: 1.8em;
  }
`;

const Description = styled.p`
  font-size: 1.2em;
  max-width: 700px;
  line-height: 1.6;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 576px) {
    font-size: 0.9em;
  }
`;

export default function Content() {
  return (
    <ContentWrapper>
      <Title>Hi, I'm Rosan</Title>
      <Subtitle>Full Stack Developer</Subtitle>
      <Description>
        I specialize in building dynamic and responsive web applications, handling both front-end and back-end development.
        With a passion for coding and solving complex challenges, I deliver seamless solutions that enhance user experience and drive business growth.
      </Description>
    </ContentWrapper>
  );
}
