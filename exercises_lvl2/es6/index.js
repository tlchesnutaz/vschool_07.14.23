// Part 1
// Why is ageRange not defined?
// How can we fix this function with var? 
// How can we fix this function avoiding the use of var?
// Why would you use const vs let?

function getAgeRange({age}){
    let ageRange
    if(age < 18) {
        ageRange = "Child"
    } else if(age >= 18 && age < 80) {
        ageRange = "Adult"
    } else {
        ageRange = "Elderly Person"
    }
    return ageRange
}
// What would the above function potentially look like if we destructured the person parameter?
const person = { name: "Andrea", age: 27 }
// Why can we add .ageRange to person when we used const to define person?
person.ageRange = getAgeRange(person) // feel free to comment out lines that cause errors or lines that clutter the console
// console.log("The " + person.ageRange + ", " + person.name + ", is " + person.age + " years old.")
// change the above concatented string into a template literal
console.log(`The ${person.ageRange}, ${person.name}, is ${person.age} years old.`)
//-------------------------------------------------------------------------------------------

const springMonths = ["March", "April", "May"]
const fallMonths = ["September", "October", "November"]
// replace this line with one that uses a spread oporator to do the same thing as concat
// const fringeMonths = springMonths.concat(fallMonths)
const fringeMonths = [...springMonths, ...fallMonths]

console.log(springMonths, fallMonths, fringeMonths)
//-------------------------------------------------------------------------------------------

// Part 2
// https://coursework.vschool.io/es6-practice-let-const-fat-arrow-functions-default-arguments-template-literals/
// https://coursework.vschool.io/es6-practice-object-literals-destructuring-rest-and-spread-operators/
// For this review, follow the directions in the JS file to make the code more ES6y. Comment and uncomment code as you work down the file. Run it to make these funcitons work or just more readable practicing ES6.
// You'll be using:
// arrow functions
// rest
// spread
// destructuring in a parameter
// default parameters

const button = document.getElementById('button')
const output = document.getElementById('output')
const input = document.getElementById('input')

// change this function to be an arrow function
// button.addEventListener('click', function(){
button.addEventListener('click', () => {
    // output.innerText = "You've submitted: " + input.value
    output.innerText = `You've submitted: ${input.value}`
})  
//-------------------------------------------------------------------------------------------

// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
function collectAnimals(...animals) {  
    /*and here*/ return animals
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]
//-------------------------------------------------------------------------------------------

// Use destructuring to use the property names as variables:
const vacation = {  
  location: "Burly Idaho",
  duration: "2 weeks"
};
function parseSentence({location, duration}){
  return `We're going to have a good time in ${location} for ${duration}!`
}
console.log(parseSentence(vacation)) // this line will break stuff unless you fix the parameter
//-------------------------------------------------------------------------------------------

// Make the following function more ES6xy. Use at least both the rest and spread operators:
// this function should add as many items to the front of the returned array as the caller of the function wants
// function unshift(array, a, b, c, d, e) {  
//   return [a, b, c, d, e].concat(...array);
// }
function unshift(array, ...second) {  
     return [...second, ...array];
}
//----------------------------------------------------------------------------------

// make "greeting" default to "hello"
function greet(name, greeting = "Hello"){
    return greeting + ", " + name
}
// console.log(greet('Emily'))
console.log(greet('Emily', "Wassssup"))   //can override default
//-------------------------------------------------------------------------------------------

// function returnFirst(items){
//     const firstItem = items[0]; /*change this line to be es6*/ const 
//     return firstItem
// }
const firstItem = (items) => {
    const [a, b] = items
    console.log(a) 
}
firstItem(["apple", "pear"])
//-------------------------------------------------------------------------------------------

function combineFruit(fruit, sweets, vegetables){
    let obj = {
        fruit, 
        sweets, 
        vegetables
    }
    return obj
}
console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))

//=> {
//     fruit: ["apple", "pear"],
//     sweets: ["cake", "pie"],
//     vegetables: ["carrot"]
//    }
//-------------------------------------------------------------------------------------------

// - `const [varIMakeUpRightHereForTheFirstItemInTheArray] = arr`
// does the same thing as:
// `const varIMakeUpRightHereForTheFirstItemInTheArray = arr[0]`
  
// - more cool syntax (not real relevant to the question though)
// const arr = ["important", "skip", "important"]`
// const [nameFirstItemHere, , nameThirdItemHere] = arr
//-------------------------------------------------------------------------------------------

function combineAnimals() {
    let combAnims = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
    return combAnims
}
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))
// ["dog", "cat", "mouse", "jackolope", "platypus"]
//-------------------------------------------------------------------------------------------

const nums = [5, 64, 2, 21, 3]
const product = nums.reduce(function(acc, number) {
      return acc * number;
    }, 1)
console.log(product)
//-------------------------------------------------------------------------------------------

//Make the following function more ES6xy. Use at least both the rest and spread operators:
// function unshift(array, a, b, c, d, e) {  
//     return [a, b, c, d, e].concat(array);
// }

let letters = Array.of('a', 'b', 'c', 'd', 'e');
console.log(letters)
let arrays = Array.of('rice', 'corn', 'oats', 'quinoa');
console.log(arrays)

// let newArr = unshift([...letters, ...arrays]) 
// return newArr
// console.log(newArray)
// Solution:
// function unshift(array, ...array2) {
//   return [...array2, ...array];
// }
// Best solution:
// const unshift = (array, ...character) => [...character, ...array];
//-------------------------------------------------------------------------------------------

// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
//-------------------------------------------------------------------------------------------

//Re-write this `.map()` using an arrow function:
// Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting 
//a function, and not starting an object, so the `:` will be an unexpected symbol.
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}
//-------------------------------------------------------------------------------------------

//Re-write this .filter() ’s callback function using an arrow function:
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(function(person) {
        return person.friendly
    })
}
//-------------------------------------------------------------------------------------------

//Re-write the following functions to be arrow functions:
function doMathSum(a, b) {
    return a + b
}

var produceProduct = function(a, b) {
    return a * b
}
Hi
//-------------------------------------------------------------------------------------------

//Write a printString function that takes firstName, lastName, 
//and age as parameters and returns a string like the following: 
//Use template literals to build the string
//Hi Kat Stark, how does it feel to be 40?
//firstName should default to "Jane"lastName should default to "Doe"age should default to 100
//-------------------------------------------------------------------------------------------

//Use the shorthand syntax to make the following filter take up one line. 
//Copy and paste the array to test it.
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => {
         if (animal.type === "dog") {
             return true
         } else {
             return false
         }
     })
 }
//-------------------------------------------------------------------------------------------

//Using template literals, write a function that takes location 
//and name parameters and outputs a message formatted like this: 
// Hi Janice!

// Welcome to Hawaii.

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.
//-------------------------------------------------------------------------------------------

// Write destructuring code to assign variables that will help us return the expected string. 
// Also, change the string to be using Template literals:
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    /*your code here*/
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
}

returnFavorites(favoriteActivities)
//-------------------------------------------------------------------------------------------

