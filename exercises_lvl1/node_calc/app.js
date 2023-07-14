const readline = require("readline-sync");

const numOne = readline.questionInt('Please enter your first number. ')
console.log('The first number you chose is ' + numOne);
const numTwo = readline.questionInt('Please enter your second number. ')
console.log('The second number you chose is ' + numTwo);
const operation = readline.question('Please enter the operation to perform: add, sub, mul or div: ')
//console.log('You chose to ' + operation)

if (operation == 'add')
    console.log(result() + addNums(numOne, numTwo))
else if (operation == 'sub')
    console.log(result() + subNums(numOne, numTwo))
else if (operation == 'mul')
    console.log(result() + mulNums(numOne, numTwo))
else if (operation == 'div')
    console.log(result() + divNums(numOne, numTwo))

function result(){
    return 'You chose to ' + operation + ' and the result is: '
}
function addNums(numOne, numTwo){
    return numOne + numTwo
} 
function subNums(numOne, numTwo){
    return numOne - numTwo
}
function mulNums(numOne, numTwo){
    return numOne * numTwo
}
function divNums(numOne, numTwo){
    return numOne / numTwo
}