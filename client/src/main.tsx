import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { ThemeProvider } from "styled-components";
import theme from "./styles/defaultTheme";
import GlobalStyle from "./styles/GlobalStyles";
import Nav from "./components/Nav";
import Menu from "./components/Menu";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Nav />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
