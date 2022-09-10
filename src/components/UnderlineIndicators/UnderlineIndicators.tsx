import React, {useContext, createContext} from 'react';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import styled, {DefaultTheme} from 'styled-components';
import {Variants, motion, AnimatePresence} from 'framer-motion';
import {mediaQuery} from 'theme';
import {IndicatorShape, IndicatorsProps, IndicatorsShape, LinkType} from 'models';

const Context = createContext<{underlineGap: string; role: string}>({
  underlineGap: '',
  role: 'tablist',
});

type StyledItemProps = {
  theme: DefaultTheme;
  active: boolean;
  underlineGap?: string;
};

const StyledSpan = styled.span`
  font-weight: 700;
  margin-right: 0.5em;

  ${({theme}) => mediaQuery(theme.breakPoints.tabletDesktop, 'display:none;')}
`;

const StyledItem = styled.li`
  cursor: pointer;
  padding: ${({underlineGap}: StyledItemProps) => underlineGap} 0;
  border: 0;
  border-bottom: 0.2rem solid hsl(${({theme}) => theme.colors.white} / 0);
  background-color: transparent;
  ${({theme}) => theme.utils.typography.color.accent}

  ${({theme, active}: StyledItemProps) =>
    !active &&
    `&:hover,
   &:focus {
     border-color: hsl(${theme.colors.white} / 0.5);
   }`}


  ${({theme, active}: StyledItemProps) =>
    active &&
    `${theme.utils.typography.color.white}
  border-color: hsl(${theme.colors.white} / 1);`}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  ${({theme}) => theme.utils.typography.family.sansCond}
  ${({theme}) => theme.utils.typography.letterSpacing[2]}
  ${({theme}) => theme.utils.typography.uppercase}
`;

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {opacity: 1},
};

const MotionItem = motion(StyledItem);

function UnderlineIndicator({to, children, index}: LinkType): JSX.Element {
  const resolved = useResolvedPath(to);
  const match = useMatch({path: resolved.pathname, end: false});
  const {underlineGap, role} = useContext(Context);
  const numberDecorator: string | number = index > 9 ? index : '0' + index;

  return (
    <MotionItem active={!!match} underlineGap={underlineGap} variants={itemVariants}>
      <StyledLink to={to}>
        {role === 'navigation' && <StyledSpan aria-hidden="true">{numberDecorator}</StyledSpan>}

        {children}
      </StyledLink>
    </MotionItem>
  );
}

UnderlineIndicator.propTypes = IndicatorShape;

const StyledList = styled.ul`
  ${({theme, gap}: {theme: DefaultTheme; gap?: string; role?: string}) =>
    theme.utils.general.flex(gap)}
  list-style-type: none;
`;

const listVariants: Variants = {
  hidden: {
    opacity: 0,
    left: '100%',
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  visible: {
    opacity: 1,
    left: '30%',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const MotionList = motion(StyledList);

export default function UnderlineIndicators({
  label,
  links,
  gap = '1rem',
  underlineGap = '0.8rem',
  role = 'tablist',
  className,
  visible = true,
}: IndicatorsProps): JSX.Element {
  return (
    <Context.Provider value={{underlineGap, role}}>
      <AnimatePresence>
        {visible && (
          <MotionList
            role={role}
            aria-label={label}
            gap={gap}
            className={className}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={listVariants}
          >
            {links.map((link, index) => (
              <UnderlineIndicator {...link} key={index} index={index} />
            ))}
          </MotionList>
        )}
      </AnimatePresence>
    </Context.Provider>
  );
}

UnderlineIndicators.propTypes = IndicatorsShape;
