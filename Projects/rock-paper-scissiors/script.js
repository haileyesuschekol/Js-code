
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **

const totalScore ={computerScore: 0, playerScore: 0}
 
function getComputerChoice() {
  
    const rpsChoice =['rock', 'papper', 'scissor']
    const randomNumber = Math.floor(Math.random()*rpsChoice.length)
    return rpsChoice[randomNumber]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **

function getResult(playerChoice, computerChoice) {
    
    let score
    if(playerChoice == computerChoice){
        score = 0
    }else if(playerChoice=='rock'&&computerChoice=='scissor'){
        score =1
    }else if(playerChoice=='papper'&&computerChoice=='rock'){
        score =1
    }else if(playerChoice=='scissor'&&computerChoice=='papper'){
        score =1
    }else{score = -1}
       
    return score
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
    const resultDiv = document.getElementById('result') 
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv =document.getElementById('player-score')

    if(score == -1 ){
        resultDiv.innerText= 'You lose!'
    }else if(score == 0){
        resultDiv.innerText= 'Draw' 
    }else{
        resultDiv.innerText= 'You Win!'
    }

    handsDiv.innerText= `you choose ${playerChoice} vs computer choose ${computerChoice}`
    playerScoreDiv.innerText = `You Score ${ totalScore['playerScore']}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  //console.log({playerChoice})
  const computerChoice = getComputerChoice()
  //console.log({computerChoice})
  const score = getResult(playerChoice,computerChoice)
  totalScore['playerScore'] +=  score
  //console.log({score})
  //console.log(totalScore)
  showResult(score,playerChoice,computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    const rpsButton =document.querySelectorAll('.rpsButton')
    rpsButton.forEach(rpsButton =>{
        rpsButton.onclick =() =>onClickRPS(rpsButton.value)
    })
    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = ()=> endGame(totalScore)
}

// ** endGame function clears all the text on the DOM **
function endGame() {
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0
    const resultDiv = document.getElementById('result') 
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv =document.getElementById('player-score')
    resultDiv.innerText = ''
    handsDiv.innerText = ''
    playerScoreDiv.innerText = ''
}

playGame()