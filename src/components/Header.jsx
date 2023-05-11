import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick((click) => !click);
  }

  return (
    <Container>
      <NavMenu click={click}>
        <MobileIcons onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcons>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/services">Services</StyledNavLink>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
      </NavMenu>
    </Container>
  );
};

const NavMenu = styled.nav`
  background-color: ${({ theme }) => theme.colors.textColor};
  height: 100%;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  align-items: center;
  padding-right: 1.9rem;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;
    transition: all 0.5s ease;

    background-color: red;
    width: 100%;
    height: ${({ click }) => (click ? "90vh" : "100%")};
    opacity: 1;

    a:first-of-type {
      margin-top: 100px;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.7rem;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondaryColor2};
  margin: 10px;
  font-family: "YesevaOne";

  &.active {
    color: ${({ theme }) => theme.colors.primaryColor2};
    text-decoration: underline;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor2};
    transition: all 0.5s ease-in;
  }
`;

const MobileIcons = styled.div`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 2.3rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryColor1};
    display: block;
    transform: translate(-100%, 60%);
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const Container = styled.div`
  position: relative;
  height: 100px;
`;

export default Header;
