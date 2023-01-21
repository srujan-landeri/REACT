import React from 'react';
import Die from './Die';
import { nanoid } from 'nanoid';
import './style.css';
import Confetti from 'react-confetti';
import StopWatch from './stopwatch';

export default function MainGame(props) {
  // stores objects of die
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [totalRolls, setTotalRolls] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);

  React.useEffect(() => {
    let target_value = dice[0].value;
    let allHeld = dice.every((die) => die.isHeld);
    let sameValue = dice.every((die) => die.value === target_value);

    if (allHeld && sameValue) {
      setTenzies(true);
      setIsRunning(false);
      setTimeout(() => {
        props.gameEnded();
      }, 1000 * 8);
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  // function generates 10 random values
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  // will generate a new set of 10 random values
  function rollDice() {
    //state => true
    setIsRunning(true);
    if (tenzies) {
      setDice(allNewDice);
      setTotalRolls(0);
      setTenzies(false);
      setIsRunning(false);
    } else {
      setTotalRolls((prev) => prev + 1);
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    }
  }

  // mapping each dice with a Die component
  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      holDice={() => holdDice(die.id)}
      isHeld={die.isHeld}
      value={die.value}
      id={die.id}
      holdDice={() => holdDice(die.id)}
    />
  ));

  function holdDice(id) {
    // state true
    setIsRunning(true);
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  return (
    <div className="App">
      {tenzies && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <div>
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>

      <div className="dice-container">{diceElements}</div>
      {!tenzies && <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>}

      <StopWatch
        totalRolls={totalRolls}
        tenzies={tenzies}
        isRunning={isRunning}
        playerName={props.playerName}
      />
    </div>
  );
}
