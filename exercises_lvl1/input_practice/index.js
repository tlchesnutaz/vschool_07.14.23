var word = document.getElementById("word")
var submit = document.getElementById("submit")
var text = document.getElementById("text")

submit.addEventListener("click", submitInput)

function submitInput(){
    console.log(word.value)
    // console.log("is button working?")
    text.textContent = word.value
}

