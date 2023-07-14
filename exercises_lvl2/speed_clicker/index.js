
let countBox = document.getElementById("countBox")

document.addEventListener("click", clickCount) 
   
function clickCount(){
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 0;
      }
      document.getElementById("countBox").innerHTML = "Click count is: " + localStorage.clickcount;
}

function clearCount(){
    localStorage.clickcount = 0
}



