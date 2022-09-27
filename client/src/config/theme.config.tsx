import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

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
    background: {
      default: themePalette.BG,
    },
  },

  typography: {
    allVariants: {
      color: "white",
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
