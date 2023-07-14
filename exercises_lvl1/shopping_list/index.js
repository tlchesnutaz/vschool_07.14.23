// select the form by name property?
const form = document['addItem']

// prevent page refresh
form.addEventListener('submit', function(event) {
    event.preventDefault()

// get value from input (title is id of input)
   const addItem = form.title.value

// set the formatting
   const capItem = addItem.charAt(0).toUpperCase() + addItem.slice(1)
   console.log(capItem)
// wanting to determine if first chars are number and space or not, then cap first of actual string...
//   if addItem.value ???

   const list = document.getElementById('list')  

// creat new li, give it value of input and add to ul   
    const newItem = document.createElement('li')
    const newDiv = document.createElement('div')
    newDiv.textContent = capItem

// empty the input on submit
    form.title.value = ""

// create new edit and X buttons
    const editButton = document.createElement('button')
    editButton.textContent = "edit"

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "X"

// disregard - need the [0] bc creates an array // document.getElementsByTagName('ul')[0].append(newItem)

// add the new li, div w/input and edit & x buttons
    list.append(newItem)
    newItem.append(newDiv)
    newItem.append(editButton)
    newItem.append(deleteButton)

// add functionalilty of delete button
    function deleteItem (e) {
        console.log(e.target.parentElement)
            e.target.parentElement.remove()
        }
   
    deleteButton.addEventListener("click", deleteItem);
 
// add functionality to edit button

    function editItem (e) {
        console.log(e.target)
        
        const editBox = document.createElement('input');
        editBox.setAttribute("type", "text");
        const saveButton = document.createElement('button');
        saveButton.textContent = "save"
        e.target.parentElement.append(editBox)
        e.target.parentElement.append(saveButton)
        //e.target.style = getComputedStyle(e.target)
        e.target.style.display = 'none'
        editBox.value = newDiv.textContent
    
        function saveEdit (e) {
            //console.log(e.target)
            newDiv.textContent = editBox.value
            //console.log(editBox.value)
            e.target.style.display = 'none'
            editBox.style.display = 'none'
            editButton.style.display = "inline-block"
        }
  
    saveButton.addEventListener('click', saveEdit)

    }

    editButton.addEventListener('click', editItem);

})
   
    