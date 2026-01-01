import React, { useState } from 'react'
import Totalscore from './Totalscore.jsx'
import Numberselector from './Numberselector.jsx'
import styled from 'styled-components'
import Rolldice from './Rolldice.jsx'
import Rules from './Rules.jsx'
import { Button, OutlineButton } from './styled/Button.js'

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomDice = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("Please select a number first");
      return;
    }

    setError("");

    const randomDice = generateRandomDice(1, 7);
    setCurrentDice(randomDice);

    if (randomDice === selectedNumber) {
      setScore(prev => prev + randomDice);
    } else {
      setScore(prev => (prev - 2 >= 0 ? prev - 2 : 0));
    }

    setSelectedNumber(null);
  };

  const resetGame = () => {
    setScore(0);
    setSelectedNumber(null);
    setCurrentDice(1);
    setError("");
  };

  return (
    <Maincontainer>
      <div className="Top-section">
        <Totalscore score={score} />

        <Numberselector
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <Rolldice
        currentDice={currentDice}
        rollDice={rollDice}
      />

      <div className="btns">
        <OutlineButton onClick={resetGame}>Reset</OutlineButton>
        <Button onClick={() => setShowRules(prev => !prev)}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </Button>
      </div>

      {showRules && <Rules />}
    </Maincontainer>
  );
};

export default Gameplay;

const Maincontainer = styled.main`
  padding-top: 70px;

  .Top-section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
