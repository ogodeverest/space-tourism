import React from 'react';
import styled from 'styled-components';
import {motion, Variants} from 'framer-motion';
import {Page} from 'components';
import {mediaQuery} from 'theme';
import useCurrentEntity from 'hooks/useCurrentEntity';
import endpoints from 'api/endpoints';

const StyledPicture = styled.picture`
  grid-area: picture;
  max-width: 60%;
  border-bottom: 1px solid hsl(${({theme}) => theme.colors.white} / 0.1);

  ${({theme}) =>
    mediaQuery(
      theme.breakPoints.desktopUp,
      `
      grid-column: span 2;
      align-self: end;
      max-width: 80%;
     `,
    )}
`;

const StyledArticle = styled.article`
  ${({theme}) => theme.utils.general.flow()}
  grid-area: content;
`;

const StyledHeader = styled.header`
  ${({theme}) => theme.utils.general.flow('small')}
`;

const StyledTitle = styled.h2`
  ${({theme}) =>
    `
  color: hsl(${theme.colors.white} / 0.5);
  ${theme.utils.typography.size[600]}
  ${theme.utils.typography.uppercase}
  ${theme.utils.typography.family.serif}
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

const MotionPicture = motion(StyledPicture);

const articleVariants: Variants = {
  hidden: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const pictureVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CrewView() {
  const crew = useCurrentEntity();

  return (
    <Page title={crew.role}>
      <MotionArticle
        role="tabpanel"
        tabIndex={0}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={articleVariants}
        key={crew.name}
      >
        <StyledHeader>
          <StyledTitle>{crew.role}</StyledTitle>
          <StyledSubtitle>{crew.name}</StyledSubtitle>
        </StyledHeader>
        <p>{crew.bio}</p>
      </MotionArticle>
      <MotionPicture
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={pictureVariants}
        key={crew.images.png}
      >
        <source srcSet={endpoints.images + crew.images.webp} type="image/webp" />
        <img src={endpoints.images + crew.images.png} alt={crew.name} />
      </MotionPicture>
    </Page>
  );
}
