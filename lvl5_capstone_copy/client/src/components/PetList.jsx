import React, { useState, useContext } from 'react'
import { AxiosContext } from '../context/AxiosContext'
//import moment from 'moment'
//import AddPetForm from './AddPetForm'
//import EditForm from './EditForm'
import PetCard from './PetCard'

export default function PetList(props) {
	const { pets, deletePet } = useContext(AxiosContext)

    const listElements = pets.map(pet => {

      return (
            <PetCard
				key = {pet._id} 
				pet = {pet}
			/>         
      )
    })

	console.log(pets)

	return (
		<div className="container-petcard">
			<h3> Your Pets </h3>

			<div className="pet-list">
				{listElements }
			
			</div>
		</div>
	)
}
