import React from "react";
import styled from "styled-components";

const Rodape = styled.footer`
  background: #020617;
  color: white;
  text-align: center;
  padding: 25px;
`;

const Footer = () => {
  return <Rodape>© 2026 - MeuSite. Todos os direitos reservados.</Rodape>;
};

export default Footer;
