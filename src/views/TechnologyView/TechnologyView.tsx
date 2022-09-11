import React from 'react';
import {motion, Variants} from 'framer-motion';
import {TechnologyViewer} from './components';
import useCurrentEntity from 'hooks/useCurrentEntity';
import {Page} from 'components';
import styled from 'styled-components';
import {mediaQuery} from 'theme';

const StyledViewer = styled(TechnologyViewer)`
  grid-area: viewer;

  ${({theme}) =>
    mediaQuery(
      theme.breakPoints.desktopUp,
      `
      align-self: start;
      `,
    )}

  ${({theme}) =>
    mediaQuery(
      theme.breakPoints.mobileDown,
      `
      width:90%;
      height:90%;
     `,
    )}
`;

const StyledArticle = styled.article`
  ${({theme}) => theme.utils.general.flow()}
  padding-inline: 1rem;
  grid-area: content;
`;

const StyledHeader = styled.header`
  ${({theme}) => theme.utils.general.flow('small')}
`;

const StyledTitle = styled.h2`
  ${({theme}) =>
    `
  color: hsl(${theme.colors.white} / 0.5);
  ${theme.utils.typography.size[500]}
  ${theme.utils.typography.uppercase}
  ${theme.utils.typography.family.sansCond}
  ${theme.utils.typography.letterSpacing[3]}
  ${theme.utils.typography.color.accent}
 `}
`;

const StyledSubtitle = styled.p`
  ${({theme}) =>
    `
    ${theme.utils.typography.size[700]}
    ${theme.utils.typography.uppercase}
    ${theme.utils.typography.family.serif}
  `}
`;

const MotionArticle = motion(StyledArticle);

const variants: Variants = {
  hidden: {
    x: -10,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function TechnologyView() {
  const technology = useCurrentEntity();

  return (
    <Page title={technology.name}>
      <MotionArticle
        role="tabpanel"
        tabIndex={0}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        key={technology.name}
      >
        <StyledHeader>
          <StyledTitle>The terminology...</StyledTitle>
          <StyledSubtitle>{technology.name}</StyledSubtitle>
        </StyledHeader>

        <p>{technology.description}</p>
      </MotionArticle>
      <StyledViewer model={technology.model} />
    </Page>
  );
}
