const readline = require("readline-sync")
const emoji = require("node-emoji")

// welcome player, get and store thier name
console.log(`Hello brave soul! Welcome to a Colossal Adventure.`)
const name = readline.question(`What name may we call you by? `)
console.log(`Ok ${name}, your adventure begins!`, emoji.get("snow_capped_mountain"), ` We hope you have prepared well... `)

let alive = true
let userHealth = 5
let enemyHealth = 5
// initialize(?) inventory array to push won items into
let inventory = []

// main game loop while player is alive
while (alive === true){

    let options = readline.question(`Type "w" (walk) when you are ready to venture forth! You can also type "i" to see your name and inventory. `)
 
    if (options === "w"){
// function to run when player walks to determine random number 
// this determines if 1 of 3 enemies appears and they are attacked - 1 in 3 chance - or just get message about weather
    function walkRandomInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    let random = walkRandomInt(1, 10)
    //console.log(random)

        if (random === 3)
            spider()

        else if (random === 6)
           zombie()

        else if (random === 9)
           unspeakable()

        else if (random === 1 || random === 5 || random === 7)
           badWeather()

        else if (random === 2 || random === 4 || random === 8)
           goodWeather()
    }

// if user types i, print their name and inventory
    else if (options === "i"){
        console.log(`Did you get hit on the head? Your name is ${name} and you possess: ${inventory}.`)
    }
}

    // if num is 3 they get attacked by giant spider 
    function spider(){
        console.log(`Watch out ${name}, you are being attacked by a giant spider! `, emoji.get('spider'));
        runFight()
    }

    // if num is 6 they get attacked by a zombie
    function zombie(){
        console.log(`Oh no ${name}, you have walked into a clearing to find a zombie coming towards you! `, emoji.get('zombie'));
        runFight()
    }

    // if num is 9 they get attacked by an ? 
    function unspeakable(){
        console.log(`An unspeakable thing is hurling gobs of peutrid goo at you ${name},`, emoji.get("biohazard_sign"), ` you may want to run from this one...` );
        runFight()
    }

    // if num is 2, 4 or 8 they get message about scenery and are prompted to walk again
    function goodWeather(){
        console.log(`It's a lovely day for a walk ${name}, enjoy the sunshine`, emoji.get('sunny'), ` who knows how long it will last...` );
    } 

    // if num is 1, 5 or 7 thay get a message about bad weather and prompted to walk again
    function badWeather(){
        console.log(`Well ${name}, the weather sure is fickle,`, emoji.get('tornado'), ` we hope it's not a sign of things to come`, emoji.get('scream'));
    }

// function if attacked - do they fight or run  - 
function runFight(){
    let runOrFight = readline.question(`Do you want to run or fight? Type "r" to run, "f" to fight: `)
    //console.log({runOrFight})  

        // if they run - they have 50% chance of escape - random gen num 1 or 2 - 1 they escape, 2 they are attacked 
    if (runOrFight === "r"){ 
        function escapeOrNot(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }

        let escape = escapeOrNot(1, 3)
        let escape = escapeOrNot(1, 3)
        //console.log(escape)
        
        if (escape === 1) {
            console.log(`Phew, you escaped, that was a close call!`)
        }

        // if they run and are attacked they get random damage - random gen - how to do this???
        // try comment this out and just skip to else if runOrFight?
        else {
            alive = false
            console.log(`That despicable wild enemy attacked you from behind as you ran!`)
            death()
        }
    }
  
        //  if they fight - they deal random damage  - random gen
        else if (runOrFight === "f"){

        function userToEnemyDamage(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);   
        }

        let enemyDamage = userToEnemyDamage(1, 6)

        console.log(`Way to go, you dealt the enemy ${enemyDamage} damage points.`)
        enemyHealth = enemyHealth - enemyDamage
        
        if (enemyHealth <= 0){
            console.log(`You killed the enemy! You receive a shield!`, emoji.get('shield'))
            inventory.push("shield")
            enemyHealth = 5
            return
        } else {
            console.log(`You wounded the enemy!`)
            //runFight()
        }

        function enemyToUserDamage(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);   
        }
    
        let userDamage = enemyToUserDamage(1, 6)
        
        console.log(`The enemy dealt you ${userDamage} damage points.`)    
        userHealth = userHealth - userDamage
                  
        if (userHealth <= 0){ 
            alive = false
            death() 
        } else {
            console.log(`You have been wounded and have ${userHealth} health points left.`, emoji.get('face_with_head_bandage'))
            runFight()
        }

    }

}

// function when player dies
function death() {
    alive = false
    console.log(`Sorry brave ${name}, your adventure has come to an end. `, emoji.get('skull_and_crossbones'), ` `, emoji.get('coffin'))
    console.log(`We wish you better luck on your next adventure!`, emoji.get('four_leaf_clover'))
} 
