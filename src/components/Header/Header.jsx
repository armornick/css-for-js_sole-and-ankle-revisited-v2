import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">À Vendre</NavLink>
          <NavLink href="/new">Nouvelles Versions</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/women">Femmes</NavLink>
          <NavLink href="/kids">Enfants</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={1} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Icon id="menu" strokeWidth={1} />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 48px;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletAndBelow} {
    border-top: 4px solid ${COLORS.gray[900]};
  }

  @media ${QUERIES.phoneAndBelow} {
    padding: 18px 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 5vw - 3rem, 3rem);
  overflow-x: auto;

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndBelow} {
    gap: 16px;
  }
`;

export default Header;
