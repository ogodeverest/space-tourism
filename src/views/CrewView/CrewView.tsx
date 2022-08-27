import React from "react";
import useCurrentEntity from "hooks/useCurrentEntity";
import { ModelViewer, Page } from "components";
import styled from "styled-components";
import { mediaQuery } from "theme";
import { motion, Variants } from "framer-motion";

const StyledViewer = styled(ModelViewer)`
  grid-area: viewer;
  align-self: start;

  ${({ theme }) =>
    mediaQuery(
      theme.breakPoints.mobileDown,
      `
      width: 70%;
      height:80%;
     `
    )}
`;

const StyledArticle = styled.article`
  ${({ theme }) => theme.utils.general.flow()}
  grid-area: content;
`;

const StyledHeader = styled.header`
  ${({ theme }) => theme.utils.general.flow("small")}
`;

const StyledTitle = styled.h2`
  ${({ theme }) =>
    `
  color: hsl(${theme.colors.white} / 0.5);
  ${theme.utils.typography.size[600]}
  ${theme.utils.typography.uppercase}
  ${theme.utils.typography.family.serif}
 `}
`;

const StyledSubtitle = styled.p`
  ${({ theme }) =>
    `
    ${theme.utils.typography.size[700]}
    ${theme.utils.typography.uppercase}
    ${theme.utils.typography.family.serif}
  `}
`;
const MotionArticle = motion(StyledArticle);

const variants: Variants = {
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
        variants={variants}
        key={crew.name}
      >
        <StyledHeader>
          <StyledTitle>{crew.role}</StyledTitle>
          <StyledSubtitle>{crew.name}</StyledSubtitle>
        </StyledHeader>
        <p>{crew.bio}</p>
      </MotionArticle>
      <StyledViewer model={"Moon.glb"} />
    </Page>
  );
}
