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
  white: string;
  primaryColor: string;
  opaqueWhite: string;
}

interface FontWeights {
  medium: number;
  large: number;
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
