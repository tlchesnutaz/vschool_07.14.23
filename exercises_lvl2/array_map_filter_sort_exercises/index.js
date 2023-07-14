//make array of nums that are doubles of the first array

const nums = [3, 7, 16, 25, 48]

const resultDouble = nums.map(num => num * 2)
console.log(resultDouble)


//take an array of numbers and make them strings

const resultString = nums.map(num => String(num))
console.log(resultString)

//capitalize the first letter of each name  and make the rest lowercase

const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

function capNames(arr) {
    return arr.map((name) => {
      const capFirst = name.charAt(0).toUpperCase();
      const rest = name.slice(1).toLowerCase();
      return capFirst + rest;
    });
  }
console.log(capNames(names));

//make an array of strings of the names

const celebs = [
    {
        name: "Angelina Jolie",
        age: 80,
        member: true
    },
    {
        name: "Eric Jones",
        age: 2,
        member: false
    },
    {
        name: "Paris Hilton",
        age: 5,
        member: true
    },
    {
        name: "Kayne West",
        age: 16,
        member: false 
    },
    {
        name: "Bob Ziroll",
        age: 100,
        member: true
    }
]

const celebNames = celebs.map(celeb => celeb.name)
console.log(celebNames)

//make an array of strings of the names saying whether or not they can go to The Matrix

const canGo = celebNames.filter(celebName => celebName.includes("a"));
    console.log(canGo)

//if(celebNames.value[i] == canGo.value[i]) { 
//    console.log(celebs.name[i] + " can go to The Matrix.")
//} else

//make an array of the names in h1s and the ages in h2s

//given an array of numbers, return a new array that has only the numbers that are 5 or greater

const plus15 = nums.filter(num => num > 15);
console.log(plus15)

//given an array of numbers, return a new array that only includes the even numbers

const evenNums = nums.filter(num => num % 2 === 0)
console.log(evenNums)

//given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const words = ["dog", "wolf", "by", "family", "eaten", "camping"]

const under5 = words.filter(word => word.length <= 5)
console.log(under5)

//given an array of people objects, return a new array that has filtered out all those who don't belong to the club

const members = celebs.filter(celeb => celeb.member)
console.log(members)

//make a filtered list of all the people who are old enough to see The Matrix (older than 18)

const ofAge = celebs.filter(celeb => celeb.age > 18)
console.log(ofAge)

nums.sort((a, b) => b - a)
console.log(nums)

words.sort((a, b) => a.length - b.length) //sort by length, short to long
console.log(words)
words.sort()    //sort alphabetically
console.log(words)

//celebs.age.sort((a, b) => a - b)
//console.log(celebs)

let byAge = celebs.sort((a1, a2) => (a1.age > a2.age) ? 1 : (a1.age < a2.age) ? -1 : 0)
console.log(byAge)
