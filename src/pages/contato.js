import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 80px auto;
  color: white;
  padding: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  border: none;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 15px;
  height: 150px;
  margin: 10px 0;
  border-radius: 8px;
  border: none;
`;

const Button = styled.button`
  padding: 15px 30px;
  background: #22c55e;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
`;

export default function Contato() {
  return (
    <Container>
      <h1>Contato</h1>
      <Input placeholder="Seu nome" />
      <Input placeholder="Seu email" />
      <Textarea placeholder="Mensagem" />
      <Button>Enviar</Button>
    </Container>
  );
}
