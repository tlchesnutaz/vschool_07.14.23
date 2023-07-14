const readlineSync = require('readline-sync');
const chalk = require('chalk');
//console.log(chalk.blue('Hello world!'));

playerStatus = ['Powered Up', 'Big', 'Small', 'Sorry, you are Dead'];

class Player {
    constructor (name, totalCoins, status, hasStar){   //set default parameters here , gameOver
        this.name = " "; //namePicked() 
        this.totalCoins = 0; //number - start with 0
        this.status = playerStatus[2]; //start with small "Small";
        this.hasStar = false;  //boolean
        //this.gameOver = false; //boolean
    }

    setName(){
        let namePicked = readlineSync.question(`Which player would you like to be: "M"ario or "L"uigi? `);
       
        if (namePicked == 'M'){
            this.name = 'Mario';
        } else if (namePicked == 'L'){
            this.name = 'Luigi';   
        } else {
            console.log(`Please choose a name.`);
        }
            console.log(`Hi ${this.name}! Ready, Set, Go!`);
    }

        /*when hit by enemy: powerUp -> lose star/big -> small -> dead/game over.
        LATER: if have star and get hit, take star but no damage?
        QUESTION: can you assign status a number and increment or decrement?*/
    gotHit(){
        if (this.status === playerStatus[0]){
            this.status = playerStatus[1];
            this.hasStar = false; 
            //console.log(this.status);
        } else if (this.status === playerStatus[1]){
            this.status = playerStatus[2];
            //console.log(this.status);
        } else if (this.status === playerStatus[2]){
            this.status = playerStatus[3];
            console.log(`Game Over!`);
            clearInterval(gameInterval);
            process.exit(0);
        }
        //console.log(this.status);
    }   
    
    
    /*when power is received, adjust status: small -> big -> powerUp/get star*/    
    gotPower(){
        if (this.status === playerStatus[2]){
            this.status = playerStatus[1];
            //console.log(this.status);
        } else if (this.status === playerStatus[1]){
            this.status = playerStatus[0];
            this.hasStar === true;
            console.log(`You got a STAR!`);
        }
    }
    
    //add a coin to totalCoins
    addCoin(){
        return this.totalCoins += 1;
    } 
    
    //print status after each 'round'
    print(){
        console.log(`Name: ${this.name}`);
        console.log(`Status: ${this.status}`);
        console.log(`Coins: ${this.totalCoins}`);
            if(this.hasStar === false){
                console.log(`Has Star: NO`);
            } else {
                console.log(`Has Star: YES`);  
            } 
    }     
}

// Main game loop
//const gameStart = () => {
    
let gameInterval = setInterval((randomRange), 3000);  //this sets the interval to run every 3 seconds
    const character = new Player()
    character.setName()
    
    // let gameInterval = setInterval(() => {
    // put random gen num () here - run every 2-3 seconds, and end when player is dead       
        // function randomRange(min, max){
        //     min = Math.ceil(min);
        //     max = Math.floor(max);
        //     return Math.floor(Math.random() * (max - min) + min);
        // }
        // let random = randomRange(0, 3)
    //}, 3000); //this sets the interval to run every 3 seconds 

    function randomRange() {
    let random = Math.floor(Math.random() * (3 - 0)) + 0;
    //console.log(random); 
    //let random = Math.floor((Math.random() * 3) + 1);
        if(random === 0){
            console.log(`You got hit!`);
            character.gotHit();
        } else if(random === 1){
            console.log(`You got powered up!`);
            character.gotPower();
        } else if(random === 2){
            console.log(`You got a coin!`);
            character.addCoin();
        }
       
        character.print(); 
    }   

//gameStart()
