//Data Types - Create variable for each data type below using the example provided for a string 

//String - denoted/represented by " " ' ' - they are great for words,language
var firstName = "Andrew"
console.log(firstName)

const lastName = "Collins"
console.log(lastName)

let occupation = "Web Dev"
console.log(occupation)

////////

//Number - anything of numerical value - just a number
var streetNum = "1614"
console.log(streetNum)

var avgItemsSold = 72
console.log(avgItemsSold)

////////

//Boolean - true or false 
var isWinter = true
console.log(isWinter)

var isSnowing = false
console.log(isSnowing)
console.log("No snow :(")

/////////

//Array - are denoted/represented by [] - are great for holding multple pieces of data
//use bracket notation [] here with the array you created use 

var month = ["Jan", "Feb", "Mar", "Jun", "Sept", "Oct", "Nov"]
console.log("The current month is" + " " + month[6])
month.push("Dec")
console.log(month)
month.splice(3,0,"Apr")
console.log(month)

/////////

//Object - denoted/represented by {} - great for describing something in detail - like a billing address
// use dot notation . here with the object you created .

var address = {
    street: "46 Wildwood Circle",
    city: "Red Rock",
    state: "UT",
    zipCode: 84516
}
console.log(address.city)

//////////

//Create an object - use each datatype as a property
//Use dot and bracket notation to display your knowledge

var family = {
    lastNam: "williams",
    famMembers: 4,
    liveTog: true,
    firstNam: ["sally", "lucy", "will", "adam"],
    cars: {
        sally: "toyota",
        lucy: "kia",
        will: "ford",
        adam: "chevy"
    }   
}
console.log(family.cars.will)
console.log(family["liveTog"])
// couldn't get it to show both elemnts when mixing . and [], kept saying undefined.

//////////

//Condtional Statement
//if (this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}
//using the variable provided below create a condional statement

//Using below example below to create your own conditional statement.
var color = "red"

if (color === "red") {
    console.log("I am blue!")
} else if (color === 'blue') {
    console.log("I am red!")
} else {
    console.log(" i am something else!")
}


var temp = 75 //temp

if (temp >80){
    console.log("It's hot")
} else if (temp <70) {
    console.log("It's cold")
} else {
    console.log("Just right")
}

///////////


//For Loops - At their most elemetary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i

//for (#1Step start point; #2Step end point; #4Step howtogetthere){
//    #3Step what to do 
//} 

//i = i + 1 same i++

//Create 1 for loop

for (var i = 0; i < 13; i++) {
    console.log(i)
}


var numbers = [1, 2, 3, 4, 5, 6]

for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i])
    }
}

////////////

// function greeting() {
//    alert("Welcome to my Page")
// }

///////////////
//level 0 curriculm last 5 videos cover this material "DOM"

//1. Create button with an ID on it in HTML
//2. Call Button into JS using document and getting element by its ID
//3. Set that button equal to a variable
//4. with that variable use dot notation to access the addeventlistener method

// var newButton = document.getElementById("button-one")
// newButton.addEventListener( "click", greeting )


function travel() {
    var where = document.getElementById("input").value;
    document.getElementById("practice").innerHTML = "Let's go to " + where;
}
