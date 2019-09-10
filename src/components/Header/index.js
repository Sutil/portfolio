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
        src="https://media.licdn.com/dms/image/C4D03AQHtk_6t_yA0Ng/profile-displayphoto-shrink_200_200/0?e=1573689600&v=beta&t=a1JJh9vrUPE3iAPvwTCBO9Qo7ebSXsOJO2Kwayt5bJ8"
        alt="Eduardo Sutil Photo"
      />
    </Container>
  );
}
