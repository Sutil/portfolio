import React from 'react';
import { FaGithub, FaGooglePlay, FaBitbucket } from 'react-icons/fa';
import { MdPhonelink } from 'react-icons/md';
import { IconContext } from 'react-icons';
import colors from '../../styles/colors';

import {
  Container,
  Image,
  Infos,
  Title,
  Text,
  ImageWrapper,
  Tags,
  Links,
} from './styles';

export default function Section({ item }) {
  return (
    <IconContext.Provider
      value={{ color: `${colors.secondary}`, className: 'icon' }}
    >
      <Container>
        <ImageWrapper>
          <Image src={item.image} alt="Gif of footshos project" />
        </ImageWrapper>
        <Infos>
          <Title>{item.title}</Title>
          {typeof item.description === 'string' ? (
            <Text>{item.description}</Text>
          ) : (
            item.description.map(p => <Text key={p}>{p}</Text>)
          )}
          <Tags>
            {item.tags && item.tags.map(tag => <span key={tag}>{tag}</span>)}
          </Tags>
          <Links>
            {item.github && (
              <a
                href={item.github}
                title="See the Github repository"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            )}

            {item.bitbucket && (
              <a
                href={item.bitbucket}
                title="See the Bitbucket repository"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBitbucket />
              </a>
            )}

            {item.playStore && (
              <a
                href={item.playStore}
                title="Access Play Store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGooglePlay />
              </a>
            )}

            {item.production && (
              <a
                href={item.production}
                title="See it running"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdPhonelink />
              </a>
            )}
          </Links>
        </Infos>
      </Container>
    </IconContext.Provider>
  );
}
