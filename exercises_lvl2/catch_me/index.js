

function sum(num1, num2){
    if (typeof num1 === 'number' && typeof num2 === 'number'){
        console.log(num1 + num2);
    } else throw new Error ("You need to enter numbers.")  
}

try{
    sum(4, 7)

} catch(err){
    console.log(err)
}

let user = {username: "sam", password: "tarNat1on"}

function logIn(username, password){
    if (username === user.username && password === user.password){
    console.log("login successful!")
    } else throw new Error ("username and/or passwords don't match")
}

try{
    logIn('sam', 'tarNat1on')
} catch(err){
    console.log(err)
}

//conceptual of Red Green testing
//write out test, set up function initally to fail, then flesh it out as you go

function sum(num1, num2){
    return num1 + num2
}

// expected, actual
const actual = sum(10, 10)
const expected = 20

if(actual !== expected){
    throw new Error(`TEST FAILED: Expected ${expected}, but received ${actual}.`)
} else {
    console.log(`TEST PASSED: ${expected} === ${actual}`)
}
