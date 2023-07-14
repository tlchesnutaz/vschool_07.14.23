const form = document['message']




// select header and edit display properties
var header = document.getElementById("header");
header.textContent = "JavaScript Made This!";
header.style.textAlign = "center"; font = "Garamond"; 
header.style.fontSize = "45px";

// why couldn't I add the third style to the first 'call' (is that the right word?)?

// create a div for the 2nd part of the subtitle
var subTitle = document.createElement("div");
subTitle.textContent = "wrote the JavaScript"; 
subTitle.style.fontSize = '25px';

// create a span so name can have a diff color
var span = document.createElement("span");
span.setAttribute('class', 'span');
span.textContent = "Tracy ";

// give the theme dropdown label an id 
var label = document.querySelector("label");
label.setAttribute('id', "label");

// why did querySelector work, but not getElementByTagName?

// insert the subtitle before the theme dropdown label, then center and prepend name 
document.body.insertBefore(subTitle, label);
subTitle.style.textAlign = "center";
subTitle.prepend(span);



// select messages and change the text
var text= document.getElementsByClassName("message left");
text[0].textContent = "I have something hilarious to talk about";
text[1].textContent = "You have time today?";

var text2 = document.getElementsByClassName("message right");
text2[0].textContent = "I can't wait to talk";
text2[1].textContent = "I'm just finishing up, brt :)";

// set the functionality of the clear button
var clear = document.getElementById("clear-button");
clear.addEventListener("click", clearMessages);

function clearMessages() {
    text[0].textContent = "";
    text[1].textContent = ""; 
    text2[0].textContent = "";
    text2[1].textContent = ""; 
    //document.getElementById("input").value = ""
    input.value = "";
}

// why can't I select these as an array - text[0,1]?

// select the theme drop down and add functionality
var theme = document.getElementById("theme-drop-down");
theme.addEventListener("change", changeTheme);

// set the display properties for the different themes
function changeTheme () {
    if (theme.value == "theme-two") {
    text2[0].setAttribute("style", "background:black; color:white;");
    text2[1].setAttribute("style", "background:black; color:white;");
    text[0].setAttribute("style", "background:red; color:white;");
    text[1].setAttribute("style", "background:red; color:white;");

    } else if (theme.value == "theme-one") {
        text2[0].setAttribute("style", "background:lightblue; color:black;");
        text2[1].setAttribute("style", "background:lightblue; color:black;");
        text[0].setAttribute("style", "background:burlywood; color:black;");
        text[1].setAttribute("style", "background:burlywood; color:black;");
    }
}


// prevent default auto refresh for form (new message input)
form.addEventListener('submit', function(event){
    event.preventDefault()

// select new message input give it a name so you can select it
var input = document.getElementById("input");
input.setAttribute("name", "newMessage")

// get value from input
const newMessage = form.newMessage.value
console.log(newMessage)

text[0].textContent = newMessage
form.newMessage.value = ""

})




//function inputNew () {
// for (i = 0; i < ???; i++) {
// if (i % 2 === 0)    
//text[0].textContent = newMessage.value
//text[1].textContent = ""; 
//text2[0].textContent = "";
//text2[1].textContent = ""; 
//}

