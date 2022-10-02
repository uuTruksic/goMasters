import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { red, teal } from "@mui/material/colors";

type ThemeProp = {
  children: JSX.Element;
};

enum themePalette {
  BG = "#051726",
  WHITE = "#FFFFFF",
  LIME = "#81FFD9",
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: themePalette.LIME,
    },

    background: {
      default: themePalette.BG,
    },
  },

  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          "&::after": {
            borderBottomColor: themePalette.LIME,
          },
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
