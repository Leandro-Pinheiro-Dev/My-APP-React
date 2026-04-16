import React from "react";
import styled from "styled-components";

const Hero = styled.section`
  padding: 100px 40px;
  text-align: center;
`;

const Title = styled.h1`
  color: #31e636;
  font-size: 48px;
`;

const Home = () => {
  return (
    <Hero>
      <Title>Bem-vindo ao MeuSite </Title>
      <p>Projeto React com rotas e componentes reutilizáveis.</p>
    </Hero>
  );
};

export default Home;
