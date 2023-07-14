const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e);
    document.getElementById("list").appendChild(subItem)
})

// create the color dropdown and give it functionality
function createDropDown(){
    const dropDown = document.createElement("select")

    for (var i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    //set the color for the background of the list item
    dropDown.addEventListener("change", function(e){
        e.target.parentElement.style.backgroundColor = e.target.value
    })
    return dropDown
}

// create the input item  
function createSubItem(e){
    const subItem = document.createElement("div")
    const subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue.value
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}



//  subItemValue.textContent = ""  
   
  

