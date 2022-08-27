import React from "react";
import styled from "styled-components";
import { mediaQuery } from "theme";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { GridContainer, LargeButton, Page, SkipToContent } from "components";
import { HomeScene } from "./components";
import { useAppData } from "contexts";

const HomeGrid = styled(GridContainer).attrs({
  as: "main",
})`
  z-index: 1;
  height: 100%;
  ${({ theme }) =>
    mediaQuery(
      theme.breakPoints.desktopUp,
      `
    padding-bottom: max(6rem, 20vh);
    align-items: end;

    & > *:first-child {
      grid-column: 2;
    }

    & > *:last-child {
      grid-column: 3;
    }
  `
    )}
`;

const StyledH1 = styled.h1`
  ${({ theme }) => `
   ${theme.utils.typography.color.accent}
   ${theme.utils.typography.size[500]}
   ${theme.utils.typography.family.sansCond}
   ${theme.utils.typography.letterSpacing[1]}
   ${theme.utils.typography.uppercase}
`}
`;

const StyledSpan = styled.span`
  ${({ theme }) => `
    ${theme.utils.general.block}
    ${theme.utils.typography.size[900]}
    ${theme.utils.typography.family.serif}
    ${theme.utils.typography.color.white}
    ${theme.utils.typography.uppercase}
  `}
`;

const homeVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.8,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.8,
      staggerDirection: 1,
    },
  },
};

const introVariants: Variants = {
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

const MotionSpan = motion(StyledSpan);
const MotionTitle = motion(StyledH1);

const MotionPage = motion(Page);

export default function HomeView(): JSX.Element {
  const { destinations } = useAppData();

  return (
    <AnimatePresence>
      <MotionPage
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={homeVariants}
        title="Home"
      >
        <SkipToContent hash="#explore" />
        <HomeGrid>
          <div>
            <MotionTitle variants={introVariants}>
              So, you want to travel to
            </MotionTitle>
            <MotionSpan variants={introVariants}>Space</MotionSpan>
            <motion.p variants={introVariants}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </motion.p>
          </div>
          <div>
            <LargeButton
              id="explore"
              to={`/destinations/${destinations[0].slug}`}
            >
              Explore
            </LargeButton>
          </div>
        </HomeGrid>
        <HomeScene />
      </MotionPage>
    </AnimatePresence>
  );
}
