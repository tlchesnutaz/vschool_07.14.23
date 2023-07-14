//console.log(axios)
// - A Get request as we recall is for 'getting' data
//     - This can be requesting an entire webpage, or requesting data that we can manipulate for our webpage.
//     - In the context of this course, we will always be using axios to get and manipulate data rather than receiving an entire webpage.
//     - For these lessons we will be using the V school Todo API as it will allow us to practice all four of the HTTP methods we are learning.  The documentation can be found here:
// - V School API documentation: https://coursework.vschool.io/v-schools-todo-api-documentation/

// GET requests with axios
// url: https://api.vschool.io/tracychesnut/todo

// GET All
// axios.get("https://api.vschool.io/tracychesnut/todo")
//     .then(response => console.log(response.data))    //if you just type response it give back a bunch of other info as well
//     .catch(error => console.log(error))


//GET One
// axios.get("https://api.vschool.io/tracychesnut/todo/63eda3735d714865d31d5da5")
//     .then(response => {                  //console.log(response.data)
//         const img = document.createElement('img')
//         img.src = response.data.imgUrl
//         document.body.appendChild(img)
//     })
//     .catch(error => console.log(error))

// GET All and log to HTML
axios.get("https://api.vschool.io/tracychesnut/todo")
     .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h2 = document.createElement('h2')
            const img = document.createElement('img')
            h2.textContent = response.data[i].title
            img.src = response.data[i].imgUrl
            document.body.appendChild(h2)
            document.body.appendChild(img)
        }
     })    
     .catch(error => console.log(error))

// POST requests with axios
// Request Body

// const newTodo = {
//     title: "My 3rd Todo",
//     description: "This is my first post in AXIOS!",
//     imgUrl: "https://images.unsplash.com/photo-1613820070607-ef1d3ccc07f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0b3JtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
// }

// const todoForm = document.todoForm

// todoForm.addEventListener("submit", function(event){
//     event.preventDefault()
    
//     const newTodo = {
//         title: todoForm.title.value,
//         description: todoForm.description.value,
//         imgUrl: todoForm.imgUrl.value
//     }
    
//     axios.post("https://api.vschool.io/tracychesnut/todo", newTodo)
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))
// })

// DELETE requests with axios
//# Delete Request
    // - The delete request is for removing an item that currently exists in the database.    
    // - Delete requests will typically require the id or identifier of the specific resource so that the database knows which item to remove.        
    

    // axios.delete("https://api.vschool.io/tracychesnut/todo/<id>")
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error))> input

//PUT requests with axios
//- The put request is for updating an existing item in a database
// - The method will need both the id of the item to update, and the data in which it will be updated with.

// const updates = {
//     title: "I CHANGED THE TITLE!"
// }

// axios.put("https://api.vschool.io/tracychesnut/todo/<id>", updates)       //{properties to be updated}, i.e. the request body
//     .then(response => console.log(reponse.data))
//     .catch(err => console.log(err))

//In JS this is a way to update an object, this is 'similar' to what axios is doing
// const person = {
//     name: "Steve",
//     age: 26
//     }
// const updates = {
//     name: "Dan"
// }
// const result = Object.assign(person, updates)
// console.log(result)
