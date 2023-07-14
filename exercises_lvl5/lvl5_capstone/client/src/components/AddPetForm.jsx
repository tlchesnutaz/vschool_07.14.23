import React, { useState, useContext } from "react"
import { AxiosContext } from "../context/AxiosContext"


export default function AddPetForm() {

    const { pets, addPet } = useContext(AxiosContext) // getPets?
    console.log(pets)

    const initInputs = {
        petName: pets.petName || '',
        species: pets.species || '',
        specific: pets.specific || '',
        dob: pets.dob || '',
        acquired: pets.acquired || '', 
        gender: pets.gender || '',
        neutered: pets.neutered || '',
        chipNum: pets.chipNum || '',
        lastVac: pets.lastVac || '',
        vetName: pets.vetName || '',
        vetPhone: pets.vetPhone || '',
        notes: pets.notes || '',
        owner: pets.owner || '',
        // ? petPic: pets.petPic || ''
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value, type, checked} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: type === "checkbox" ? checked : value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(inputs)
        addPet(inputs, inputs.owner)

        setInputs(initInputs)
    }

    return(
        
        <form className="form" onSubmit={handleSubmit}>
            
            <input 
                type="text" 
                name="petName" 
                placeholder="Pet Name"
                value={inputs.petName} 
                onChange={handleChange} 
            /> 
            <br/>
            <input 
                type="text" 
                name="species" 
                placeholder="Species"
                value={inputs.species} 
                onChange={handleChange} 
            />
            <br/> 
            <input 
                type="text" 
                name="specific" 
                placeholder="Type or Breed"
                value={inputs.specific} 
                onChange={handleChange} 
            /> 
            <br/>
            <input 
                type="date" 
                name="dob" 
                id="dob"
                placeholder="DOB"
                value={inputs.dob} 
                onChange={handleChange} 
            /> 
            <label htmlFor="dob"> DOB (if known) </label>
            <br/>
            <input 
                type="date" 
                name="acquired" 
                id="acquired"
                placeholder="Date Acquired"
                value={inputs.acquired} 
                onChange={handleChange} 
            /> 
            <label htmlFor="acquired"> Date Acquired </label>
            <br/>
            <fieldset>
                <legend> Gender: </legend>
                <input 
                    type="radio"
                    id="male" 
                    name="gender" 
                    value="male" 
                    checked={inputs.gender === "male"} 
                    onChange={handleChange}
                />
                <label htmlFor="male"> Male </label>
                <input 
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={inputs.gender === "female"}
                    onChange={handleChange}
                />
                <label htmlFor="female"> Female </label>    
            </fieldset>
            <fieldset>
                <legend> Spayed/Neutered: </legend>
                <input 
                    type="radio"
                    id="true"
                    name="neutered" 
                    value="true"
                    checked={inputs.neutered === "true"} 
                    onChange={handleChange}
                />
                <label htmlFor="true"> Yes </label>
                <input 
                    type="radio"
                    id="false"
                    name="neutered"
                    value="false"
                    checked={inputs.neutered === "false"}
                    onChange={handleChange}
                />
                <label htmlFor="false"> No </label>    
            </fieldset>
            <input 
                type="text" 
                name="chipNum" 
                placeholder="Microchip #"
                value={inputs.chipNum} 
                onChange={handleChange} 
            />
            <br/> 
            <label htmlFor="lastvac"> Date of last vaccinations: </label>
            <input 
                type="date" 
                name="lastVac" 
                id="lastvac"
                placeholder="Date"
                value={inputs.lastVac} 
                onChange={handleChange} 
            /> 
            <br/>
            <label htmlFor="vetname"> Vet Name: </label>
            <input 
                type="text"
                name="vetName"
                id="vetname" 
                placeholder="Vet"
                value={inputs.vetName} 
                onChange={handleChange} 
            /> 
            <br/>
            <label htmlFor="vetphone"> Vet Phone #: </label>
            <input 
                type="number"
                name="vetPhone" 
                id="vetphone"
                placeholder="Format 1234567890"
                value={inputs.vetPhone} 
                onChange={handleChange} 
            />
            <br/>
            <label htmlFor="notes"> Notes: </label>
            <textarea 
                name="notes"
                id="notes"
                rows={2}
                cols={40}
                placeholder="Other inportant information, such as surgeries, chronic conditions, etc."
                value={inputs.notes}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="owner" 
                placeholder="Owner ID"
                value={inputs.owner} 
                onChange={handleChange} 
            />
            <br/>
            {/* <input
                type="file"
                name="petpic"
                placeholder="Select Image"
                value={inputs.petPic}
                accept="image/*"
                onChange={handleChange}  
            /> 
            NEED TO FIGURE THIS OUT - see notes in pet.js */}
            <button> Add Pet </button>

        </form>   
    )
}