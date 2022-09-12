import React from 'react';
import {NumberedIndicators, GridContainer, NumberedTitle} from 'components';
import {Outlet} from 'react-router-dom';
import {AppData, useAppData} from 'contexts';
import {Technology, LinkType} from 'models';
import styled from 'styled-components';
import {mediaQuery} from 'theme';
import useResourceClass from 'hooks/useResourceClass';

const TechnologyGrid = styled(GridContainer).attrs({
  as: 'main',
})`
  padding-inline: 0;
  grid-template-areas:
    'title'
    'viewer'
    'tabs'
    'content';

  ${({theme}) => theme.utils.general.flow('big')}

  ${({theme}) =>
    mediaQuery(
      theme.breakPoints.desktopUp,
      `
      grid-template-columns:
        minmax(1rem, 1fr) minmax(0, 5rem) minmax(0, 30rem) minmax(0, 25rem)
        minmax(1rem, 1fr);
      justify-items: start;
      grid-template-areas:
        ". title title title ."
        ". tabs content viewer viewer"
        ". tabs content viewer viewer";
        `,
    )}
`;

const StyledTitle = styled(NumberedTitle)`
  grid-area: title;
  ${({theme}) =>
    mediaQuery(
      theme.breakPoints.tabletUp,
      `
        justify-self: start;
        margin-top: 2rem;
      `,
    )}
`;

const StyledIndicators = styled(NumberedIndicators)`
  grid-area: tabs;
`;

export default function TechnologyLayout() {
  const {technologies}: AppData = useAppData();
  useResourceClass();

  const links: LinkType[] = technologies.map((technology: Technology, index: number) => ({
    to: technology.slug,
    children: technology.slug,
    index,
  }));

  return (
    <TechnologyGrid>
      <StyledTitle number={3}>Space launch 101</StyledTitle>
      <Outlet />
      <StyledIndicators links={links} gap="1.5rem" />
    </TechnologyGrid>
  );
}
