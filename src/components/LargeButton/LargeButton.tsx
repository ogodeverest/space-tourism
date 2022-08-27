import React from "react";
import PropTypes from "prop-types";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";

interface Props extends LinkProps {
  id: string;
}

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const MotionButton = motion(styled(Link)`
  font-size: 2rem;
  position: relative;
  z-index: 1;
  display: inline-grid;
  place-items: center;
  padding: 0 2em;
  border-radius: 50%;
  aspect-ratio: 1;
  text-decoration: none;
  ${({ theme }) =>
    `
      ${theme.utils.typography.uppercase};
      ${theme.utils.typography.family.serif};
      ${theme.utils.typography.color.dark};
      ${theme.utils.background.white};
    `}
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms linear, transform 750ms ease-in-out;
    ${({ theme }) =>
      `
      background: hsl(${theme.colors.white} / 0.1);
    `}
  }
  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scale(1.5);
  }
`);

export default function LargeButton({
  to,
  children,
  ...rest
}: Props): JSX.Element {
  return (
    <MotionButton to={to} variants={buttonVariants} {...rest}>
      {children}
    </MotionButton>
  );
}

LargeButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  id: PropTypes.string,
};
