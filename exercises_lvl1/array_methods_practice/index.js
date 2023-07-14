var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//1 Remove the last item from the vegetable array.
vegetables.pop()
console.log("vegetables: ", vegetables);  

//2 Remove the first item from the fruit array.
fruit.shift()
console.log("fruit: ", fruit);

//3 Find the index of "orange."
var orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)

//4 Add that number to the end of the fruit array.
fruit.push(orangeIndex)
console.log("fruit: ", fruit);

//5 Use the length property to find the length of the vegetable array.
console.log(vegetables.length)

//6 Add that number to the end of the vegetable array.
vegetables.push(vegetables.length)
console.log(vegetables)

//7 Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables)
console.log(food)

//8 Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2)
console.log(food)

//9 Reverse your array.
foodReversed = food.reverse()
console.log(foodReversed)

//10 Turn the array into a string and return it.
foodJoined = food.join(",")
console.log(foodJoined)

//If you've done everything correctly, the last step should print the following string to the console:
// 3,pepper,1,watermelon,orange,apple
