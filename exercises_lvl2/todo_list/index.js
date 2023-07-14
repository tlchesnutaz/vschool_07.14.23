// Part 1 - GET
// The user can see their current list of todos
// Todos show up as soon as the page loads
// If a todo item is complete, it should have a strikethrough line on it
// Images should be displayed as images if there are any
// Hints: a createTodo function that takes one todo and inserts it to the DOM is very userful
// Use postman to get those first few todos in there with some images so you can style your list!

// GET todo's from db 
function getData(){
    axios.get("https://api.vschool.io/tracychesnut/todo")
    .then(res => createTodo(res.data))
    .catch(err => console.log(err))
}

const list = document.getElementById('todoList')
//console.log('list', list)

//insert the todo's to the dom
function createTodo(data){

    //console.log('data', data)
    
    clearDom()
   
    for(let i = 0; i < data.length; i++){     
        
        //style each in css using classList set here
        let url = "https://api.vschool.io/tracychesnut/todo/";
        let todoId = data[i]._id;       
        let itemUrl = url + todoId;

        const todoBox = document.createElement("div")
        todoBox.classList.add('todo-box')    
        const h4 = document.createElement('h4');
        h4.textContent = data[i].title;
        h4.classList.add("itemTitle");
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        if (data[i].completed === true) {
            checkbox.checked = true;
            h4.style.textDecoration = "line-through";
    
        } else {
            checkbox.checked = false;
        }
        checkbox.classList.add("checkbox")
        //?? how would I use toggle to switch back and forth from checked w/line to unchecked w/no line???
        const priceBox = document.createElement('p');
        if (data[i].price !== undefined) {   // how to fix null from empty input on save edit???
        priceBox.textContent = (`$${data[i].price}`) 
        }
        priceBox.classList.add('curr')

        const descBox = document.createElement('div');
        descBox.classList.add('descBox');
        const p = document.createElement('p');
        p.textContent = data[i].description;
        p.classList.add("itemDesc");
        const editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.classList.add("edit");
        editButton.setAttribute("id", itemUrl)
        //console.log(itemUrl)
        const saveButton = document.createElement('button')
        saveButton. textContent = "Save"
        saveButton.classList.add("save");
        saveButton.setAttribute("id", itemUrl)
        //console.log(saveButton.id)
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete");

        const imgBox = document.createElement('div');
        imgBox.classList.add('imgBox');
        const img = document.createElement('img');
        let imgUrl = data[i].imgUrl;
        if (imgUrl !== undefined) {
            img.src = imgUrl;
        }               
        //console.log(itemUrl)

        const editBox = document.createElement('div')
        editBox.setAttribute("id", "editBox")
        const editTitle = document.createElement('input')
        const editDesc = document.createElement('input')
        const editPrice = document.createElement('input')
        const editImg = document.createElement('input')

        list.appendChild(imgBox);
        imgBox.appendChild(img);
        list.appendChild(todoBox);
        todoBox.appendChild(checkbox);
        todoBox.appendChild(h4);
        todoBox.appendChild(priceBox);
        list.appendChild(descBox);
        descBox.appendChild(p);
        descBox.appendChild(editButton);
        descBox.appendChild(saveButton);
        descBox.appendChild(deleteButton);
        descBox.appendChild(editBox)
        editBox.appendChild(editTitle)
        editBox.appendChild(editDesc)
        editBox.appendChild(editPrice)
        editBox.appendChild(editImg)
        
        editBox.style.display = 'none'
        saveButton.hidden = true
        
        // create function for editing each todo...
        function editTodo(e) {
            axios.get(editButton.id)
            .then(res => { 
            //console.log(res.data))         
            editTitle.value = res.data.title
            //console.log(editTitle)
            if (res.data.description !== undefined) {
            editDesc.value = res.data.description
            //console.log(editDesc)
            }
            if (res.data.price !== undefined) {
            editPrice.value = res.data.price
            //console.log(editPrice)
            }
            if (res.data.imgUrl !== undefined) {
            editImg.value = res.data.imgUrl
            }
            })
            .catch(err => console.log(err))
            editBox.style.display = "flex"
            editButton.hidden = true
            saveButton.hidden = false 
        }
        editButton.addEventListener("click", editTodo);

        function updateTodo(e) {
            
            const updatedTodo = {
                title: editTitle.value,
                description: editDesc.value,
                price: editPrice.value,
                imgUrl: editImg.value
            }

            editTitle.value = ""
            editDesc.value = ""
            editPrice.value = ""
            editImg.value = ""

            axios.put(saveButton.id, updatedTodo)
            .then(res => getData(res.data))
            .catch(err => console.log(err))
        
            saveButton.hidden = true
            editBox.style.display = 'none'
            editButton.hidden = false 
    
        }
        saveButton.addEventListener("click", updateTodo);
       

        // Part 4 - DELETE
        // A user will be able to delete todos (this is different from marking a todo as "completed")
        // Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo        
          
        function deleteItem () {
            //console.log(e.target.parentElement)
            axios.delete(itemUrl)
            .then(res => getData(res.data)) //get page to refresh after delete
            .catch(err => console.log(err))
            
        }
        deleteButton.addEventListener("click", deleteItem);


        // Part 3 - PUT Part 1
        // Each todo will have a checkbox where it can be marked complete or incomplete
        // Checking the checkbox should update the database 

        function completeItem () {
            if (checkbox.checked === true) {
            axios.put(itemUrl, {'completed': true})
            .then(res => console.log(res.data.msg))
            .catch(err => console.log(err))
            }
            h4.style.textDecoration = "line-through"
        }
        checkbox.addEventListener("change", completeItem);
    }  
}


    
function clearDom(){
    const el = document.getElementById('todoList') 
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()

// Part 2 - POST
// The user can add new todos to their list. The new item should be posted to the todo API so a future reload of the page will still display that new todo item. Making the new todo appear without a refresh is extra credit, but you're encouraged to attempt it.
// A user should be able to give the item a title
// A user should be able to give the item a price
// A user should be able to give the item a description
// A user should be able to attach an imgUrl to the item

//sets form, prevents refresh, gets info from form, clears form, sends request/update, gets all data in the db
const todoForm = document["todoForm"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.price.value = ""
    todoForm.imgUrl.value = ""
    
    axios.post("https://api.vschool.io/tracychesnut/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})


// Part 5 - CSS
// Presentation of the list will be uniform
// Color and basic styling will be applied to list
// Page will be responsive
// Flexbox/Grid will be used to align elements on the page
// Styling ideas:
// If you want some pretty looking ToDo list website examples take a look HERE

// EXTRA CREDIT - PUT Part 2  >>> The following is not required. 
//If you have enough time and would like an additional challenge, you may attempt 
//to implement these features in your todo list.  
// Each Todo will have an "edit" button
// When clicked, the info will change to input boxes that are autofilled with the old Todo data
// A user can change the value of these inputs
// When the "edit" button is clicked, it will change to a "save" button
// When "save" is clicked, the form will disappear, and the new values will be displayed
// On save, the todo will be edited in the database