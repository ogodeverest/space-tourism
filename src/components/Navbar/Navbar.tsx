import React, { useEffect } from "react";
import styled, { DefaultTheme, useTheme } from "styled-components";
import { useCycle } from "framer-motion";
import { mediaQuery } from "theme";
import { SROnly, UnderlineIndicators } from "components";
import LogoImage from "assets/shared/logo.svg";
import HamburgerImage from "assets/shared/icon-hamburger.svg";
import CloseImage from "assets/shared/icon-close.svg";
import useMediaQuery from "hooks/useMediaQuery";
import { LinkType } from "models";

const links: LinkType[] = [
  {
    to: "home",
    children: "Home",
    index: 0,
  },
  {
    to: "destinations",
    children: "Destination",
    index: 1,
  },
  {
    to: "crew",
    children: "Crew",
    index: 2,
  },
  {
    to: "technologies",
    children: "Technology",
    index: 3,
  },
];

const StyledHeader = styled.header`
  z-index: 10;
  ${({ theme }) => theme.utils.general.flex()}
  justify-content: space-between;
  align-items: center;
  ${({ theme }) =>
    mediaQuery(
      theme.breakPoints.desktopUp,
      `
        &::after {
            content: "";
            display: block;
            position: relative;
            height: 1px;
            width: 100%;
            margin-right: -2.5rem;
            background: hsl(${theme.colors.white} / 0.25);
            order: 1;
        }`
    )};
`;

const StyledNav = styled.nav`
  order: 2;
`;

const NavigationList = styled(UnderlineIndicators)`
  padding: 0;
  margin: 0;
  background: hsl(${({ theme }) => theme.colors.white} / 0.05);
  backdrop-filter: blur(1.5rem);

  ${({ theme }) =>
    mediaQuery(theme.breakPoints.desktopUp, "margin-block: 2rem;")}

  ${({ theme }) =>
    mediaQuery(
      theme.breakPoints.tabletUp,
      "padding-inline: clamp(3rem, 7vw, 7rem);"
    )}

  ${({ theme }) =>
    mediaQuery(
      theme.breakPoints.mobileDown,
      `position: fixed;
       z-index: 1000;
       inset: 0 0 0 30%;
       list-style: none;
       padding: min(20rem, 15vh) 2rem;
       margin: 0;
       flex-direction: column;`
    )}

    & a {
    ${({ theme }) =>
      `
      ${theme.utils.typography.family.sansCond}
      ${theme.utils.typography.uppercase}
      ${theme.utils.typography.color.white}
      ${theme.utils.typography.letterSpacing[2]}
   `}
  }
`;

const StyledImage = styled.img`
  margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
`;

const StyledToggle = styled.button`
  display: none;
  ${({ theme, isVisible }: { theme: DefaultTheme; isVisible: boolean }) =>
    mediaQuery(
      theme.breakPoints.mobileDown,
      `
        display: block;
        position: absolute;
        z-index: 2000;
        right: 1rem;
        top: 2rem;
        background: transparent;
        background-image: url(${isVisible ? CloseImage : HamburgerImage});
        background-repeat: no-repeat;
        background-position: center;
        width: 1.5rem;
        aspect-ratio: 1;
        border: 0;

        &::focus-visible {
            outline: 5px solid white;
            outline-offset: 5px;
        }
    `
    )};
`;

export default function Navbar(): JSX.Element {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakPoints.mobileDown);

  const [visible, cycleVisible] = useCycle(!matches, true);

  useEffect(() => {
    !matches && cycleVisible();
  }, [matches, cycleVisible]);

  return (
    <StyledHeader>
      <div>
        <StyledImage src={LogoImage} alt="space tourism logo" />
      </div>
      <StyledToggle
        isVisible={visible}
        onClick={() => cycleVisible()}
        aria-controls="primary-navigation"
      >
        <SROnly>Menu</SROnly>
      </StyledToggle>
      <StyledNav>
        <NavigationList
          role="navigation"
          underlineGap={matches ? "0.8rem" : "2rem"}
          gap="clamp(1.5rem, 5vw, 3.5rem)"
          links={links}
          visible={visible}
        />
      </StyledNav>
    </StyledHeader>
  );
}
