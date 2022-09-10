import 'styled-components';

interface BreakPoints {
  tabletDesktop: string;
  desktopUp: string;
  tabletUp: string;
  mobileDown: string;
}

interface Colors {
  dark: string;
  light: string;
  white: string;
}

interface Font {
  sizes: Sizes;
  families: Families;
}

interface Sizes {
  900: string;
  800: string;
  700: string;
  600: string;
  500: string;
  400: string;
  300: string;
  200: string;
}

interface Families {
  serif: string;
  sansCond: string;
  sansNormal: string;
}

interface Utils {
  general: GeneralUtils;
  background: BackgroundUtils;
  typography: TypographyUtils;
}

interface GeneralUtils {
  flex: (gap?: string) => string;
  grid: (gap?: string) => string;
  block: string;
  flow: (space: 'normal' | 'small' | 'big' = 'normal') => string;
}

interface BackgroundUtils {
  dark: string;
  accent: string;
  white: string;
}

interface TypographyUtils {
  letterSpacing: LetterSpacingUtils;
  family: FamilyUtils;
  size: SizeUtils;
  color: ColorUtils;
  uppercase: string;
}

interface LetterSpacingUtils {
  1: string;
  2: string;
  3: string;
}

interface FamilyUtils {
  serif: string;
  sansCond: string;
  sansNormal: string;
}

interface SizeUtils {
  900: string;
  800: string;
  700: string;
  600: string;
  500: string;
  400: string;
  300: string;
  200: string;
}

interface ColorUtils {
  dark: string;
  accent: string;
  white: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    font: Font;
    utils: Utils;
    breakPoints: BreakPoints;
  }
}
