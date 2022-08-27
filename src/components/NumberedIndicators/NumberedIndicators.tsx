import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { Variants, motion, AnimatePresence } from "framer-motion";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { SROnly } from "components";
import { mediaQuery } from "theme";
import {
  IndicatorShape,
  IndicatorsProps,
  IndicatorsShape,
  LinkType,
} from "models";

const StyledList = styled.div`
  ${({ theme, gap }: { theme: DefaultTheme; gap?: string }) =>
    theme.utils.general.flex(gap)}
  ${({ theme }) => theme.utils.typography.family.serif}
  ${({ theme }) =>
    mediaQuery(theme.breakPoints.desktopUp, `flex-direction: column;`)}
`;

const StyledItem = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 3em;
    background-color: transparent;
    border: 1px solid hsl(${({ theme }) => theme.colors.white} / 0.1);
    aspect-ratio: 1;
    ${({ theme }) => theme.utils.typography.color.white}}
    ${({ theme }) => theme.utils.typography.size[500]}}
    text-decoration:none;

  &:hover,
  &:focus {
    ${({ theme }) => `border-color: hsl(${theme.colors.white});`}
    outline: none;
  }

${({ theme, active }: { theme: DefaultTheme; active: boolean }) =>
  active &&
  `${theme.utils.background.white}
   ${theme.utils.typography.color.dark}`}`;

const listVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: { opacity: 1, scale: 1 },
};

const MotionItem = motion(StyledItem);

function NumberedIndicator({ to, children, index }: LinkType): JSX.Element {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: false });
  return (
    <MotionItem
      to={to}
      role="tab"
      tabIndex={-1}
      active={!!match}
      variants={itemVariants}
    >
      <SROnly>{children}</SROnly>
      {index}
    </MotionItem>
  );
}

const MotionList = motion(StyledList);

NumberedIndicator.propTypes = IndicatorShape;

export default function NumberedIndicators({
  label,
  links,
  gap,
  className,
}: IndicatorsProps): JSX.Element {
  return (
    <AnimatePresence>
      <MotionList
        role="tablist"
        aria-label={label}
        gap={gap}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={listVariants}
        className={className}
      >
        {links.map((link, index) => (
          <NumberedIndicator {...link} key={index} index={index + 1} />
        ))}
      </MotionList>
    </AnimatePresence>
  );
}

NumberedIndicators.propTypes = IndicatorsShape;
