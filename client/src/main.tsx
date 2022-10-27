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
import { MenuProvider } from "./providers/MenuProvider";
import { SWRConfig } from "swr";

export async function Fetcher(url: string, token: string) {
  const req = await fetch(`http://localhost:3000${url}`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  if (req.status == 403) {
    EmergencyLogOut();
  }

  return await req.json();
}

function EmergencyLogOut() {
  localStorage.removeItem("session");
  location.replace("/prihlaseni");
}

function GetSession() {
  let session = localStorage.getItem("session");
  if (!session) {
    return "";
  }
  return session;
}

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher: (url) => Fetcher(url, GetSession()) }}>
      <ThemeConfig>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <MenuProvider>
              <Router />
              <Nav />
              <Menu />
            </MenuProvider>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeConfig>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);
