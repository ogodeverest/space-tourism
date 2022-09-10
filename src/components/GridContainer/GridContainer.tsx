import React from 'react';
import styled, {DefaultTheme} from 'styled-components';
import {mediaQuery} from 'theme';

type Props = {
  theme: DefaultTheme;
  columnGap?: string;
};

const GridContainer = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
  padding-inline: 1rem;
  padding-bottom: 4rem;

  & p:not([class]) {
    max-width: 50ch;
  }

  ${({theme, columnGap}: Props) =>
    mediaQuery(
      theme.breakPoints.desktopUp,
      `
    text-align: left;
    column-gap: ${columnGap || '2rem'};
    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(1rem,1fr);
  }`,
    )}
`;

export default GridContainer;
