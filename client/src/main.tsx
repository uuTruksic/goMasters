import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { ThemeProvider } from "styled-components";
import theme from "./styles/defaultTheme";
import GlobalStyle from "./styles/GlobalStyles";
import Nav from "./components/Nav";
import { MenuProvider } from "./providers/MenuProvider";
import { SWRConfig } from "swr";
import { Fetcher } from "./network";
import { GetSession } from "./utils/getSession";
import { UserContextProvider } from "./context/user";

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher: (url) => Fetcher(url, GetSession()) }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <MenuProvider>
            <Router />
            <Nav />
          </MenuProvider>
        </BrowserRouter>
      </ThemeProvider>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);
