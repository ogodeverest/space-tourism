import React, {ReactNode} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

type Props = {
  number: number;
  children: ReactNode;
  className?: string;
};

const StyledSpan = styled.span`
  margin-right: 0.5em;
  font-weight: 700;
  color: hsl(${({theme}) => theme.colors.white} / 0.25);
`;

const StyledHeading = styled.h2`
  ${({theme}) => theme.utils.typography.family.sansCond}
  font-size: ${({theme}) => theme.font.sizes[500]};
  ${({theme}) => theme.utils.typography.uppercase}
  letter-spacing: 4.72px;
`;

export default function NumberedTitle({number, children, ...rest}: Props): JSX.Element {
  const numberDecorator: string | number = number > 9 ? number : '0' + number;

  return (
    <StyledHeading {...rest}>
      <StyledSpan aria-hidden={true}>{numberDecorator}</StyledSpan>
      {children}
    </StyledHeading>
  );
}

NumberedTitle.propTypes = {
  number: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
