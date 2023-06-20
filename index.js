function getComputerChoice(choices) {
    const choiceIndex = Math.floor(Math.random () * choicesLength)
    return choices[choiceIndex]
}
const choices= ["Rock", "Papper", "Scissors"]
const choicesLength = choices.length
console.log(getComputerChoice(choices))