import { Colors, Families, Sizes } from "styled";
import { DefaultTheme } from "styled-components";

const colors: Colors = {
  dark: "230 35% 7%",
  light: "231 77% 90%",
  white: "0 0% 100%",
};

const familyNames = {
  bellafair: "Bellefair",
  barlowCond: "Barlow Condensed",
  barlow: "Barlow",
};

const families: Families = {
  serif: `${familyNames.bellafair}, serif`,
  sansCond: `${familyNames.barlowCond}, sans-serif`,
  sansNormal: `${familyNames.barlow}, sans-serif`,
};

const sizes: Sizes = {
  900: "clamp(5rem, 8vw + 1rem, 9.375rem)",
  800: "clamp(3.5rem, 7vw + 1rem, 6.25rem)",
  700: "clamp(1.5rem, 5vw + 1rem, 3.5rem)",
  600: "clamp(1rem, 2vw + .5rem, 2rem)",
  500: "clamp(1rem, 2vw + .5rem, 1.75rem)",
  400: "clamp(0.9375rem,2vw + .3rem, 1.125rem)",
  300: "1rem",
  200: "0.875rem",
};

const bigLineHeight = "line-height: 1.1;";

const theme: DefaultTheme = {
  colors,
  font: {
    sizes,
    families,
  },
  utils: {
    general: {
      flex: (gap = "1rem") => `display: flex;gap: ${gap};`,
      grid: (gap = "1rem") => `display: grid;gap: ${gap};`,
      block: "display: block;",
      flow: (
        space: "normal" | "small" | "big" = "normal"
      ) => `& > *:where(:not(:first-child)) {
        margin-top: ${
          space === "normal" ? "1rem" : space === "small" ? "0.75rem" : "2rem"
        };
      }`,
    },
    background: {
      dark: `background-color: hsl(${colors.dark});`,
      accent: `background-color: hsl(${colors.light});`,
      white: `background-color: hsl(${colors.white});`,
    },
    typography: {
      family: {
        serif: `font-family: ${families.serif};`,
        sansCond: `font-family:${families.sansCond};`,
        sansNormal: `font-family:${families.sansNormal};`,
      },
      letterSpacing: {
        1: "letter-spacing: 4.75px;",
        2: "letter-spacing: 2.7px;",
        3: "letter-spacing: 2.35px;",
      },
      uppercase: "text-transform:uppercase;",
      size: {
        900: `font-size: ${sizes[900]};${bigLineHeight}`,
        800: `font-size: ${sizes[800]};${bigLineHeight}`,
        700: `font-size: ${sizes[700]};${bigLineHeight}`,
        600: `font-size: ${sizes[600]};${bigLineHeight}`,
        500: `font-size: ${sizes[500]};`,
        400: `font-size: ${sizes[400]};`,
        300: `font-size: ${sizes[300]};`,
        200: `font-size: ${sizes[200]};`,
      },
      color: {
        dark: `color: hsl(${colors.dark});`,
        accent: `color: hsl(${colors.light});`,
        white: `color: hsl(${colors.white});`,
      },
    },
  },
  breakPoints: {
    tabletDesktop: `(min-width:35em and max-width:44.99em)`,
    desktopUp: `(min-width:45em)`,
    tabletUp: `(min-width:35em)`,
    mobileDown: `(max-width:35em)`,
  },
};

export function mediaQuery(breakPoint: string, rules: string) {
  return `@media ${breakPoint}{
       ${rules}
  }`;
}

export function generateBackgrounds({
  mobile,
  tablet,
  desktop,
}: {
  mobile: string;
  tablet: string;
  desktop: string;
}) {
  return `
  background-size: cover;
  background-position: bottom center;
  background-image: url(${mobile});

  ${mediaQuery(
    theme.breakPoints.tabletUp,
    `
      background-position: center center;
      background-image: url(${tablet});
    `
  )}


  ${mediaQuery(
    theme.breakPoints.desktopUp,
    `
      background-image: url(${desktop});    `
  )}`;
}

export function getFonts(): string[] {
  return Object.values(familyNames);
}

export default theme;
