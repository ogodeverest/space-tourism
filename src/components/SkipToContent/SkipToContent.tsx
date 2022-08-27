import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

type Props = {
  hash: string;
};

const StyledLink = styled(Link)`
  position: absolute;
  z-index: 9999;
  color: hsl(var(--clr-dark));
  padding: 0.5em 1em;
  margin-inline: auto;
  transform: translateY(-100%);
  transition: transform 250ms ease-in;
  &:focus {
    transform: translateY(0);
  }
  &:visited {
    color: inherit;
  }
`;

export default function SkipToContent({ hash }: Props): JSX.Element {
  return (
    <StyledLink
      to={{
        hash,
      }}
    >
      Skip to content
    </StyledLink>
  );
}

SkipToContent.propTypes = {
  hash: PropTypes.string.isRequired,
};
