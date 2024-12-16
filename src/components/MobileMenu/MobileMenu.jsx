import React from "react";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <DialogContent>
          <Dialog.Close asChild>
            <CloseButton onClick={onDismiss}>
              <Icon id="close" />
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
            </CloseButton>
          </Dialog.Close>
          <DialogNav>
            <DialogNavLink href="/sale">Sale</DialogNavLink>
            <DialogNavLink href="/new">New&nbsp;Releases</DialogNavLink>
            <DialogNavLink href="/men">Men</DialogNavLink>
            <DialogNavLink href="/women">Women</DialogNavLink>
            <DialogNavLink href="/kids">Kids</DialogNavLink>
            <DialogNavLink href="/collections">Collections</DialogNavLink>
          </DialogNav>
          <DialogFooter>
            <DialogFooterLink href="/terms">
              Terms and Conditions
            </DialogFooterLink>
            <DialogFooterLink href="/privacy">Privacy Policy</DialogFooterLink>
            <DialogFooterLink href="/contact">Contact Us</DialogFooterLink>
          </DialogFooter>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: hsl(0deg 0% 0% / 50%);
`;

const DialogContent = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;

  width: 300px;
  padding: 32px;
  background-color: var(--color-white);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const UnstyledLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const DialogNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const DialogNavLink = styled(UnstyledLink)`
  color var(--color-gray-900);
  font-size: ${18 / 16}rem;
  font-weight: var(--weight-medium);
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const DialogFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const DialogFooterLink = styled(UnstyledLink)`
  color: var(--color-gray-700);
  font-size: ${14 / 16}rem;
  font-weight: var(--weight-normal);
`;

export default MobileMenu;
