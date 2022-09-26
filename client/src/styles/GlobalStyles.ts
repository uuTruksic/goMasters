import { createGlobalStyle } from "styled-components";
import { color } from "./styleHelpers";

const globalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
    height: 100%;
    min-height: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background-color: ${color("background")};
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  img{
    transition: 0.2s;
    cursor: pointer;

    :hover{
      opacity: 0.7;
      transition: 0.2s;
    }
  }

  #root {
    display: flex;
    background-color: ${color("background")};
    color: white;
  }
`;

export default globalStyle;
