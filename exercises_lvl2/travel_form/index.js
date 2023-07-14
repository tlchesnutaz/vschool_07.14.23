//assign form to variable to be able to access elements
const form = document["travForm"];

//prevent auto refresh
form.addEventListener("submit", function(event){
    event.preventDefault()

//function to create pop up window on submit
function formAlert(){

    //define, assign variables
    let firstName = form.firstName.value;
    console.log(firstName)
    let lastName = form.lastName.value;
    console.log(lastName)
    let age = parseInt(form.age.value);
    console.log(age)
    let travLocation = form.travLocation.value;
    console.log(travLocation)
    //for loop to id and push any checked boxes using checked property to array
    let diet = []
    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            diet.push(form.diet[i].value)
        }
    }
    console.log(diet)
    let accommods = form.accommods.value;
    console.log(accommods)
    
    let request = form.accommodRequest.value
    console.log(request)

        //if (form.accommodRequest.value == " "){
        //    request = "You don't need any accommodations."
        //} else {
        //    request = form.accommodRequest.value
        //}
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nYou are going to: " + travLocation + "\nDietary needs: " + diet + "\nNeed accommodations: " + accommods + "\nYou need: " + request);
}

submit.addEventListener("click", formAlert);

})
