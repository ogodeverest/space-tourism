import {createGlobalStyle} from 'styled-components';
import endpoints from 'api/endpoints';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    ::selection {
     ${({theme}) =>
       `${theme.utils.background.accent};
        ${theme.utils.typography.color.dark}`}
    }

    html{
      cursor:url(${endpoints.images}cursor/cursor.png) 3 3,auto;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    ul,
    figure,
    picture {
      margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      font-weight: 400;
    }

    /* set up the body */
    #root {
      font-family: ${({theme}) => theme.font.families.sansNormal};
      font-size: ${({theme}) => theme.font.sizes[400]};
      color:  ${({theme}) => `hsl(${theme.colors.white})`};
      background-color:   ${({theme}) => `hsl(${theme.colors.dark})`};
      line-height: 1.5;
      min-height: 100vh;

      display: grid;
      grid-template-rows: min-content 1fr;

      overflow-x: hidden;
    }

/* make images easier to work with */
    img,
    picutre {
      max-width: 100%;
      display: block;
    }

/* make form elements easier to work with */
    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    /* remove animations for people who've turned them off */
    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

`;

export default GlobalStyle;
