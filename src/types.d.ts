import "styled-components";

import ru from "../locales/ru.json";

type Messages = typeof ru;

declare global {
  type IntlMessages = Messages;
}

export interface IFontTheme {
  title: RuleSet<object>;
  h2: RuleSet<object>;
  p1: RuleSet<object>;
  p2: RuleSet<object>;
  h3: RuleSet<object>;
  p3: RuleSet<object>;
}

export interface IColorsTheme {
  gray: {
    f4: string;
    d2: string;
    d9: string;
    g9: string;
    g80: string;
  };
  green: {
    light: string;
    dark: string;
  };
  white: string;
  black: string;
  blue: string;
}

export type ThemeTitleType = "light";

declare module "styled-components" {
  export interface DefaultTheme {
    title: ThemeTitleType;
    colors: IColorsTheme;
    font: IFontTheme;
  }
}
