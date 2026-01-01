import styled from 'styled-components';
import { Button } from './styled/Button';

const StartGame = ({toggle}) => {
  return (
    <Container>
      <img src="/images/dices.png" alt="startgame" />
      <Content>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>PLAY NOW</Button>
      </Content>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  max-width: 1180px;
`;

const Content = styled.div`
  h1 {
    font-size: 96px;
    font-weight: bold;
    white-space: nowrap;
  }
`;


