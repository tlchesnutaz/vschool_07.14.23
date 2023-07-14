//turn an array of numbers into a total of all the numbers

const nums = [1, 2, 3, 4, 7, 13, 18, 26, 35, 49]
const resultAdd = nums.reduce(function(final, num){
    final = final += num
    return final
})
console.log(resultAdd)

//turn an array of numbers into a long string of all those numbers

const resultString = nums.reduce(function(final, num){
    final = final += num
    return final
}, " ")
console.log(resultString)

//turn an array of voter objects into a count of how many people voted

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const totalVotes = voters.reduce(function(final, voter){
    if(voter.voted){
        final++
    }
    return final
}, 0)
console.log(totalVotes)

//given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const wishTotal = wishlist.reduce(function(final, wish){
    final = final + wish.price
    return final
}, 0)
console.log(wishTotal)

//given an array of arrays, flatten them into a single array

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const combineArrays = arrays.reduce(function(final, array){
    final = final.concat(array)
    return final
}, [])
console.log(combineArrays)

//given an array of potential voters, return an object representing the results of the vote

const voterResults = voters.reduce(function(final, voter){
    if(voter.age <= 25 && voter.voted){
        final.numYoungVotes++, final.numYoungVoters++
    } else if (voter.age <= 25 && !voter.voted){
        final.numYoungVoters++
    }
    if(voter.age > 25 && voter.age < 36 && voter.voted){
        final.numMidVotes++, final.numMidVoters++
    } else if (voter.age > 25 && voter.age < 36 && !voter.voted){
        final.numMidVoters++
    }
    if(voter.age >= 36 && voter.age <= 55 && voter.voted){
        final.numOldVotes++, final.numOldVoters++
    } else if (voter.age >= 36 && voter.age <= 55 && !voter.voted){
        final.numOldVoters++
    }
    return final

}, {numYoungVotes: 0, numYoungVoters: 0, numMidVotes: 0, numMidVoters: 0, numOldVotes: 0, numOldVoters: 0})

console.log(voterResults)

//Using the provided `peopleArray` (bottom of this article), write a function that:
//1. Returns a list of everyone older than 18, which is
//2. sorted alphabetically by last name, and where
//3. each name and age is embedded in a string that looks like an HTML `<li>` element.

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const peopleArr2 = peopleArray.filter(people => people.age > 18)
console.log(peopleArr2)

peopleArr2.sort((a, b) => {
    let la = a.lastName.toLowerCase(),
        lb = b.lastName.toLowerCase();
    if (la < lb) {
        return -1;
    }
    if (la > lb) {
        return 1;
    }
    return 0;
})
console.log(peopleArr2)

const peopleArr3 = peopleArr2.map(function(people){
  return '<li>' + people.firstName + " " + people.lastName + ' is ' + people.age + '</li>'
}, [])
console.log(peopleArr3)


