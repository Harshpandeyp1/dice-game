import React from 'react'
import styled from 'styled-components'

const Rolldice = ({ rollDice, currentDice }) => {
  return (
    <Dicecontainer>
      <div className="dice" onClick={rollDice}>
        <img 
          src={`/images/dice/dice_${currentDice}.png`} 
          alt={`dice ${currentDice}`} 
        />
      </div>
      <p>Click On Dice to Roll</p>
    </Dicecontainer>
  );
};

export default Rolldice;

const Dicecontainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
