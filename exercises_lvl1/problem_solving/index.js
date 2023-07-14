//Write a function that takes an array of numbers and returns the largest 
//(without using Math.max())
//console.log(largest([6, 13, 250, 3])) // => 250
//console.log(largest([3, 5, 2, 8, 1])) // => 8
//console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40

let arr = [6, 13, 250, 3]
let largest = arr[0]
console.log(largest)

function largestNum() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest)
        largest = arr[i]
    }
    return largest
    
}
console.log(largestNum(arr))


//Write a function that takes an array of words and a character 
//and returns each word that has that character present.

//console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!"))  // => ["$hello!", "test!"]
//console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
//console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []

let arry = ["$hello!", "%%^%%", "test!"]
let newArry = []

function stringWChar() {
    for (let i = 0; i < arry.length; i++){
    if (arry[i].includes("!")) {
        newArry.push(arry[i])
    }
}
return newArry
}
console.log(stringWChar(arry))


//Write a function that takes a num1 and num2 and 
//returns whether num1 is divisible by num2.

//console.log(isDivisible(4, 2)) // => true
//console.log(isDivisible(9, 3)) // => true
//console.log(isDivisible(15, 4)) // => false

