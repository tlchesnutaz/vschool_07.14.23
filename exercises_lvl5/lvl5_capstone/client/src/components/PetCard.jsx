import React, { useState, useContext } from "react"
import { AxiosContext } from "../context/AxiosContext"
import moment from "moment"


export default function PetCard(props) {
    
   const {pets, deletePet} = useContext(AxiosContext)
   const [toggleEdit, setToggleEdit] = useState(false)    
        
   return(
      <div className="container-petcard">
         <h3> Your Pets </h3>

         <div className="pet-list"> 
            {pets.map(pet => 
               <div className="key" key={pet._id}>
                  <p>Name: {pet.petName}</p>
                  <p>Type: {pet.species}: {pet.specific}</p>
                  <p>DOB:{pet.dob ? moment(pet.dob).format('MM-DD-YYYY') : " Unknown"}</p>
                  <p>Date acquired: {pet.acquired ? moment(pet.acquired).format('MM-DD-YYYY') : " empty"}</p>
                  <p>Gender: {pet.gender}</p>
                  <p>Neutered: {pet.neutered ? 'Yes' : 'No' }</p>
                  <p>{pet.chipNum ? `MicroChip Number: ${pet.chipNum}` : ' '}</p>
                  <p>{pet.lastVac ? `Last Vaccination Date: ${moment(pet.lastVac).format('MM-DD-YYYY')}` : ' '}</p>
                  <p>Vet: {pet.vetName}</p>
                  <p>Vet Phone #: {pet.vetPhone}</p>
                  <p>Notes: {pet.notes}</p>
                  <p>Owner: {pet.owner}</p> {/*how to render Owner's name?*/}
                  {/* <img src="data:image/<%=image.img.contentType%>;base64,<%=image.img.data.toString('base64')%>"
                  /> why is this so complicated... */}
                  <button onClick={() => setToggleEdit(prevToggle => !prevToggle)}> Edit </button>
                  <button onClick={() => deletePet(pet._id)}> Remove </button>
               </div>
            )}

         </div> 
      </div>
      )
}