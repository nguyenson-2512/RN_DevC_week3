import { CHOICES, messages } from "./constants";

const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutcome = (userChoice) => {
  const computerChoice = randomComputerChoice().name;
  let result;
  let description;

  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
    description = result === "Victory!" ? messages[1] : messages[2];
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
    description = result === "Victory!" ? messages[2] : messages[3];
  }
  if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
    description = result === "Victory!" ? messages[3] : messages[1];
  }

  if (userChoice === computerChoice) {
    result = "Tie game!";
    description = messages[0];
  }
  return [result, computerChoice, description];
};

export { randomComputerChoice, getRoundOutcome };
