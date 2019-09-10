import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Exo&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    --webkit-font-smoothing: antialiased;
  }

  body {
    background: #eee;
  }

  body, input, button {
    font-family: 'Exo', sans-serif;
    font-size: 14px;
  }

  h1 {
    font-size: 50px;
  }

  #root {
    background: #fff;
    max-width: 1366px;
    margin: 0 auto;
    padding: 0 0 50px;
  }

  button {
    cursor: pointer;
  }

  .icon {
    font-size: 30px;
  }
`;
