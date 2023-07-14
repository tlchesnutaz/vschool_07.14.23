// FORM FOR THE POST REQUEST 
//This happens first, sets form, prevents refresh gets info from form, 
//clears form and sends request/update, then gets all the data in the db
const todoForm = document["todoForm"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value
        //img
    }
    
    todoForm.title.value = ""
    
    axios.post("https://api.vschool.io/tracychesnut/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})

// GET's THE TODO's FROM THE DATABASE
//this happens second
function getData(){
    axios.get("https://api.vschool.io/tracychesnut/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
        
}

// innerHTML

// LISTS THE TODO TITLES TO THE DOM
function listData(data){ //this happens third
    //document.getElementById('todoList').innerHTML = "" //this will clear any previous requests from the dom.page so they aren't 'piling up'
    //the problem with this is that not all browsers support this so see function for clearList()
    clearList() //this happens 3a

    for(let i = 0; i < data.length; i++){      // this is 3b
        const h1 = document.createElement('h1')
        const img = document.createElement('img')
        h1.textContent = data[i].title
        img.src = data[i].imgUrl
        document.getElementById('todoList').appendChild(h1)
        document.getElementById('todoList').appendChild(img)
        //is there away to remove the image placeholder if either no image of no tag at all?
        // if (data[i].imgUrl === ""){
        //     const p = document.createElement('p')
        //     p.textContent = "No info"
        //     document.getElementById('todoList').appendChild(p)
        // }
        
    }  
}

function clearList(){
    const el = document.getElementById('todoList') 
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()

