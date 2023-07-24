const choices = [
    "rock",
    "paper",
    "scissors",
    "lizard",
    "spock"
  ];
  let playerScore = 0;
  let computerScore = 0;
  let rounds = 3;
  
  function getPlayerChoice() {
    return prompt(
      "Enter your choice (rock/paper/scissors/lizard/spock):"
    ).toLowerCase();
  }
  
  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function determineRoundWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === "rock" &&
        (computerChoice === "scissors" || computerChoice === "lizard")) ||
      (playerChoice === "paper" &&
        (computerChoice === "rock" || computerChoice === "spock")) ||
      (playerChoice === "scissors" &&
        (computerChoice === "paper" || computerChoice === "lizard")) ||
      (playerChoice === "lizard" &&
        (computerChoice === "paper" || computerChoice === "spock")) ||
      (playerChoice === "spock" &&
        (computerChoice === "scissors" || computerChoice === "rock"))
    ) {
      playerScore++;
      return "You win this round!";
    } else {
      computerScore++;
      return "Computer wins this round!";
    }
  }
  
  function playGame() {
    for (let i = 0; i < rounds; i++) {
      console.log(`Round ${i + 1}:`);
      const playerChoice = getPlayerChoice();
      const computerChoice = getComputerChoice();
  
      console.log(`You chose: ${playerChoice}`);
      console.log(`Computer chose: ${computerChoice}`);
  
      const roundResult = determineRoundWinner(playerChoice, computerChoice);
      console.log(roundResult);
  
      console.log("----------------------------");
    }
  
    console.log("Game Over!");
    console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log(
      playerScore > computerScore
        ? "Congratulations! You win!"
        : playerScore < computerScore
        ? "Computer wins! Better luck next time!"
        : "It's a tie game!"
    );
  }
  
  playGame();
