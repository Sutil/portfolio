import React from 'react';
import { FaBitbucket, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, Title, Image, Subtitle } from './styles';

export default function Heder() {
  return (
    <Container>
      <div>
        <Title>Eduardo Sutil</Title>
        <Subtitle>Software developer</Subtitle>
        <div>
          <a
            href="https://www.linkedin.com/in/edusutil"
            alt="Access Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sutil"
            alt="Access Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://bitbucket.com/Sutil"
            alt="Access Butbucket"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBitbucket />
          </a>
        </div>
      </div>
      <Image
        src="https://s.gravatar.com/avatar/16c6d325023a0fac562bab2acd83be69?s=200"
        alt="Eduardo Sutil Photo"
      />
    </Container>
  );
}
