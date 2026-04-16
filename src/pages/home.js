import styled from "styled-components";

const Hero = styled.section`
  height: 90vh;
  background: linear-gradient(180deg, #020617, #0f172a);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 60px;
  color: #22c55e;
`;

const Text = styled.p`
  max-width: 600px;
  font-size: 20px;
  margin: 20px 0;
  color: #cbd5e1;
`;

const Button = styled.button`
  padding: 15px 35px;
  background: #22c55e;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    background: #16a34a;
  }
`;

export default function Home() {
  return (
    <Hero>
      <Title>Portfólio React</Title>
      <Text>
        Site criado para praticar React Router, Styled Components e publicação
        no GitHub Pages.
      </Text>
      <Button>Ver Projetos</Button>
    </Hero>
  );
}
