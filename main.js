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
    playerSelection = prompt('Select your roll Rock Paper or Scissor').toLowerCase();
    computerSelection = getComputerChoise();
    if(playerSelection == 'rock' && computerSelection == 'Rock'){
        return 'Tie '
    }
    else if(playerSelection == 'rock' && computerSelection == 'Paper'){
        return 'You lose Paper beat Rock'
    }
    else if(playerSelection == 'rock' && computerSelection == 'Scissors'){
        return 'You win Rock beat Scissors'
    }
    else if(playerSelection == 'paper' && computerSelection == 'Paper'){
        return 'Tie '
    }
    else if(playerSelection == 'paper' && computerSelection == 'Scissors'){
        return 'You lose Scissors beat Paper'
    }
    else if(playerSelection == 'paper' && computerSelection == 'Rock'){
        return 'You win Paper beat Rock'
    }
    else if(playerSelection == 'scissors' && computerSelection == 'Scissors'){
        return 'Tie '
    }
    else if(playerSelection == 'scissors' && computerSelection == 'Rock'){
        return 'You lose Rock beat Scissors'
    }
    else (playerSelection == 'scissors' && computerSelection == 'Paper')
        return 'You win Scissors beat Paper'

}   
console.log(playRound())

function game(){
    let playerWin = 0
    let computerWin = 0
    let x = 5
    
    
    for(let i = 0; i < 5; i++){
        playRound();
        if(playRound === 'You win Scissors beat Paper' || 'You win Paper beat Rock' || 'You win Rock beat Scissors' ){
            playerWin++
            
        }
        else if(playRound === 'You lose Rock beat Scissors' || 'You lose Scissors beat Paper' || 'You lose Paper beat Rock'){
            computerWin++ 
            
        }
        else(playRound == 'Tie')
        
    }
    console.log(playerWin)
    console.log(computerWin)
}

console.log(game())