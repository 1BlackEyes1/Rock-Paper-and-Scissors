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

let countP = 0;
let countC = 0;
const countPlayer = document.createElement('p');
document.body.appendChild(countPlayer);
countPlayer.textContent = `PlayerScore : ${countP}`;

const countComp = document.createElement('p');
document.body.appendChild(countComp);
countComp.textContent = `ComputerScore : ${countC}`;

const btnRock = document.createElement('button')
btnRock.textContent = 'Rock';
document.body.appendChild(btnRock)

const btnPaper = document.createElement('button');
btnPaper.textContent = 'Paper';
document.body.appendChild(btnPaper);

const btnScissors = document.createElement('button');
btnScissors.textContent = 'Scissors';
document.body.appendChild(btnScissors)


btnRock.addEventListener('click', () => {
 playRound('Rock')
 
});

btnPaper.addEventListener('click', () => {
    playRound('Paper')
    
});

btnScissors.addEventListener('click', () => {
    playRound('Scissors')
})

const resultPlayRound = document.createElement('div');
document.body.appendChild(resultPlayRound)


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoise();
   
    if(playerSelection == 'rock' && computerSelection == 'Rock'){
        resultPlayRound.textContent = 'Tie';
    } else if (playerSelection == 'rock' && computerSelection == 'Paper'){
        resultPlayRound.textContent = 'You lose Paper beat Rock';
        countC++
        countComp.textContent = `ComputerScore : ${countC}`;
    } else if (playerSelection == 'rock' && computerSelection == 'Scissors'){
        countP++;
        countPlayer.textContent = `PlayerScore : ${countP}`;
        resultPlayRound.textContent = 'You win Rock beat Scissors';  
    } else if (playerSelection == 'paper' && computerSelection == 'Paper'){
        resultPlayRound.textContent = 'Tie';
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors'){
        resultPlayRound.textContent = 'You lose Scissors beat Paper'
        countC++
        countComp.textContent = `ComputerScore : ${countC}`;
    } else if (playerSelection == 'paper' && computerSelection == 'Rock'){
        resultPlayRound.textContent = 'You win Paper beat Rock';
        countP++;
        countPlayer.textContent = `PlayerScore : ${countP}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'Scissors'){
        resultPlayRound.textContent = 'Tie';
    } else if (playerSelection == 'scissors' && computerSelection == 'Rock'){
        resultPlayRound.textContent = 'You lose Rock beat Scissors';
        countC++
        countComp.textContent = `ComputerScore : ${countC}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper'){
    resultPlayRound.textContent = 'You win Scissors beat Paper'   
    countP++;
    countPlayer.textContent = `PlayerScore : ${countP}`;
    }

    if(countP == 5){
         resultPlayRound.textContent = "congratulations you won the game"
        }
    else if(countC == 5){
        resultPlayRound.textContent = "YOU LOSE! Computer Won the Game"
        }

        if(countP == 5 || countC == 5){
            countC = 0
            countP = 0
            countPlayer.textContent = `PlayerScore : ${countP}`;
            countComp.textContent = `ComputerScore : ${countC}`;
        }
}   


           



