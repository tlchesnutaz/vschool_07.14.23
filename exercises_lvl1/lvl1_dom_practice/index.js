/**
 * CHALLENGE:
 * 
 * Play around with all the different DOM methods for selecting and modifying elements.
 * Make sure to read through the `notes.md` file for a recap and some new information regarding using the DOM API
 * These notes are in word doc VSchool Level 1
 */

var header1 = document.getElementById("header1")
console.log(header1)
header1.style.color = "rgb(0,204,255)"

var header2 = document.querySelector("#header2")
console.log(header2)
header2.style.font = "verdana"
header2.style.textAlign = "center"

var classList = document.getElementsByClassName("list-items")
console.log(classList)
for(var i = 0; i<classList.length; i++) {
    console.log(classList[i].textContent = "List Item " + [i+1])
}

var navbar = document.querySelectorAll("ul > li");
console.log(navbar)
for (var i = 0; i<navbar.length; i++) {
    navbar[i].style.backgroundColor = "rgb(255,153,221)";
}

