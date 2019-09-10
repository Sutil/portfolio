import styled from 'styled-components';
import { lighten } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 400px;
  border-bottom: solid 3px ${colors.secondary};
  background-image: linear-gradient(
    to bottom,
    ${lighten(0.2, colors.primary)},
    ${colors.primary}
  );
  color: white;

  div {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;

      a {
        color: white;
        margin-right: 10px;
        font-size: 20px;
      }
    }
  }

  @media (min-width: 960px) {
    flex-direction: row;
  }

  @media (min-width: 1366px) {
    border-radius: 10px 10px 0 0;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const Title = styled.h1``;

export const Subtitle = styled.span`
  color: ${colors.secondary};
  margin-bottom: 20px;
`;
