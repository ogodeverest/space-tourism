import {createGlobalStyle} from 'styled-components';
import endpoints from 'api/endpoints';
import {mediaQuery} from 'theme';
//crew
import crewMobileBG from 'assets/crew/background-crew-mobile.jpg';
import crewTabletBG from 'assets/crew/background-crew-tablet.jpg';
import crewDesktopBG from 'assets/crew/background-crew-desktop.jpg';
//destinations
import destinationMobileBG from 'assets/destination/background-destination-mobile.jpg';
import destinationTabletBG from 'assets/destination/background-destination-tablet.jpg';
import destinationDesktopBG from 'assets/destination/background-destination-desktop.jpg';
//technologies
import technologyMobileBG from 'assets/technology/background-technology-mobile.jpg';
import technologyTabletBG from 'assets/technology/background-technology-tablet.jpg';
import technologyDesktopBG from 'assets/technology/background-technology-desktop.jpg';

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

    body{
      background-color:   ${({theme}) => `hsl(${theme.colors.dark})`};
      background-size: cover;
      background-position: bottom center;
    }

    /* set up the body */
    #root {
      font-family: ${({theme}) => theme.font.families.sansNormal};
      font-size: ${({theme}) => theme.font.sizes[400]};
      color:  ${({theme}) => `hsl(${theme.colors.white})`};
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


  body.crew{
    background-image: url(${crewMobileBG});
  }
  body.destinations{
    background-image: url(${destinationMobileBG});
  }
  body.technologies{
    background-image: url(${technologyMobileBG});
  }


  ${({theme}) =>
    mediaQuery(
      theme.breakPoints.tabletUp,
      `
      body{
        background-position: center center;
      }
      body.crew{
        background-image: url(${crewTabletBG});
      }
      body.destinations{
        background-image: url(${destinationTabletBG});
      }
      body.technologies{
        background-image: url(${technologyTabletBG});
      }

    `,
    )}

  ${({theme}) =>
    mediaQuery(
      theme.breakPoints.desktopUp,
      `
      body.crew{
        background-image: url(${crewDesktopBG});
      }
      body.destinations{
        background-image: url(${destinationDesktopBG});
      }
      body.technologies{
        background-image: url(${technologyDesktopBG});
      }

    `,
    )}
`;

export default GlobalStyle;
