import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: 80px auto;
  color: white;
  padding: 20px;
`;

const Title = styled.h1`
  color: #22c55e;
  margin-bottom: 20px;
`;

export default function Sobre() {
  return (
    <Container>
      <Title>Sobre mim</Title>
      <p>
        Sou estudante de Sistemas Embarcados e desenvolvedor full-stack. Este
        site foi criado como prática de React e deploy.
      </p>
      <p>Tecnologias: React, Node.js, Python, IoT e Banco de Dados.</p>
    </Container>
  );
}
