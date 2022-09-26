import theme, { Theme } from "./defaultTheme";

export const color = (colorKey: keyof Theme["colors"]) =>
  theme.colors[colorKey];

export const fontSize = (colorKey: keyof Theme["fontSizes"]) =>
  theme.fontSizes[colorKey];
