import { css, DefaultTheme } from "styled-components";

import { IFontTheme, IColorsTheme } from "@/types";

const lightThemeColors: IColorsTheme = {
  gray: {
    f4: "#f4f4f4",
    d2: "#D2D2D2",
    d9: "#D9D9D9",
    g9: "#999999",
    g80: "#808080",
  },
  green: {
    light: "#3AC0B4",
    dark: "#20615D",
  },
  white: "rgba(255, 255, 255, 1)",
  black: "#000000",
  blue: "#3A5D71",
};

const AppFonts = {
  SFPro: "var(--font-sfpro)",
};

export const font: IFontTheme = {
  title: css`
    font-family: ${AppFonts.SFPro};
    font-family: SF Pro;
    font-weight: 510;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: 0;
  `,
  h2: css`
    font-family: ${AppFonts.SFPro};
    font-family: SF Pro;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0;
  `,
  p1: css`
    font-family: ${AppFonts.SFPro};
    font-family: SF Pro;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0;
  `,
  p2: css`
    font-family: ${AppFonts.SFPro};
    font-family: SF Pro;
    font-weight: 510;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0;
  `,
  h3: css`
    font-family: ${AppFonts.SFPro};
    font-family: SF Pro;
    font-weight: 510;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0;
  `,
  p3: css`
    font-family: ${AppFonts.SFPro};
    font-family: SF Pro;
    font-weight: 510;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0;
  `,
};

export const themeLight: DefaultTheme = {
  title: "light",
  colors: lightThemeColors,
  font,
};
