import React from 'react';
import {GridContainer, NumberedTitle, UnderlineIndicators} from 'components';
import {Outlet} from 'react-router-dom';
import {AppData, useAppData} from 'contexts';
import {Destination, LinkType} from 'models';
import styled from 'styled-components';
import {mediaQuery} from 'theme';
import useResourceClass from 'hooks/useResourceClass';

const DestinationGrid = styled(GridContainer).attrs({
  as: 'main',
})`
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
      justify-items: start;
      align-content: start;
      grid-template-areas:
      ". title title ."
      ". viewer tabs ."
      ". viewer content .";
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

const StyledIndicators = styled(UnderlineIndicators)`
  grid-area: tabs;
  padding: 0;
`;

export default function DestinationLayout() {
  const {destinations}: AppData = useAppData();
  useResourceClass();
  const links: LinkType[] = destinations.map((destination: Destination, index: number) => ({
    to: destination.slug,
    children: destination.slug,
    index,
  }));

  return (
    <DestinationGrid>
      <StyledTitle number={1}>Pick your destination</StyledTitle>
      <StyledIndicators links={links} gap="2rem" />
      <Outlet />
    </DestinationGrid>
  );
}
