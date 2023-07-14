const readline = require("readline-sync");

const name = readline.question("What is your name? ")
console.log(`Hello ${name}! You just awoke to find yourself in a dark room.`)
console.log(`In order to escape, you must find the key and open the door. Please select what you want to do: `)


let noKey = true
//let count = 0
let alive = true

while (alive === true) {

    let options = readline.questionInt(
`1. Find the key; 
2. Open the door; 
3. Reach your hand into the hole in the wall; `)

if (options === 1)
    console.log(keyOne())
        
else if (options === 2)
    console.log(door())

else if (options === 3)
    console.log(dead())
    }
 
function keyOne() {
    noKey = false
    return 'You found the key! What do you want to do now? '
    }

function door() { 
    if (noKey === true) {
        return 'Sorry, you must find the key first! Try again: '
    }
    else if (noKey === false) {
        alive = false
        return 'Yay! You just opened the door and escaped :)' 
    }
    }

function dead() {
    alive = false
    return `Sorry ${name}, you got bit by a poisonous scorpion and just died! `
    }
    