import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styled, { DefaultTheme } from "styled-components";
import { Variants, motion, AnimatePresence } from "framer-motion";
import { SROnly } from "components";
import {
  IndicatorShape,
  IndicatorsProps,
  IndicatorsShape,
  LinkType,
} from "models";

const StyledList = styled.div`
  list-style-type: none;
  ${({ theme, gap }: { theme: DefaultTheme; gap?: string }) =>
    theme.utils.general.flex(gap)}
`;

const StyledItem = styled(Link)`
  cursor: pointer;
  border: 0;
  border-radius: 50%;
  padding: 0.5em;
  background-color: hsl(${({ theme }) => theme.colors.white} / 0.25);

  ${({ theme, active }: { theme: DefaultTheme; active?: boolean }) =>
    !active &&
    `&:hover,
     &:focus {
      background-color: hsl(${theme.colors.white} / 0.5);
    }`}

  ${({ theme, active }: { theme: DefaultTheme; active?: boolean }) =>
    active && theme.utils.background.white}
`;

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

function DotIndicator({ to, children }: LinkType): JSX.Element {
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
    </MotionItem>
  );
}
const MotionList = motion(StyledList);

DotIndicator.propTypes = IndicatorShape;

export default function DotIndicators({
  label,
  links,
  gap,
  role = "tablist",
  className,
}: IndicatorsProps): JSX.Element {
  return (
    <AnimatePresence>
      <MotionList
        className={className}
        role={role}
        aria-label={label}
        gap={gap}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={listVariants}
      >
        {links.map((link, index) => (
          <DotIndicator {...link} key={index} />
        ))}
      </MotionList>
    </AnimatePresence>
  );
}

DotIndicators.propTypes = IndicatorsShape;
