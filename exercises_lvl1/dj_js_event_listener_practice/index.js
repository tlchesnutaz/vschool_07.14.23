var square = document.getElementById("square");

square.addEventListener("mouseover", function () {
    square.style.backgroundColor = "blue";
})
square.addEventListener("mouseout", function () {
    square.style.backgroundColor = "purple";
})
square.addEventListener("mousedown", function () {
    square.style.backgroundColor = "red";
})
square.addEventListener("mouseup", function () {
    square.style.backgroundColor = "yellow";
})
square.addEventListener("dblclick", function () {
    square.style.backgroundColor = "green";
})
document.addEventListener("wheel", function () {
    square.style.backgroundColor = "orange";
})
document.addEventListener("keydown", (e) => {
    if (e.key === "r")   
    square.style.backgroundColor = "red";
})
document.addEventListener("keydown", (e) => {
    if (e.key === "y") 
        square.style.backgroundColor = "yellow";
})
document.addEventListener("keydown", (e) => {
    if (e.key === "b") 
        square.style.backgroundColor = "blue";
})
document.addEventListener("keydown", (e) => {
    if (e.key === "g") 
        square.style.backgroundColor = "green";
})
document.addEventListener("keydown", (e) => {
    if (e.key === "o") 
        square.style.backgroundColor = "orange";
})
  
//  what are the differences?  () =>, (e) =>, function ()  
