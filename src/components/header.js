import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: rgba(2, 6, 23, 0.9);
  backdrop-filter: blur(10px);
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.h1`
  color: #22c55e;
  font-size: 28px;
`;

const Menu = styled.div`
  display: flex;
  gap: 25px;
`;

const Item = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: 0.3s;

  &:hover {
    color: #22c55e;
    transform: translateY(-2px);
  }
`;

export default function Header() {
  return (
    <Nav>
      <Logo>MeuSite</Logo>
      <Menu>
        <Item to="/">Home</Item>
        <Item to="/sobre">Sobre</Item>
        <Item to="/contato">Contato</Item>
      </Menu>
    </Nav>
  );
}
