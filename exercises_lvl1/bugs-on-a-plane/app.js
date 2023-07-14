const form = document["airlineForm"];

form.addEventListener("submit", function(event){
    event.preventDefault()

//const submit = document.getElementById(submit);

//var query = document.querySelector;
//console.log(query)


function formAlert() {

    const firstName = form.firstName.value;
    console.log(firstName)

    const lastName = form.lastName.value;

    const age = form.age.value;

    const gender = form.gender.value;

    const location = form.travelLocation.value;


    const diet = []

    for(let i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            diet.push(form.diet[i].value)
        }
    }

    alert("This page says:" + "\nFirst Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident...");
}

submit.addEventListener('click', formAlert);

})
