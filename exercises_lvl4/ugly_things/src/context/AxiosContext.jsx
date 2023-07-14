import React, {useState, createContext} from "react"
import axios from "axios"

const AxiosContext = createContext() 

function AxiosContextProvider(props) {

    const baseUrl = "https://api.vschool.io/tracychesnut/thing"

    const [ugliesList, setUgliesList] = useState([])

    function getAll(){
        axios.get(`${baseUrl}`)
        .then(res => setUgliesList(res.data))
        .catch(err => console.log(err))
    }

    function handleSubmit(newThing) {
       
        axios.post (`${baseUrl}`, newThing)
        .then(res => setUgliesList(prevUgliesList =>{
            return [...prevUgliesList,
                res.data
            ]
        }))
        .catch(err => console.log(err))
    }
 
    function handleDelete(id) { //can name (id) whatever, it is a param we pass in
        //it is defined in mappedUglies in the onClick event
        console.log(id)
        axios.delete(`${baseUrl}/${id}`)
            .then(() => getAll())
              //return prevUgliesList.filter(thing => thing._id !== id)
              //this sets setUgliesList to refresh on delete without img we just deleted
            .catch(err => console.log(err)) 
    }

    function updateUgly(id, card) {
        axios.put(`${baseUrl}/${id}`, {
            title: card.title,
            description: card.description,
            imgUrl: card.imgUrl
        })
        .then(() => getAll())
        .catch(err => console.log(err))
    }

    return(
        <AxiosContext.Provider value={{
            handleSubmit,
            getAll,
            ugliesList,
            handleDelete,
            updateUgly
        }}
        >
            {props.children}
        </AxiosContext.Provider>
    )     
}

export {AxiosContext, AxiosContextProvider}