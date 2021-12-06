let tonyHealth = 100

let winner = 'The winner is Captain America'

winner = winner.replace('Captain America', 'Iron Man')

// if(winner.includes('Iron')){
//     console.log('replaced successfully')
// }

let lowerWinner = winner.toLowerCase()
let winnerSplit = lowerWinner.split(' ')
let winnerKebob = winnerSplit.join('-')

//function declaration
// function isTonyAlive() {
//     if(tonyHealth > 0){
//         console.log('Tony is alive!')
//     } else {
//         console.log('RIP Tony.')
//     }
// }

//function expression
// const isTonyAlive = function(){
//     if(tonyHealth > 0){
//         console.log('Tony is alive!')
//     } else {
//         console.log('RIP Tony.')
//     }
// }

//arrow function
const isTonyAlive = () => {
    if(tonyHealth > 0){
        console.log('Tony is alive!')
    } else {
        console.log('RIP Tony.')
    }
}

//function declaration
// function surpriseAttack(attack){
//     tonyHealth -= attack
//     console.log(tonyHealth)
// }

//function expression
// const surpriseAttack = function(attack){
//     tonyHealth -= attack
//     console.log(tonyHealth)
// }

//arrow function
const surpriseAttack = (attack) => {
    tonyHealth = tonyHealth - attack
    isTonyAlive()
    return tonyHealth
}

// let attack1 = surpriseAttack(20)
// let attack2 = surpriseAttack(12)
// let attack3 = surpriseAttack(45)
// let attack4 = surpriseAttack(25)

function greeting(person1, person2){
    console.log(`${person1} says hello to ${person2}.`)
}

// greeting('Iron Man', 'Hulk')
// greeting('Iron Man', 'Hulk', 'Iron Patriot')
// greeting('Iron Man')

// greeting(1, 2)
// greeting(true, [1, 2, 3])

function rollDice(){
    let possibleRolls = [1, 2, 3, 4, 5, 6]
    let randomNumber = Math.floor((Math.random() * possibleRolls.length))
    return possibleRolls[randomNumber]
}

let firstRoll = rollDice()
let secondRoll = rollDice()

const rollTwo = () => {
    let firstRoll = rollDice()
    let secondRoll = rollDice()

    return firstRoll + secondRoll
}

let attackRoll = rollTwo()

console.log(attackRoll)