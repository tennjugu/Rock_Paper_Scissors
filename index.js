function getComputerChoice(choices) {
    const choiceIndex = Math.floor(Math.random () * choicesLength)
    return choices[choiceIndex]
}
const choices= ["rock", "paper", "scissors"]
const choicesLength = choices.length
//console.log(getComputerChoice(choices))

let getPlayerChoice = prompt("Pick between rock, paper or scissors")
console.log(getPlayerChoice.toLowerCase())
if (getPlayerChoice.toLowerCase() != "rock" && getPlayerChoice.toLowerCase() != "paper" && getPlayerChoice.toLowerCase() != "scissors")
alert("Your choice was not rock, paper or scissors. Try again")


