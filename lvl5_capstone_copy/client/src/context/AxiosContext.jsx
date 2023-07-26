import React, {useState, createContext, useEffect} from "react"
import axios from "axios"


const AxiosContext = createContext()

function AxiosContextProvider(props) {
     
    const [pets, setPets] = useState([])
     
    function getPets(){
        axios.get('/api/pets')
            //.then(res => console.log(res.data))
            .then(res => setPets(res.data))
            .catch(err => console.log(err))
    }
    
    function addPet(newPet, owner){
        axios.post(`/api/pets/${owner}`, newPet)
            .then(res => {
                setPets(prevPets => [...prevPets, res.data])
            })
            .catch(err => console.log(err))
    }
    
    function deletePet(petId){
        axios.delete(`/api/pets/${petId}`)
           .then(res => setPets(prevPets => prevPets.filter(pet => pet._id !== petId)))                          
           .catch(err => console.log(err))
    }  
    
    function updatePet(petId, updates){
        axios.put(`/api/pets/${petId}`, updates)
            //.then(res => {console.log(res)}) // this is where it will update setPets
            .then(res => {
                setPets(prevPets => prevPets.map(pet => (pet._id !== petId ? pet : res.data)))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPets()
    }, [])

    return(
        <AxiosContext.Provider 
            value={{
                pets,
                getPets,
                addPet,
                deletePet,
                updatePet
            }}
        >
            {props.children}
        </AxiosContext.Provider>

    )
}

export {AxiosContext, AxiosContextProvider}