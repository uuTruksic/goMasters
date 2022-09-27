import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { ThemeProvider } from "styled-components";
import theme from "./styles/defaultTheme";
import GlobalStyle from "./styles/GlobalStyles";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import { ThemeConfig } from "./config/theme.config";

ReactDOM.render(
  <React.StrictMode>
    <ThemeConfig>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
          <Nav />
          <Menu />
        </BrowserRouter>
      </ThemeProvider>
    </ThemeConfig>
  </React.StrictMode>,
  document.getElementById("root")
);
