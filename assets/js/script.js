// Selecionando os elementos HTML e atribuindo em suas variáveis
const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoice = document.querySelectorAll("#buttons button")
const scoreUserDisplay = document.getElementById("score-user")
const scoreComputerDisplay = document.getElementById("score-computer")
const scoreDrawDisplay = document.getElementById("score-draw")

// Criando variáveis para o jogo
let userChoice
let computerChoice
let resultGame
let scoreUser = 0
let scoreComputer = 0
let scoreDraw = 0

// Adicionando/Gerando evento para os botões
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.textContent = userChoice
    generateComputerChoice()
    generateGameResult()
    generateColorsForTheResult()
}))

// Gerando cores para o resultado
function generateColorsForTheResult() {
    if(computerChoice && resultGame === "Você perdeu !") {
        resultDisplay.style.color = "red"
    }
    else if(userChoice && resultGame === "Você ganhou !") {
        resultDisplay.style.color = "green"
    }
    else if(computerChoice && resultGame || userChoice === "É um empate !") {
        resultDisplay.style.color = "orangered"
    }
}

// Gerando o resultado do jogo
function generateGameResult() {
    
    if(computerChoice === userChoice) {
        resultGame = "É um empate !"
        scoreDraw ++
    }
    else if(computerChoice === "Pedra" && userChoice === "Papel") {
        resultGame = "Você ganhou !"
        scoreUser ++
    }
    else if(computerChoice === "Pedra" && userChoice === "Tesoura") {
        resultGame = "Você perdeu !"
        scoreComputer ++
    }
    else if(computerChoice === "Tesoura" && userChoice === "Pedra") {
        resultGame = "Você ganhou !"
        scoreUser ++
    }
    else if(computerChoice === "Tesoura" && userChoice === "Papel") {
        resultGame = "Você perdeu !"
        scoreComputer ++
    }
    else if(computerChoice === "Papel" && userChoice === "Tesoura") {
        resultGame = "Você ganhou !"
        scoreUser ++
    }
    else if(computerChoice === "Papel" && userChoice === "Pedra") {
        resultGame = "Você perdeu !"
        scoreComputer ++
    }
    
    resultDisplay.textContent = resultGame
    scoreUserDisplay.textContent = scoreUser
    scoreComputerDisplay.textContent = scoreComputer
    scoreDrawDisplay.textContent = scoreDraw
}

// Gerando escolha/jogada do computador
function generateComputerChoice() {
    const randomChoice = Math.floor(Math.random() * possibleChoice.length) + 1
    
    if(randomChoice === 1) {
        computerChoice = "Pedra"
    }
    else if(randomChoice === 2) {
        computerChoice = "Papel"
    }
    else {
        computerChoice = "Tesoura"
    }

    computerChoiceDisplay.textContent = computerChoice 
}