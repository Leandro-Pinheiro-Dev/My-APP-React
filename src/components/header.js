import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  background: #020617;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #31e636;
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
`;

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: #31e636;
  }
`;

const Header = () => {
  return (
    <Navbar>
      <Logo>MeuSite</Logo>

      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/sobre">Sobre</MenuItem>
        <MenuItem to="/contato">Contato</MenuItem>
      </Menu>
    </Navbar>
  );
};

export default Header;
