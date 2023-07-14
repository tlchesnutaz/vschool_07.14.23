var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let counter = 0
for (i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === 'computer') counter++;
}
console.log('There are ' + counter + ' computers');

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

/*const proNoun = 
for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male') {
        let proNoun = 'HIM';
    }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'female') { 
        let proNoun = '';
    }
}
*/

for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'female') {
        console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see MMFR, don't let HER in.");
    }
    else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male') {
        console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see MMFR, don't let HIM in.");       
    }
    else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'female') {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE'S good to se MMFR");
    }
    else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male') {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. HE'S good to se MMFR");
}
}

var numSwitchs = [55, 2, 9, 73, 6]
let sum = 0

for(i = 0; i < numSwitchs.length; i++) {
   sum += numSwitchs[i]
   }
   if (sum % 2 === 0) {
   console.log('The light is off')
   }
   else {
console.log('The light is on')
   }

// Array Methods Practice
// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_array.asp

var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]
// push, pop, unshift, shift affects/changes the existing array (doesn't create a new array)
// push - adds item(s) to the end of the array
    arrOfFoods.push("cereal")
    console.log(arrOfFoods)
// will return arrOfFoods with 'cereal' added to end

// pop - removes item from the end of the array 
   arrOfFoods.pop()
   console.log(arrOfFoods)
// will remove arrOfFoods with 'cereal' removed from end

// unshift - adds item(s) to the beginning of the array
   arrOfFoods.unshift("cereal")
   console.log(arrOfFoods)

// shift - removes item from the beginning of the array
   arrOfFoods.shift()
   console.log(arrOfFoods)

// concat
// creates a new array (so need to create a new variable/array name) 
// it doesn't change the original arrays
  var colors1 = ["blue", "green"]
  var colors2 = ["purple", "red"]
  var newArr = colors1.concat(colors2)
  console.log(newArr)

// indexOf 
// returns the index of a given item in the array - if item not in array it will return -1 
// - works the same as with strings
var pizzaIndex = arrOfFoods.indexOf("pizza")
console.log(pizzaIndex)

// slice - will return a new array with the values up to the index given (but not including)
 // it doesn't change the original array
var newArr = arrOfFoods.slice(1, 3)
console.log(newArr)
// will return new array of ["egg", "ice cream"] - 

// join - turns an array into a string
//for strings - to break a word into an array of each character
// it doesn't change the original array
   var person = 'steve'
   var splitName = person.split("")
   console.log(splitName) // will return ["s", "t", "e", "v", "e"]
//  
   var joinedName = splitName.join("") // will return ["steve"]
   var joinedName = splitName.join("-") // will return ["s-t-e-v-e"]

// reverse - 
   var personTwo = "rick" //
   var splitNameTwo = personTwo.split("")
   var reversedArr = splitNameTwo.reverse()
   console.log(reversedArr) // will return ["k", "c", "i", "r"]
   var reversedName = reversedArr.join("")
   console.log(reversedName) // will return ["kcir"]
// this is great, but to do it all at once do this...
var allAtOnce = personTwo.split("").reverse().join("")
console.log(allAtOnce)

   // splice - changes the original array
   arrOfFoods.splice(2, 2)
   console.log(arrOfFoods) // will return  ["pancake", "egg", "hamburger"]

   var result = arrOfFoods.splice(2, 2)
    console.log(result) // will return ["ice cream", "pizza"]

   arrOfFoods.splice(2, 2, "bacon", "ice cream")
   console.log(arrOfFoods) // will return ["pancake", "egg", "bacon", "ice cream", "hamburger"]

