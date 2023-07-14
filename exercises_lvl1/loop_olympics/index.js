/*
//Preliminaries 
//1  Write a for loop that prints to the console the numbers 0 through 9
for (i = 0; i <= 9; i++) {
    console.log(i)
}

//2  Write a for loop that prints to the console 9 through 0
for (i = 9; i >= 0; i--) {
    console.log(i)
}

//3  Write a for loop that prints these fruits to the console
//const fruit = ["banana", "orange", "apple", "kiwi"]
//for (i = 0; i < fruit.length; i++) {
//    console.log(fruit[i])
//}

//Bronze
//1  Write a for loop that will push the numbers 0 through 9 to an array
var numArr = []
for (i = 0; i <= 9; i++) {
    numArr.push(i)
}
console.log(numArr)

//2  Write a for loop that prints to the console only even numbers 0 through 100 
for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
       console.log(i) 
    }
}

//3  Write a for loop that will push every other fruit to an array
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
const fruitTwo = []
for (i=0; i < fruit.length; i +=2) {
    fruitTwo.push(fruit[i])
}
console.log(fruitTwo)

//Silver

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations

//1  Write a loop that will print out all the names of the people of the people array
for (i=0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name)
}

//2  Write a loop that pushes the names into a names array, and the occupations into an occupations array.
const nameArr = []
const occupationArr = []
for (i=0; i < peopleArray.length; i++) {
    nameArr.push(peopleArray[i].name)
    occupationArr.push(peopleArray[i].occupation)
}
console.log(nameArr, occupationArr)

//3  Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer"
const namesArr = []
const occupationsArr = []
for (i=0; i < peopleArray.length; i++) {
    if (i % 2 === 0) {
        namesArr.push(peopleArray[i].name)
    }
    else {
        occupationsArr.push(peopleArray[i].occupation)
    }
}
console.log(namesArr, occupationsArr)
*/

//Gold
/*
//1 - can't fiqure out how to just log 0's 
var len = 2
const zeroArr = [];

console.log(zeroArr)

for (var i = 0; i < len; i++) {
    zeroArr[i] = '0'
    for (var j = 0; j < len; j++) {
    zeroArr[j] = '0'
    }
}
console.log(zeroArr[i][j]) 
*/