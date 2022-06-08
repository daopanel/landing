import 'styled-components';

export enum FontFamilyEnum {
  Inter = 'Inter, sans-serif',
  Montserrat = 'Montserrat, sans-serif',
}

type FontTypes = keyof typeof FontFamilyEnum;

interface Fonts {
  Inter: FontFamilyEnum.Inter;
  Montserrat: FontFamilyEnum.Montserrat;
}
interface Colors {
  darkPurple: string;
  deepPurple: string;
  darkPurpleHover: string;
  darkPurpleBorder: string;
  purple: string;
  purpleDisabled: string;
  lightPurple: string;
  white: string;
  dimmedPurple: string;
  dimmedHover: string;
  purpleHighlight: string;
  newMessageColor: string;
  error: string;
  success: string;
  warning: string;
}
export interface Theme {
  colors: Colors;
  fontFamily: Fonts;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fontFamily: Fonts;
  }
}
