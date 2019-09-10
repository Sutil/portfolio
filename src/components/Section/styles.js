import styled from 'styled-components';
import { lighten } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.section`
  padding: 20px;
  border-bottom: solid 1px #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ImageWrapper = styled.div`
  width: 80%;
  padding: 20px;
  display: flex;
  justify-content: center;

  @media (min-width: 960px) {
    width: 50%;
  }
`;

export const Image = styled.img`
  max-width: 300px;
  max-height: 200px;
  width: auto;
  height: auto;
  border-radius: 10px;

  @media (min-width: 960px) {
    max-width: 400px;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 85%;
  padding: 20px;

  @media (min-width: 960px) {
    width: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  color: #555;
`;

export const Text = styled.p`
  color: #777;
  margin: 5px 0;
`;

export const Tags = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;

  span {
    background: ${lighten(0.5, colors.primary)};
    margin: 5px;
    padding: 3px 10px;
    color: #333;
    border-radius: 4px;
  }
`;

export const Links = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: flex-end;
  align-items: center;

  a {
    margin-left: 20px;
  }
`;
