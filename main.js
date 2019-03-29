const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      return ('invalid input!')
    }
  };
  
  const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return ('BOMB SQUAD!!! User wins.')
    }
    if (userChoice === computerChoice) {
      return 'it is a tie!'
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return ('Computer wins!')
      } 
      else {
        return ('User wins!')
        }
  }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return ('Computer wins!')
      } 
      else {
        return ('User wins!')
        }
  }
    
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return ('Computer wins!')
      } 
      else {
        return ('User wins!')
        }
      }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('you chose: ' + userChoice);
    console.log('computer chose: ' +computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  