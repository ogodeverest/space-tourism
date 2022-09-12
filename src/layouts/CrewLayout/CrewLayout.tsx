import React from 'react';
import {DotIndicators, GridContainer, NumberedTitle} from 'components';
import {Outlet} from 'react-router-dom';
import {AppData, useAppData} from 'contexts';
import {Crew, LinkType} from 'models';
import styled from 'styled-components';
import {mediaQuery} from 'theme';
import useResourceClass from 'hooks/useResourceClass';

const CrewGrid = styled(GridContainer).attrs({
  as: 'main',
})`
  grid-template-areas:
    'title'
    'picture'
    'tabs'
    'content';

  ${({theme}) => theme.utils.general.flow('big')}

  ${({theme}) =>
    mediaQuery(
      theme.breakPoints.tabletUp,
      `
        padding-bottom:0;
      `,
    )}

  ${({theme}) =>
    mediaQuery(
      theme.breakPoints.desktopUp,
      `
      grid-template-columns: minmax(1rem, 1fr) minmax(0, 37rem) minmax(0, 23rem) minmax(
        1rem,
        1fr
      );
      justify-items: start;
      grid-template-areas:
        ". title title ."
        ". content picture ."
        ". tabs picture .";
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

const StyledIndicators = styled(DotIndicators)`
  grid-area: tabs;
`;

export default function CrewLayout() {
  const {crew}: AppData = useAppData();

  useResourceClass();

  const links: LinkType[] = crew.map((member: Crew, index: number) => ({
    to: member.slug,
    children: member.slug,
    index,
  }));

  return (
    <CrewGrid>
      <StyledTitle number={2}>Meet your crew</StyledTitle>
      <Outlet />
      <StyledIndicators links={links} gap="1.5rem" />
    </CrewGrid>
  );
}
