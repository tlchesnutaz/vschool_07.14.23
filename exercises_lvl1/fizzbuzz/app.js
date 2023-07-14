const readline = require("readline-sync");

let fizz = 0
let buzz = 0
let fizzbuzz = 0

    for (i = 0; i <= 100; i++) {

        if (i > 0 && i % 15 === 0){
            fizzbuzz = fizzbuzz + 1
            console.log('FizzBuzz') 
        }

        else if (i >0 && i % 3 === 0){
            fizz = fizz + 1
            console.log('Fizz')
        }

        else if (i > 0 && i % 5 === 0){
            buzz = buzz + 1
            console.log('Buzz')
        } 

        else 
            console.log(i)
    }

            console.log('fizzbuzz: ' + fizzbuzz + ',')
            console.log('fizz: ' + fizz + ',')
            console.log('buzz: ' + buzz)