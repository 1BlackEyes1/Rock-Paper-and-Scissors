function getComputerChoise() {
   let pcPlay = Math.floor(Math.random() * 3)
  if(pcPlay == 0){
    return 'Paper'
  }
  else if (pcPlay == 1){
    return 'Rock'
  }
  else (pcPlay == 2)
    return 'Scissors'
    
}


function playRound(playerSelection, computerSelection){
    playerSelection = prompt('Select your roll Rock Paper or Scissor');
    playerSelection = playerSelection.toLowerCase()
    computerSelection = getComputerChoise();
    if(playerSelection == 'rock' && computerSelection == 'Rock'){
        return 'Tie'
    }
    else if(playerSelection == 'rock' && computerSelection == 'Paper'){
        return 'You lose Paper beat Rock'
    }
    else if(playerSelection == 'rock' && computerSelection == 'Scissors'){
        return 'You win Rock beat Scissors'
    }
    else if(playerSelection == 'paper' && computerSelection == 'Paper'){
        return 'Tie'
    }
    else if(playerSelection == 'paper' && computerSelection == 'Scissors'){
        return 'You lose Scissors beat Paper'
    }
    else if(playerSelection == 'paper' && computerSelection == 'Rock'){
        return 'You win Paper beat Rock'
    }
    else if(playerSelection == 'scissors' && computerSelection == 'Scissors'){
        return 'Tie'
    }
    else if(playerSelection == 'scissors' && computerSelection == 'Rock'){
        return 'You lose Rock beat Scissors'
    }
    else (playerSelection == 'scissors' && computerSelection == 'Paper')
        return 'You win Scissors beat Paper'

}   



function game(){
    let result
    let playerWin = 0;
    let computerWin = 0;
    let x = 5;

    for(let i = 0; i < x; i++){
      result = playRound();
      

        if(result == 'You win Scissors beat Paper') {
            playerWin += 1
            console.log(result)
            console.log(playerWin)
            console.log(computerWin)
            
        }

        else if(result == 'You win Paper beat Rock'){
            playerWin += 1
            console.log(result)
            console.log(playerWin)
            console.log(computerWin)
            
        }
        else if(result == 'You win Rock beat Scissors'){
            playerWin += 1
            console.log(result)
            console.log(playerWin)
            console.log(computerWin)
            
        }
        else if(result == 'You lose Rock beat Scissors'){
            computerWin += 1 
            console.log(result)
            console.log(playerWin)
            console.log(computerWin)
         }
         else if(result == 'You lose Scissors beat Paper'){
            computerWin += 1 
            console.log(result)
            console.log(playerWin)
            console.log(computerWin)
         }
         else if(result == 'You lose Paper beat Rock'){
            computerWin += 1 
            console.log(result)
            console.log(playerWin)
            console.log(computerWin)
         }
        else if (result == 'Tie'){
            console.log(result)
            x += 1
        }
    }
    if(playerWin > computerWin){
        console.log('Congratulation YOU WIN')
    }      
    else if (playerWin < computerWin){
        console.log('YOU LOSE!')
    }
}

game()