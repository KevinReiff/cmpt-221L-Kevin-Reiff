import React, { useState } from 'react';
import './App.css';
// Importing choice images
import rockImg from './assets/rock.png';
import paperImg from './assets/paper.png';
import scissorsImg from './assets/scissors.png';

// Object mapping for choices to easily reference name and associated image
const choices = {
  rock: { name: 'rock', img: rockImg },
  paper: { name: 'paper', img: paperImg },
  scissors: { name: 'scissors', img: scissorsImg },
};

function App() {
  // State hooks for user choice, computer choice, result message, and score
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  // Function to randomly generate the computer's choice
  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * Object.keys(choices).length);
    const randomChoice = Object.keys(choices)[randomIndex];
    setComputerChoice(choices[randomChoice]);
    return choices[randomChoice];
  };

  // Function to determine the winner and update the score accordingly
  const determineWinner = (player, computer) => {
    if (player.name === computer.name) {
      setResult('It\'s a draw!');
    } else if (
      (player.name === 'rock' && computer.name === 'scissors') ||
      (player.name === 'paper' && computer.name === 'rock') ||
      (player.name === 'scissors' && computer.name === 'paper')
    ) {
      setResult('You win!');
      setScore(prevScore => prevScore + 1); // Using functional update to ensure correct update of state
    } else {
      setResult('You lose!');
      setScore(prevScore => prevScore - 1);
    }
  };

  // Event handler for when a user selects a choice
  const onChoiceClick = (choiceKey) => {
    const playerChoice = choices[choiceKey];
    setUserChoice(playerChoice);
    const computerChosen = generateComputerChoice();
    determineWinner(playerChoice, computerChosen);
  };

  // JSX for the app, with conditionally rendered user and computer choices and results
  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div className="score">
        <p>Score: {score}</p>
      </div>
      <div className="choices">
        {/* Buttons for selecting rock, paper, or scissors */}
        <button onClick={() => onChoiceClick('rock')}>
          <img src={rockImg} alt="Rock" />
        </button>
        <button onClick={() => onChoiceClick('paper')}>
          <img src={paperImg} alt="Paper" />
        </button>
        <button onClick={() => onChoiceClick('scissors')}>
          <img src={scissorsImg} alt="Scissors" />
        </button>
      </div>
      <div className="results">
        {/* Display user's choice */}
        {userChoice && (
          <div className="choice">
            <p>Your choice:</p>
            <img src={userChoice.img} alt={userChoice.name} />
          </div>
        )}
        {/* Display computer's choice */}
        {computerChoice && (
          <div className="choice">
            <p>Computer's choice:</p>
            <img src={computerChoice.img} alt={computerChoice.name} />
          </div>
        )}
      </div>
      {/* Result message */}
      <p>{result}</p>
    </div>
  );
}

export default App;
