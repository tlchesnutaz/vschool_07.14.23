const form = document["my_form"]

// for forms use a submit event to grab the info in the input

form.addEventListener("submit", function(event){
    event.preventDefault()

// create variables that contain the user input using the name attribute of the input element    
    const firstName = form.firstName.value
        const lastName = form.lastName.value

    form.firstName.value = ""
    form.lastName.value = ""

// console.log(firstName + " " + lastName)
    
    // 1. create <h2><h2/> tag
    const h2 = document.createElement('h2')
    // 2. put text content from inputs into h2 -> <h2>Harry Potter<h2/>
    h2.textContent = firstName + " " + lastName
    // 3. append it to the DOM - ie. show up on the page - the [0] indicates it is the first body element it comes across
    document.getElementsByTagName("body")[0].append(h2)

// Radio Inputs
// radio typically used for selection - t/f, race, etc. 
// if they have the same name, html will only allow one of them to be selected!
     
    console.log(form.yes_no.value)

// Checkbox Inputs
// console.log(form.favFood)
// checkboxes are returned as RadioNodeList - an array of the inputs (which are html elements that are checkbox elements)
    const checkedInputs = []

    for(let i = 0; i < form.favFood.length; i++){
        if(form.favFood[i].checked){
            checkedInputs.push(form.favFood[i].value)
        }
    }
    console.log(checkedInputs)

// Select Option Inputs
    console.log(form.city.value)

})

// Newer coding has a lot of default actions you don't need to do manually - this is good and bad.
// Just adding the button in the form tag allows a submit event when you click the button. 
// Make sure to add the submit event to the form, NOT the button!
// The "submit" also allows the enter key to function as a 'click' event on the page

// Submit events automaticalyy refresh the page - we don't want this bc we will lose all the info on the form.
// With any form the first thing is to prevent this with the preventDefault() on the event object.
// give the input a name so that it can be directly accessed 
