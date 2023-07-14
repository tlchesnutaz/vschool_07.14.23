//add
const formAdd = document["add"]
formAdd.addEventListener("submit", function(event){
    event.preventDefault()

//declare and assign variables 
let addNum1 = parseInt(formAdd.addNum1.value)
let addNum2 = parseInt(formAdd.addNum2.value)
let returnAdd = document.getElementById("returnAdd")
   
//function to add numbers
function addNums(addNum1, addNum2){
    let result = addNum1 + addNum2
    console.log({result}) 
    returnAdd.textContent = ("The result is: " + result)
}

//clear contents of inputs on submit
//can't seem to make anything work :(

//add functionality to submit button
submitAdd.addEventListener("click", addNums(addNum1, addNum2))
})

//subtract - need to fix - not subractacting neg nums correctly
const formSub = document["sub"]
formSub.addEventListener("submit", function(event){
    event.preventDefault()

let subNum1 = parseInt(formSub.subNum1.value)
let subNum2 = parseInt(formSub.subNum2.value)
let returnSub = document.getElementById("returnSub")
    
//function to subtract numbers
function subNums(subNum1, subNum2){
    let result = subNum1 - subNum2
    console.log({result}) 
    returnSub.textContent = ("The result is: " + result)
}

//add functionality to submit button
submitSub.addEventListener("click", subNums(subNum1, subNum2))
})

//multiply
const formMult = document["mult"]
formMult.addEventListener("submit", function(event){
    event.preventDefault()

let multNum1 = parseInt(formMult.multNum1.value)
let multNum2 = parseInt(formMult.multNum2.value)
let returnMult = document.getElementById("returnMult")
    
//function to subtract numbers
function multNums(multNum1, multNum2){
    let result = multNum1 * multNum2
    console.log({result}) 
    returnMult.textContent = ("The result is: " + result)
}

//add functionality to submit button
submitMult.addEventListener("click", multNums(multNum1, multNum2))
})
