import React from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { mediaQuery } from "theme";
import { ModelViewer } from "components";
import useCurrentEntity from "hooks/useCurrentEntity";
import { Page } from "components";

const StyledViewer = styled(ModelViewer)`
  grid-area: viewer;
  align-self: start;

  ${({ theme }) =>
    mediaQuery(
      theme.breakPoints.mobileDown,
      `
      width: 90%;
      height:90%;
     `
    )}
`;

const StyledArticle = styled.article`
  ${({ theme }) => theme.utils.general.flow()}
  grid-area: content;
`;

const StyledTitle = styled.h2`
  ${({ theme }) =>
    `
  ${theme.utils.typography.size[800]}
  ${theme.utils.typography.uppercase}
  ${theme.utils.typography.family.serif}
 `}
`;

const StyledMeta = styled.div`
  ${({ theme }) => theme.utils.general.flex()}
  flex-direction: column;
  border-top: 1px solid hsl(${({ theme }) => theme.colors.white} / 0.1);
  padding-top: 2.5rem;
  margin-top: 2.5rem;

  ${({ theme }) =>
    mediaQuery(
      theme.breakPoints.tabletUp,
      `
      flex-direction: row;
      justify-content: space-evenly;
     `
    )}
  ${({ theme }) =>
    mediaQuery(
      theme.breakPoints.desktopUp,
      `
      ${theme.utils.general.flex("min(6vw, 6rem)")}
      justify-content: start;
     `
    )}
`;

const StyledParagraph = styled.p`
  font-size: 1.75rem;
  ${({ theme }) =>
    `
    ${theme.utils.typography.family.serif}
    ${theme.utils.typography.uppercase}

  `}
`;

const StyledLabel = styled.h3`
  ${({ theme }) =>
    `
    ${theme.utils.typography.color.accent}
    ${theme.utils.typography.size[200]}
    ${theme.utils.typography.uppercase}

  `}
`;

const variants: Variants = {
  hidden: {
    y: -10,
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

const MotionArticle = motion(StyledArticle);

export default function DestinationView() {
  const destination = useCurrentEntity();

  return (
    <Page title={destination.name}>
      <StyledViewer model={destination.model} />

      <MotionArticle
        tabIndex={0}
        role="tabpanel"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        key={destination.name}
      >
        <StyledTitle>{destination.name}</StyledTitle>

        <p>{destination.description}</p>
        <StyledMeta>
          <div>
            <StyledLabel>Avg. distance</StyledLabel>
            <StyledParagraph>{destination.distance}</StyledParagraph>
          </div>
          <div>
            <StyledLabel>Est. travel time</StyledLabel>
            <StyledParagraph>{destination.travel}</StyledParagraph>
          </div>
        </StyledMeta>
      </MotionArticle>
    </Page>
  );
}
